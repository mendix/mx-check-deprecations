const AdmZip = require('adm-zip');
const path = require('path');
const xml2js = require('xml2js');
const xmlParser = new xml2js.Parser({
  mergeAttrs: true,
  explicitArray: false
});
const _ = require('lodash');

module.exports = class MPK {

  constructor(path) {
    if (!path) {
      throw new Error('No path given for MPK file');
    }
    this.path = path;
    this.archive = new AdmZip(path);
    this.pkg = {};
    this.getPackageXML();

    if (this.pkg.clientModule) {
      this.widgetVersion = this.pkg.clientModule.version || 'unknown';
      this.widget = {};
      this.type = 'widget';
      this.getWidgetIds();
    } else if (this.pkg.modelerProject) {
      this.type = 'module';
    } else {
      this.type = 'unknown';
    }
  }

  getPackageXML() {
    var pkg = this.findFile('package.xml');
    if (!pkg) {
      console.error('---------------> Can\'t find package.xml for ' + this.path + ' <----------------');
      return;
    }
    xmlParser.parseString(this.readFile(pkg.path), function (err, res) {
      if (err) {
        throw new Error(`Error parsing package.xml : ${err}`);
      }
      if (res.package) {
        this.pkg = res.package;
      }
    }.bind(this));
  }

  getWidgetIds() {
    if (!this.pkg) {
      throw new Error('package.xml not found');
    }

    var process = function (w) {
      xmlParser.parseString(this.readFile(w.path), function (err, res) {
        if (err || !res) {
          throw new Error(`Error parsing ${w.path}`);
        } else {
          if (res.widget && res.widget.id) {
            this.widget[res.widget.id] = res.widget.name || 'unknown';
          } else {
            throw new Error(`Error parsing ${w.path}, no res.widget or res.widget.id`);
          }
        }
      }.bind(this));
    }.bind(this);

    if (this.pkg.clientModule && this.pkg.clientModule.widgetFiles) {
      _.each(this.pkg.clientModule.widgetFiles, function (wf) {
        if (_.isArray(wf)) {
          _.each(wf, process);
        } else {
          process(wf);
        }
      });
    }
  }

  readFile(inZipPath) {
    return this.archive.readAsText(inZipPath);
  }

  findFile(name) {
    return _.find(this._getFiles(), (file) => file.filename === name);
  }

  getFiles(ext) {
    return _.filter(this._getFiles(), function (file) {
      return ext ? file.ext === ext : true;
    })
  }

  _getFiles() {
    var entries = [];
    this.archive.getEntries().forEach(function (zipEntry) {
      var p = path.parse(zipEntry.entryName);
      if (p.ext === '') {
        return;
      }
      entries.push(_.assign(_.omit(p, 'base'), {
        path: zipEntry.entryName,
        filename: p.base,
        file: zipEntry,
        ext: p.ext.replace('.', '')
      }));
    });
    return entries;
  }
}
