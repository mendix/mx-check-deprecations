var AdmZip = require('adm-zip'),
	path = require('path'),
	xml2js = require('xml2js'),
	xmlParser = new xml2js.Parser({
		mergeAttrs: true,
		explicitArray: false
	}),
	_ = require('lodash');

function MPK (path) {
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
	} else if (this.pkg.modelerProject && this.pkg.modelerProject) {
		this.type = 'module';
	} else {
		this.type = 'unknown';
	}
}

MPK.prototype.getPackageXML = function () {
	var pkg = this.findFile('package.xml');
	if (!pkg) {
		console.error('---------------> Can\'t find package.xml for ' + this.path + ' <----------------');
		return;
	}
	xmlParser.parseString(this.readFile(pkg.path), function (err, res) {
			if (err) {
				throw new Error('Error parsing package.xml');
			}
			if (res.package) {
				this.pkg = res.package;
			}
		}.bind(this));
};

MPK.prototype.getWidgetIds = function () {
	if (!this.pkg) {
		throw new Error('package.xml not found');
		return;
	}

	var process = function (w) {
		xmlParser.parseString(this.readFile(w.path), function (err, res) {
			if (err) {
				throw new Error('Error parsing ' + w.path);
			} else {
				if (res.widget && res.widget.id) {
					this.widget[res.widget.id] = res.widget.name || 'unknown';
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
};

MPK.prototype.readFile = function (inZipPath) {
	return this.archive.readAsText(inZipPath);
};

MPK.prototype.findFile = function (name) {
	return _.find(this._getFiles(), function (file) {
		return file.filename === name;
	});
};

MPK.prototype.getFiles = function (ext) {
	return _.filter(this._getFiles(), function (file) {
		return ext ? file.ext === ext : true;
	})
}

MPK.prototype._getFiles = function () {
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
};

module.exports = MPK;

// MPK.archive ::

/*
	readFile: [Function],
	readFileAsync: [Function],
	readAsText: [Function],
	readAsTextAsync: [Function],
	deleteFile: [Function],
	addZipComment: [Function],
	getZipComment: [Function],
	addZipEntryComment: [Function],
	getZipEntryComment: [Function],
	updateFile: [Function],
	addLocalFile: [Function],
	addLocalFolder: [Function],
	addFile: [Function],
	getEntries: [Function],
	getEntry: [Function],
	extractEntryTo: [Function],
	extractAllTo: [Function],
	extractAllToAsync: [Function],
	writeZip: [Function],
	toBuffer: [Function]
 */