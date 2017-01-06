module.exports = [
  {
    name: "mendix.dom",
    reg: "mendix.dom",
    solution: "mxui/dom",
    version: 6,
    comment: null
  },
  {
    name: "mendix.html",
    reg: "mendix.html",
    solution: "mxui/html",
    version: 6,
    comment: null
  },
  {
    name: "mendix.wm.focus",
    reg: "mendix.wm.focus",
    solution: "mxui/wm/focus",
    version: 6,
    comment: null
  },
  {
    name: "mxui.addon",
    reg: "mxui.addon",
    solution: "mxui/mixin",
    version: 6,
    comment: null
  },
  {
    name: "mendix.widget",
    reg: "mendix.widget",
    solution: "mxui/widget",
    version: 6,
    comment: null
  },
  {
    name: "mobile.dom",
    reg: "mobile.dom",
    solution: "mxui/dom",
    version: 6,
    comment: null
  },
  {
    name: "mendix.dom.liveconnect",
    reg: "mendix.dom.liveconnect",
    solution: "mxui/dom.liveConnect",
    version: 6,
    comment: null
  },
  {
    name: "mobile.widget._Widget",
    reg: "mobile.widget._Widget",
    solution: "mxui/widget/_WidgetBase",
    version: 6,
    comment: null
  },
  {
    name: "mxui.html.setContent",
    reg: ".setContent",
    solution: "mxui/dom.text",
    version: 6,
    comment: null
  },
  {
    name: "mxui.html.sanatizeHTMLString",
    reg: ".sanatizeHTMLString",
    solution: "mxui/dom.unescapeString",
    version: 6,
    comment: null
  },
  {
    name: "mxui.dom.removeElement",
    reg: ".removeElement",
    solution: "mxui.dom.orphan",
    version: 6,
    comment: null
  },
  {
    name: "mxui.dom.setTextContent",
    reg: ".setTextContent",
    solution: "mxui.dom.text",
    version: 6,
    comment: null
  },
  {
    name: "mxui.dom.getTextContent",
    reg: ".getTextContent",
    solution: "mxui.dom.text",
    version: 6,
    comment: null
  },
  {
    name: "mxui.dom.textContent",
    reg: ".textContent",
    solution: "mxui.dom.text",
    version: 6,
    comment: null
  },
  {
    name: "mxui.dom.removeChildNodes",
    reg: "removeChildNodes",
    solution: "dojo.empty",
    version: 6,
    comment: null
  },
  {
    name: "mxui.dom.clearSelectOptions",
    reg: "clearSelectOptions",
    solution: "dojo.empty",
    version: 6,
    comment: null
  },
  {
    name: "mxui.dom.getAncestorClass",
    reg: "getAncestorClass",
    solution: "Element#querySelectorAll",
    version: 6,
    comment: null
  },
  {
    name: "mxui.dom.getElementsByTagNames",
    reg: "getElementsByTagNames",
    solution: "Element#querySelectorAll",
    version: 6,
    comment: null
  },
  {
    name: "mxui.dom.getAncestorNodeWithAttribute",
    reg: "getAncestorNodeWithAttribute",
    solution: "Element#querySelectorAll",
    version: 6,
    comment: null
  },
  {
    name: "mxui.dom.setHTML",
    reg: "setHTML",
    solution: "mxui.dom.html",
    version: 6,
    comment: null
  },
  {
    name: "mxui.dom.getSelectOptions",
    reg: ".getSelectOptions",
    solution: "mxui.dom.getSelectedValue",
    version: 6,
    comment: null
  },
  {
    name: "mxui.dom.selectOption",
    reg: ".selectOption",
    solution: "Element#value",
    version: 6,
    comment: null
  },
  {
    name: "mxui.dom.hasClass",
    reg: "dom.hasClass",
    solution: "dojo/dom-class.contains",
    version: 6,
    comment: null
  },
  {
    name: "mxui.dom.getClass",
    reg: "dom.getClass",
    solution: "Element#className",
    version: 6,
    comment: null
  },
  {
    name: "mxui.dom.setClass",
    reg: "dom.setClass",
    solution: "Element#className",
    version: 6,
    comment: null
  },
  {
    name: "mxui.dom.addClass",
    reg: "dom.addClass",
    solution: "dojo/dom-class.add",
    version: 6,
    comment: null
  },
  {
    name: "mxui.dom.addClasses",
    reg: "dom.addClasses",
    solution: "dojo/dom-class.add",
    version: 6,
    comment: null
  },
  {
    name: "mxui.dom.removeClass",
    reg: "dom.removeClass",
    solution: "dojo/dom-class.remove",
    version: 6,
    comment: null
  },
  {
    name: "mxui.dom.height",
    reg: "dom.height",
    solution: "dojo/dom-style.set",
    version: 6,
    comment: null
  },
  {
    name: "mxui.dom.show",
    reg: "dom.show",
    solution: "dojo/dom-style.set",
    version: 6,
    comment: null
  },
  {
    name: "mxui.dom.setReadOnly",
    reg: "dom.setReadOnly",
    solution: "Element#setAttribute",
    version: 6,
    comment: null
  },
  {
    name: "mxui.dom.unsetReadOnly",
    reg: "dom.unsetReadOnly",
    solution: "Element#removeAttribute",
    version: 6,
    comment: null
  },
  {
    name: "mxui.dom.applyDisableStyle",
    reg: "dom.applyDisableStyle",
    solution: "Element#setAttribute",
    version: 6,
    comment: null
  },
  {
    name: "mxui.dom.applyEnableStyle",
    reg: "dom.applyEnableStyle",
    solution: "Element#removeAttribute",
    version: 6,
    comment: null
  },
  {
    name: "mxui.dom.setOpacity",
    reg: "dom.setOpacity",
    solution: "Element#style",
    version: 6,
    comment: null
  },
  {
    name: "mxui.dom.insertCss",
    reg: "dom.insertCss",
    solution: "mxui/dom.addCss",
    version: 6,
    comment: null
  },
  {
    name: "mxui.dom.escapeHTML",
    reg: "escapeHTML",
    solution: "mxui/dom.escapeString",
    version: 6,
    comment: null
  },
  {
    name: "mxui.dom.getFormElementText",
    reg: ".getFormElementText",
    solution: "dojo/dom-attr.get",
    version: 6,
    comment: null
  },
  {
    name: "mxui.dom.getStringSize",
    reg: ".getStringSize",
    solution: "dojo/dom-geometry.getContentSize",
    version: 6,
    comment: null
  },
  {
    name: "mxui.dom.clone",
    reg: "dom.clone",
    solution: "dojo/_base/lang.clone",
    version: 6,
    comment: null
  },
  {
    name: "mxui.dom.getFirstElement",
    reg: ".getFirstElement",
    solution: "Element#children",
    version: 6,
    comment: null
  },
  {
    name: "mx.ui.confirm",
    reg: "mx.ui.confirm\\(",
    solution: "mx.ui.confirmation",
    version: 6,
    comment: null
  },
  {
    name: "mx.ui.executeAction",
    reg: ".executeAction",
    solution: "mx.ui.action",
    version: 6,
    comment: null
  },
  {
    name: "mx.ui.showDialogMessage",
    reg: ".showDialogMessage",
    solution: "mx.ui.{info,warn,error}",
    version: 6,
    comment: null
  },
  {
    name: "mx.ui.newContext",
    reg: ".newContext",
    solution: "new mendix/lib/MxContext",
    version: 6,
    comment: null
  },
  {
    name: "mx.ui.getProgressIndicator",
    reg: ".getProgressIndicator",
    solution: "mx.ui.getProgress",
    version: 6,
    comment: null
  },
  {
    name: "mx.ui.getLocale",
    reg: ".getLocale",
    solution: "dojo/_base/kernel.locale",
    version: 6,
    comment: null
  },
  {
    name: "mx.screen.setContent",
    reg: "mx.screen.setContent",
    solution: "mx.ui.openForm",
    version: 6,
    comment: null
  },
  {
    name: "mx.screen.showProgress",
    reg: "mx.screen.showProgress",
    solution: "mx.ui.showProgress",
    version: 6,
    comment: null
  },
  {
    name: "mx.screen.hideProgress",
    reg: "mx.screen.hideProgress",
    solution: "mx.ui.hideProgress",
    version: 6,
    comment: null
  },
  {
    name: "mx.screen.subscribe",
    reg: "mx.screen.subscribe",
    solution: "mx.form.listen",
    version: 6,
    comment: null
  },
  {
    name: "mx.screen.unsubscribe",
    reg: "mx.screen.unsubscribe",
    solution: "mx.form.unlisten",
    version: 6,
    comment: null
  },
  {
    name: "mx.screen.sendMessage",
    reg: "mx.screen.sendMessage",
    solution: "Form#{save,commit,rollback}",
    version: 6,
    comment: null
  },
  {
    name: "mx.screen.getUIPlace",
    reg: "mx.screen.getUIPlace",
    solution: "Form#place",
    version: 6,
    comment: null
  },
  {
    name: "mx.screen.getTitle",
    reg: "mx.screen.getTitle",
    solution: "Form#getTitle",
    version: 6,
    comment: null
  },
  {
    name: "mx.screen.resumeContent",
    reg: "mx.screen.resumeContent",
    solution: "noop",
    version: 6,
    comment: null
  },
  {
    name: "mx.screen.suspendContent",
    reg: "mx.screen.suspendContent",
    solution: "noop",
    version: 6,
    comment: null
  },
  {
    name: "mx.screen.disposeContent",
    reg: "mx.screen.disposeContent",
    solution: "Form#close",
    version: 6,
    comment: null
  },
  {
    name: "mx.screen.resizeContent",
    reg: "mx.screen.resizeContent",
    solution: "Form#resize",
    version: 6,
    comment: null
  },
  {
    name: "mx.screen.reloadContent",
    reg: "mx.screen.reloadContent",
    solution: "mx.ui.reload",
    version: 6,
    comment: null
  },
  {
    name: "mx.screen.refresh",
    reg: "mx.screen.refresh",
    solution: "mx.ui.reload",
    version: 6,
    comment: null
  },
  {
    name: "mx.screen.showLogin",
    reg: "mx.screen.showLogin",
    solution: "mx.ui.showLogin",
    version: 6,
    comment: null
  },
  {
    name: "mx.screen.hideLogin",
    reg: "mx.screen.hideLogin",
    solution: "mx.ui.hideLogin",
    version: 6,
    comment: null
  },
  {
    name: "mx.screen.logout",
    reg: "mx.screen.logout",
    solution: "mx.logout",
    version: 6,
    comment: null
  },
  {
    name: "mx.screen.layout",
    reg: "mx.screen.layout",
    solution: "mx.ui.resize",
    version: 6,
    comment: null
  },
  {
    name: "mx.screen.applyToNode",
    reg: "mx.screen.applyToNode",
    solution: "mx.ui.applyToNode",
    version: 6,
    comment: null
  },
  {
    name: "mxui.lib.putContent",
    reg: "mxui.lib.putContent",
    solution: "mx.ui.openForm",
    version: 6,
    comment: null
  },
  // {
  //   name: "mx.data.action",
  //   reg: "mx.data.action",
  //   solution: "Arguments changed"
  //   version: 6,
  //   comment: null
  // },
  // {
  //   name: "mx.data.sizeOfXPathSet",
  //   reg: "mx.data.sizeOfXPathSet",
  //   solution: "Arguments changed",
  //   version: 6,
  //   comment: null
  // },
  {
    name: "mx.metadata",
    reg: "mx.metadata",
    solution: "mx.meta",
    version: 6,
    comment: null
  },
  {
    name: "mx.processor",
    reg: "mx.processor",
    solution: "mx.data",
    version: 6,
    comment: null
  },
  {
    name: "mendix.lang.runBindActions",
    reg: "mendix.lang.runBindActions",
    solution: "mendix.lang.sequence",
    version: 6,
    comment: null
  },
  {
    name: "mendix.lang.runAsyncActions",
    reg: "mendix.lang.runAsyncActions",
    solution: "mendix/lang.collect",
    version: 6,
    comment: null
  },
  {
    name: "mendix.lang.runActions",
    reg: "mendix.lang.runActions",
    solution: "mendix/lang.sequence",
    version: 6,
    comment: null
  },
  {
    name: "mendix.lang.clone",
    reg: "mendix.lang.clone",
    solution: "dojo.clone",
    version: 6,
    comment: null
  },
  {
    name: "mendix.lang.dupObject",
    reg: "mendix.lang.dupObject",
    solution: "dojo.clone",
    version: 6,
    comment: null
  },
  {
    name: "mendix.lang.round",
    reg: "mendix.lang.round",
    solution: "dojo.number.round",
    version: 6,
    comment: null
  },
  {
    name: "mendix.lang.toFixed",
    reg: "mendix.lang.toFixed",
    solution: "dojo.number.round",
    version: 6,
    comment: null
  },
  {
    name: "mendix.lang.sequence(scope, chain, callback)",
    reg: "mendix.lang.sequence(scope, chain, callback)",
    solution: "mendix/lang.sequence(chain, callback, scope)",
    version: 6,
    comment: null
  },
  {
    name: "mendix/lang.collect(scope, chain, callback)",
    reg: "mendix/lang.collect(scope, chain, callback)",
    solution: "mendix/lang.collect(chain, callback, scope)",
    version: 6,
    comment: null
  },
  {
    name: "mx.moduleUrl",
    reg: "mx.moduleUrl",
    solution: "dojo.require.toUrl",
    version: 6,
    comment: null
  },
  {
    name: "mx.meta.getMetaMap",
    reg: "mx.meta.getMetaMap",
    solution: "mx.meta.getMap",
    version: 6,
    comment: null
  },
  {
    name: "mx.meta.getMetaEntity",
    reg: "mx.meta.getMetaEntity",
    solution: "mx.meta.getEntity",
    version: 6,
    comment: null
  },
  {
    name: "mx.server.getResource",
    reg: "mx.server.getResource",
    solution: "mx.server.get",
    version: 6,
    comment: null
  },
  {
    name: "mx.xas.action",
    reg: "mx.xas.action",
    solution: "mx.data.action",
    version: 6,
    comment: null
  },
  // mx.data
  {
    name: "mx.data.distributeChange",
    reg: "mx.data.distributeChange",
    solution: "mx.data.update",
    version: 6,
    comment: null
  },
  {
    name: "mx.data.addChangeListener",
    reg: "mx.data.addChangeListener",
    solution: "mx.data.subscribe",
    version: 6,
    comment: null
  },
  {
    name: "mx.data.removeChangeListener",
    reg: "mx.data.removeChangeListener",
    solution: "mx.data.unsubscribe",
    version: 6,
    comment: null
  },
  {
    name: "mx.data.subscribeToClass",
    reg: "mx.data.subscribeToClass",
    solution: "mx.data.subscribe",
    version: 6,
    comment: null
  },
  {
    name: "mx.data.unSubscribeFromClass",
    reg: "mx.data.unSubscribeFromClass",
    solution: "mx.data.unsubscribe",
    version: 6,
    comment: null
  },
  {
    name: "mx.data.subscribeToGUID",
    reg: "mx.data.subscribeToGUID",
    solution: "mx.data.subscribe",
    version: 6,
    comment: null
  },
  {
    name: "mx.data.unSubscribeFromGUID",
    reg: "mx.data.unSubscribeFromGUID",
    solution: "mx.data.unsubscribe",
    version: 6,
    comment: null
  },
  {
    name: "mx.data.xasAction",
    reg: "mx.data.xasAction",
    solution: "mx.data.action",
    version: 6,
    comment: null
  },
  {
    name: "mx.data.getObjectsByXPath",
    reg: "mx.data.getObjectsByXPath",
    solution: "mx.data.get",
    version: 6,
    comment: null
  },
  {
    name: "mx.data.getAttributeListByXPath",
    reg: "mx.data.getAttributeListByXPath",
    solution: "mx.data.get",
    version: 6,
    comment: null
  },
  {
    name: "mx.data.getObjectsByXPathSchema",
    reg: "mx.data.getObjectsByXPathSchema",
    solution: "mx.data.get",
    version: 6,
    comment: null
  },
  {
    name: "mx.data.getObjectsByMicroflow",
    reg: "mx.data.getObjectsByMicroflow",
    solution: "mx.data.get",
    version: 6,
    comment: null
  },
  {
    name: "mx.data.getObjectsById",
    reg: "mx.data.getObjectsById",
    solution: "mx.data.get",
    version: 6,
    comment: null
  },
  {
    name: "mx.data.getObjectByXPath",
    reg: "mx.data.getObjectByXPath",
    solution: "mx.data.get",
    version: 6,
    comment: null
  },
  {
    name: "mx.data.getObject",
    reg: "mx.data.getObject",
    solution: "mx.data.get",
    version: 6,
    comment: null
  },
  {
    name: "mx.data.createObjectByClass",
    reg: "mx.data.createObjectByClass",
    solution: "mx.data.create",
    version: 6,
    comment: null
  },
  {
    name: "mx.data.createObject",
    reg: "mx.data.createObject",
    solution: "mx.data.create",
    version: 6,
    comment: null
  },
  {
    name: "mx.data.deleteObjectsByGuid",
    reg: "mx.data.deleteObjectsByGuid",
    solution: "mx.data.remove",
    version: 6,
    comment: null
  },
  {
    name: "mx.data.saveObject",
    reg: "mx.data.saveObject",
    solution: "mx.data.save",
    version: 6,
    comment: null
  },
  {
    name: "mx.data.commitObject",
    reg: "mx.data.commitObject",
    solution: "mx.data.commit",
    version: 6,
    comment: null
  },
  {
    name: "mx.data.rollbackObject",
    reg: "mx.data.rollbackObject",
    solution: "mx.data.rollback",
    version: 6,
    comment: null
  },
  {
    name: "mx.data.deleteObject",
    reg: "mx.data.deleteObject",
    solution: "mx.data.remove",
    version: 6,
    comment: null
  },
  {
    name: "mx.data.deleteMxObjects",
    reg: "mx.data.deleteMxObjects",
    solution: "mx.data.remove",
    version: 6,
    comment: null
  },
  {
    name: "mx.data.sumOfXPathQuery",
    reg: "mx.data.sumOfXPathQuery",
    solution: "mx.data.sumOfXPathSet",
    version: 6,
    comment: null
  },
  {
    name: "mx.data.sizeOfXPathQuery",
    reg: "mx.data.sizeOfXPathQuery",
    solution: "mx.data.sizeOfXPathSet",
    version: 6,
    comment: null
  },
  {
    name: "mx.data.countOfXPathQuery",
    reg: "mx.data.countOfXPathQuery",
    solution: "mx.data.sizeOfXPathSet",
    version: 6,
    comment: null
  },
  {
    name: "mx.data.avgOfXPathQuery",
    reg: "mx.data.avgOfXPathQuery",
    solution: "mx.data.avgOfXPathSet",
    version: 6,
    comment: null
  },
  {
    name: "mx.data.maxOfXPathQuery",
    reg: "mx.data.maxOfXPathQuery",
    solution: "mx.data.maxOfXPathSet",
    version: 6,
    comment: null
  },
  {
    name: "mx.data.minOfXPathQuery",
    reg: "mx.data.minOfXPathQuery",
    solution: "mx.data.minOfXPathSet",
    version: 6,
    comment: null
  },
  {
    name: "mx.data.ceilingOfXPathQuery",
    reg: "mx.data.ceilingOfXPathQuery",
    solution: "mx.data.ceilingOfXPathSet",
    version: 6,
    comment: null
  },
  {
    name: "mx.data.floorOfXPathQuery",
    reg: "mx.data.floorOfXPathQuery",
    solution: "mx.data.floorOfXPathSet",
    version: 6,
    comment: null
  },
  // MxContext
  {
    name: "mendix.lib.MxContext#hasActiveClass",
    reg: ".hasActiveClass",
    solution: "mendix/lib/hasTrackEntity",
    version: 6,
    comment: null
  },
  {
    name: "mendix.lib.MxContext#hasActiveGUID",
    reg: ".hasActiveGUID",
    solution: "mendix/lib/MxContext#hasTrackId",
    version: 6,
    comment: null
  },
  {
    name: "mendix.lib.MxContext#hasTrackID",
    reg: ".hasTrackID",
    solution: "mendix/lib/MxContext#hasTrackId",
    version: 6,
    comment: null
  },
  {
    name: "mendix.lib.MxContext#getActiveClass",
    reg: ".getActiveClass",
    solution: "mendix/lib/MxContext#getTrackEntity",
    version: 6,
    comment: null
  },
  {
    name: "mendix.lib.MxContext#getActiveGUID",
    reg: ".getActiveGUID",
    solution: "mendix/lib/MxContext#getTrackId",
    version: 6,
    comment: null
  },
  {
    name: "mendix.lib.MxContext#getTrackID",
    reg: ".getTrackID",
    solution: "mendix/lib/MxContext#getTrackId",
    version: 6,
    comment: null
  },
  {
    name: "mendix.lib.MxContext#setActiveClass",
    reg: ".setActiveClass",
    solution: "mendix/lib/MxContext#setTrackEntity",
    version: 6,
    comment: null
  },
  {
    name: "mendix.lib.MxContext#setActive",
    reg: ".setActive",
    solution: "mendix/lib/MxContext#setTrackEntity",
    version: 6,
    comment: null
  },
  {
    name: "mendix.lib.MxContext#setTrackID",
    reg: ".setTrackID",
    solution: "mendix/lib/MxContext#setTrackId",
    version: 6,
    comment: null
  },
  {
    name: "mendix.lib.MxContext#setContextFromMxObject",
    reg: ".setContextFromMxObject",
    solution: "mendix/lib/MxContext#setContext",
    version: 6,
    comment: null
  },
  // MxObject && MxMetaObject
  {
    name: "mendix.lib.MxObject#getGUID OR mendix.lib.MxMetaObject#getGUID",
    reg: ".getGUID",
    solution: "mendix/lib/MxObject#getGuid OR mendix/lib/MxMetaObject#getGuid",
    version: 6,
    comment: null
  },
  {
    name: "mendix.lib.MxObject#getClass OR mendix.lib.MxMetaObject#getClass",
    reg: ".getClass",
    solution: "mendix/lib/MxObject#getEntity OR mendix.lib.MxMetaObject#getEntity",
    version: 6,
    comment: null
  },
  {
    name: "mendix.lib.MxObject#getAttributeClass OR mendix.lib.MxMetaObject#getAttributeClass",
    reg: ".getAttributeClass",
    solution: "mendix/lib/MxObject#getAttributeType OR mendix/lib/MxMetaObject#getAttributeType",
    version: 6,
    comment: null
  },
  {
    name: "mendix.lib.MxObject#inheritsOf OR mendix.lib.MxMetaObject#inheritsOf",
    reg: ".inheritsOf",
    solution: "mendix/lib/MxObject#inheritsFrom OR mendix/lib/MxMetaObject#inheritsFrom",
    version: 6,
    comment: null
  },
  {
    name: "mendix.lib.MxObject#hasSubClasses OR mendix.lib.MxMetaObject#hasSubClasses",
    reg: ".hasSubClasses",
    solution: "mendix/lib/MxObject#hasSubEntities OR mendix/lib/MxMetaObject#hasSubEntities",
    version: 6,
    comment: null
  },
  {
    name: "mendix.lib.MxObject#getSubClasses OR mendix.lib.MxMetaObject#getSubClasses",
    reg: ".getSubClasses",
    solution: "mendix/lib/MxObject#getSubEntities OR mendix/lib/MxMetaObject#getSubEntities",
    version: 6,
    comment: null
  },
  {
    name: "mendix.lib.MxObject#hasSuperClasses OR mendix.lib.MxMetaObject#hasSuperClasses",
    reg: ".hasSuperClasses",
    solution: "mendix/lib/MxObject#hasSuperEntities OR mendix/lib/MxMetaObject#hasSuperEntities",
    version: 6,
    comment: null
  },
  {
    name: "mendix.lib.MxObject#getSuperClasses OR mendix.lib.MxMetaObject#getSuperClasses",
    reg: ".getSuperClasses",
    solution: "mendix/lib/MxObject#getSuperEntities OR mendix/lib/MxMetaObject#getSuperEntities",
    version: 6,
    comment: null
  },
  {
    name: "mendix.lib.MxObject#getSelectorClass OR mendix.lib.MxMetaObject#getSelectorClass",
    reg: ".getSelectorClass",
    solution: "mendix/lib/MxObject#getSelectorEntity OR mendix/lib/MxMetaObject#getSelectorEntity",
    version: 6,
    comment: null
  },
  //MxObject
  {
    name: "mendix.lib.MxObject#getAttribute",
    reg: /\.getAttribute\(/,
    solution: "mendix/lib/MxObject#get",
    version: 6,
    comment: "getAttribute is also used in HTML elements, this might be a false-positive."
  },
  {
    name: "mendix.lib.MxObject#setAttribute",
    reg: /\.setAttribute\(/,
    solution: "mendix/lib/MxObject#set",
    version: 6,
    comment: "setAttribute is also used in HTML elements, this might be a false-positive."
  },
  {
    name: "mendix.lib.MxObject#hasAttribute OR mendix.lib.MxMetaObject#hasAttribute",
    reg: /\.hasAttribute\(/,
    solution: "mendix/lib/MxObject#has OR mendix/lib/MxMetaObject#has",
    version: 6,
    comment: null
  },
  {
    name: "mendix.lib.MxObject#save",
    reg: /(!mx\.data)\.save/,
    solution: "mx.data.save",
    version: 6,
    comment: null
  },
  {
    name: "mendix.lib.MxObject#commit",
    reg: /(!mx\.data)\.commit/,
    solution: "mx.data.commit",
    version: 6,
    comment: null
  },
  {
    name: "mendix.lib.MxObject#rollback",
    reg: /(!mx\.data)\.rollback/,
    solution: "mx.data.rollback",
    version: 6,
    comment: null
  },
  {
    name: "mendix.lib.MxObject#saveSequence",
    reg: ".saveSequence",
    solution: "mx.data.save + mx.data.commit",
    version: 6,
    comment: null
  },
];
