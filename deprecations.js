var deprecations = {
	'mx6' : [
		{
			name: "mendix.dom",
			reg: "mendix.dom",
			solution: "mxui/dom"
		},
		{
			name: "mendix.html",
			reg: "mendix.html",
			solution: "mxui/html"
		},
		{
			name: "mendix.wm.focus",
			reg: "mendix.wm.focus",
			solution: "mxui/wm/focus"
		},
		{
			name: "mxui.addon",
			reg: "mxui.addon",
			solution: "mxui/mixin"
		},
		{
			name: "mendix.widget",
			reg: "mendix.widget",
			solution: "mxui/widget"
		},
		{
			name: "mobile.dom",
			reg: "mobile.dom",
			solution: "mxui/dom"
		},

		{
			name: "mendix.dom.liveconnect",
			reg: "mendix.dom.liveconnect",
			solution: "mxui/dom.liveConnect"
		},
		{
			name: "mobile.widget._Widget",
			reg: "mobile.widget._Widget",
			solution: "mxui/widget/_WidgetBase"
		},
		{
			name: "mxui.html.setContent",
			reg: ".setContent",
			solution: "mxui/dom.text"
		},
		{
			name: "mxui.html.sanatizeHTMLString",
			reg: ".sanatizeHTMLString",
			solution: "mxui/dom.unescapeString"
		},
		{
			name: "mxui.dom.removeElement",
			reg: ".removeElement",
			solution: "mxui.dom.orphan"
		},
		{
			name: "mxui.dom.setTextContent",
			reg: ".setTextContent",
			solution: "mxui.dom.text"
		},
		{
			name: "mxui.dom.getTextContent",
			reg: ".getTextContent",
			solution: "mxui.dom.text"
		},
		{
			name: "mxui.dom.textContent",
			reg: ".textContent",
			solution: "mxui.dom.text"
		},
		{
			name: "mxui.dom.removeChildNodes",
			reg: "removeChildNodes",
			solution: "dojo.empty"
		},
		{
			name: "mxui.dom.clearSelectOptions",
			reg: "clearSelectOptions",
			solution: "dojo.empty"
		},
		{
			name: "mxui.dom.getAncestorClass",
			reg: "getAncestorClass",
			solution: "Element#querySelectorAll"
		},
		{
			name: "mxui.dom.getElementsByTagNames",
			reg: "getElementsByTagNames",
			solution: "Element#querySelectorAll"
		},
		{
			name: "mxui.dom.getAncestorNodeWithAttribute",
			reg: "getAncestorNodeWithAttribute",
			solution: "Element#querySelectorAll"
		},
		{
			name: "mxui.dom.setHTML",
			reg: "setHTML",
			solution: "mxui.dom.html"
		},
		{
			name: "mxui.dom.getSelectOptions",
			reg: ".getSelectOptions",
			solution: "mxui.dom.getSelectedValue"
		},
		{
			name: "mxui.dom.selectOption",
			reg: ".selectOption",
			solution: "Element#value"
		},
		{
			name: "mxui.dom.hasClass",
			reg: "dom.hasClass",
			solution: "dojo/dom-class.contains"
		},
		{
			name: "mxui.dom.getClass",
			reg: "dom.getClass",
			solution: "Element#className"
		},
		{
			name: "mxui.dom.setClass",
			reg: "dom.setClass",
			solution: "Element#className"
		},
		{
			name: "mxui.dom.addClass",
			reg: "dom.addClass",
			solution: "dojo/dom-class.add"
		},
		{
			name: "mxui.dom.addClasses",
			reg: "dom.addClasses",
			solution: "dojo/dom-class.add"
		},
		{
			name: "mxui.dom.removeClass",
			reg: "dom.removeClass",
			solution: "dojo/dom-class.remove"
		},
		{
			name: "mxui.dom.height",
			reg: "dom.height",
			solution: "dojo/dom-style.set"
		},
		{
			name: "mxui.dom.show",
			reg: "dom.show",
			solution: "dojo/dom-style.set"
		},
		{
			name: "mxui.dom.setReadOnly",
			reg: "dom.setReadOnly",
			solution: "Element#setAttribute"
		},
		{
			name: "mxui.dom.unsetReadOnly",
			reg: "dom.unsetReadOnly",
			solution: "Element#removeAttribute"
		},
		{
			name: "mxui.dom.applyDisableStyle",
			reg: "dom.applyDisableStyle",
			solution: "Element#setAttribute"
		},
		{
			name: "mxui.dom.applyEnableStyle",
			reg: "dom.applyEnableStyle",
			solution: "Element#removeAttribute"
		},
		{
			name: "mxui.dom.setOpacity",
			reg: "dom.setOpacity",
			solution: "Element#style"
		},
		{
			name: "mxui.dom.insertCss",
			reg: "dom.insertCss",
			solution: "mxui/dom.addCss"
		},
		{
			name: "mxui.dom.escapeHTML",
			reg: "escapeHTML",
			solution: "mxui/dom.escapeString"
		},
		{
			name: "mxui.dom.getFormElementText",
			reg: ".getFormElementText",
			solution: "dojo/dom-attr.get"
		},
		{
			name: "mxui.dom.getStringSize",
			reg: ".getStringSize",
			solution: "dojo/dom-geometry.getContentSize"
		},
		{
			name: "mxui.dom.clone",
			reg: "dom.clone",
			solution: "dojo/_base/lang.clone"
		},
		{
			name: "mxui.dom.getFirstElement",
			reg: ".getFirstElement",
			solution: "Element#children"
		},
		{
			name: "mx.ui.confirm",
			reg: "mx.ui.confirm",
			solution: "mx.ui.confirmation"
		},
		{
			name: "mx.ui.executeAction",
			reg: ".executeAction",
			solution: "mx.ui.action"
		},
		{
			name: "mx.ui.showDialogMessage",
			reg: ".showDialogMessage",
			solution: "mx.ui.{info,warn,error}"
		},
		{
			name: "mx.ui.newContext",
			reg: ".newContext",
			solution: "new mendix/lib/MxContext"
		},
		{
			name: "mx.ui.getProgressIndicator",
			reg: ".getProgressIndicator",
			solution: "mx.ui.getProgress"
		},
		{
			name: "mx.ui.getLocale",
			reg: ".getLocale",
			solution: "dojo/_base/kernel.locale"
		},
		{
			name: "mx.screen.setContent",
			reg: "mx.screen.setContent",
			solution: "mx.ui.openForm"
		},
		{
			name: "mx.screen.showProgress",
			reg: "mx.screen.showProgress",
			solution: "mx.ui.showProgress"
		},
		{
			name: "mx.screen.hideProgress",
			reg: "mx.screen.hideProgress",
			solution: "mx.ui.hideProgress"
		},
		{
			name: "mx.screen.subscribe",
			reg: "mx.screen.subscribe",
			solution: "mx.form.listen"
		},
		{
			name: "mx.screen.unsubscribe",
			reg: "mx.screen.unsubscribe",
			solution: "mx.form.unlisten"
		},
		{
			name: "mx.screen.sendMessage",
			reg: "mx.screen.sendMessage",
			solution: "Form#{save,commit,rollback}"
		},
		{
			name: "mx.screen.getUIPlace",
			reg: "mx.screen.getUIPlace",
			solution: "Form#place"
		},
		{
			name: "mx.screen.getTitle",
			reg: "mx.screen.getTitle",
			solution: "Form#getTitle"
		},
		{
			name: "mx.screen.resumeContent",
			reg: "mx.screen.resumeContent",
			solution: "noop"
		},
		{
			name: "mx.screen.suspendContent",
			reg: "mx.screen.suspendContent",
			solution: "noop"
		},
		{
			name: "mx.screen.disposeContent",
			reg: "mx.screen.disposeContent",
			solution: "Form#close"
		},
		{
			name: "mx.screen.resizeContent",
			reg: "mx.screen.resizeContent",
			solution: "Form#resize"
		},
		{
			name: "mx.screen.reloadContent",
			reg: "mx.screen.reloadContent",
			solution: "mx.ui.reload"
		},
		{
			name: "mx.screen.refresh",
			reg: "mx.screen.refresh",
			solution: "mx.ui.reload"
		},
		{
			name: "mx.screen.showLogin",
			reg: "mx.screen.showLogin",
			solution: "mx.ui.showLogin"
		},
		{
			name: "mx.screen.hideLogin",
			reg: "mx.screen.hideLogin",
			solution: "mx.ui.hideLogin"
		},
		{
			name: "mx.screen.logout",
			reg: "mx.screen.logout",
			solution: "mx.logout"
		},
		{
			name: "mx.screen.layout",
			reg: "mx.screen.layout",
			solution: "mx.ui.resize"
		},
		{
			name: "mx.screen.applyToNode",
			reg: "mx.screen.applyToNode",
			solution: "mx.ui.applyToNode"
		},
		{
			name: "mxui.lib.putContent",
			reg: "mxui.lib.putContent",
			solution: "mx.ui.openForm"
		},

		// {
		// 	name: "mx.data.action",
		// 	reg: "mx.data.action",
		// 	solution: "Arguments changed"
		// },
		// {
		// 	name: "mx.data.sizeOfXPathSet",
		// 	reg: "mx.data.sizeOfXPathSet",
		// 	solution: "Arguments changed"
		// },

		{
			name: "mx.metadata",
			reg: "mx.metadata",
			solution: "mx.meta"
		},
		{
			name: "mx.processor",
			reg: "mx.processor",
			solution: "mx.data"
		},

		{
			name: "mendix.lang.runBindActions",
			reg: "mendix.lang.runBindActions",
			solution: "mendix.lang.sequence"
		},
		{
			name: "mendix.lang.runAsyncActions",
			reg: "mendix.lang.runAsyncActions",
			solution: "mendix/lang.collect"
		},
		{
			name: "mendix.lang.runActions",
			reg: "mendix.lang.runActions",
			solution: "mendix/lang.sequence"
		},
		{
			name: "mendix.lang.clone",
			reg: "mendix.lang.clone",
			solution: "dojo.clone"
		},
		{
			name: "mendix.lang.dupObject",
			reg: "mendix.lang.dupObject",
			solution: "dojo.clone"
		},
		{
			name: "mendix.lang.round",
			reg: "mendix.lang.round",
			solution: "dojo.number.round"
		},
		{
			name: "mendix.lang.toFixed",
			reg: "mendix.lang.toFixed",
			solution: "dojo.number.round"
		},
		{
			name: "mendix.lang.sequence(scope, chain, callback)",
			reg: "mendix.lang.sequence(scope, chain, callback)",
			solution: "mendix/lang.sequence(chain, callback, scope)"
		},
		{
			name: "mendix/lang.collect(scope, chain, callback)",
			reg: "mendix/lang.collect(scope, chain, callback)",
			solution: "mendix/lang.collect(chain, callback, scope)"
		},
		{
			name: "mx.moduleUrl",
			reg: "mx.moduleUrl",
			solution: "dojo.require.toUrl"
		},
		{
			name: "mx.meta.getMetaMap",
			reg: "mx.meta.getMetaMap",
			solution: "mx.meta.getMap"
		},
		{
			name: "mx.meta.getMetaEntity",
			reg: "mx.meta.getMetaEntity",
			solution: "mx.meta.getEntity"
		},
		{
			name: "mx.server.getResource",
			reg: "mx.server.getResource",
			solution: "mx.server.get"
		},
		{
			name: "mx.xas.action",
			reg: "mx.xas.action",
			solution: "mx.data.action"
		},
		{
			name: "mx.data.distributeChange",
			reg: "mx.data.distributeChange",
			solution: "mx.data.update"
		},
		{
			name: "mx.data.addChangeListener",
			reg: "mx.data.addChangeListener",
			solution: "mx.data.subscribe"
		},
		{
			name: "mx.data.removeChangeListener",
			reg: "mx.data.removeChangeListener",
			solution: "mx.data.unsubscribe"
		},
		{
			name: "mx.data.subscribeToClass",
			reg: "mx.data.subscribeToClass",
			solution: "mx.data.subscribe"
		},
		{
			name: "mx.data.unSubscribeFromClass",
			reg: "mx.data.unSubscribeFromClass",
			solution: "mx.data.unsubscribe"
		},
		{
			name: "mx.data.subscribeToGUID",
			reg: "mx.data.subscribeToGUID",
			solution: "mx.data.subscribe"
		},
		{
			name: "mx.data.unSubscribeFromGUID",
			reg: "mx.data.unSubscribeFromGUID",
			solution: "mx.data.unsubscribe"
		},
		{
			name: "mx.data.xasAction",
			reg: "mx.data.xasAction",
			solution: "mx.data.action"
		},
		{
			name: "mx.data.getObjectsByXPath",
			reg: "mx.data.getObjectsByXPath",
			solution: "mx.data.get"
		},
		{
			name: "mx.data.getAttributeListByXPath",
			reg: "mx.data.getAttributeListByXPath",
			solution: "mx.data.get"
		},
		{
			name: "mx.data.getObjectsByXPathSchema",
			reg: "mx.data.getObjectsByXPathSchema",
			solution: "mx.data.get"
		},
		{
			name: "mx.data.getObjectsByMicroflow",
			reg: "mx.data.getObjectsByMicroflow",
			solution: "mx.data.get"
		},
		{
			name: "mx.data.getObjectsById",
			reg: "mx.data.getObjectsById",
			solution: "mx.data.get"
		},
		{
			name: "mx.data.getObjectByXPath",
			reg: "mx.data.getObjectByXPath",
			solution: "mx.data.get"
		},
		{
			name: "mx.data.getObject",
			reg: "mx.data.getObject",
			solution: "mx.data.get"
		},
		{
			name: "mx.data.createObjectByClass",
			reg: "mx.data.createObjectByClass",
			solution: "mx.data.create"
		},
		{
			name: "mx.data.createObject",
			reg: "mx.data.createObject",
			solution: "mx.data.create"
		},
		{
			name: "mx.data.deleteObjectsByGuid",
			reg: "mx.data.deleteObjectsByGuid",
			solution: "mx.data.remove"
		},
		{
			name: "mx.data.saveObject",
			reg: "mx.data.saveObject",
			solution: "mx.data.save"
		},
		{
			name: "mx.data.commitObject",
			reg: "mx.data.commitObject",
			solution: "mx.data.commit"
		},
		{
			name: "mx.data.rollbackObject",
			reg: "mx.data.rollbackObject",
			solution: "mx.data.rollback"
		},
		{
			name: "mx.data.deleteObject",
			reg: "mx.data.deleteObject",
			solution: "mx.data.remove"
		},
		{
			name: "mx.data.deleteMxObjects",
			reg: "mx.data.deleteMxObjects",
			solution: "mx.data.remove"
		},
		{
			name: "mx.data.sumOfXPathQuery",
			reg: "mx.data.sumOfXPathQuery",
			solution: "mx.data.sumOfXPathSet"
		},
		{
			name: "mx.data.sizeOfXPathQuery",
			reg: "mx.data.sizeOfXPathQuery",
			solution: "mx.data.sizeOfXPathSet"
		},
		{
			name: "mx.data.countOfXPathQuery",
			reg: "mx.data.countOfXPathQuery",
			solution: "mx.data.sizeOfXPathSet"
		},
		{
			name: "mx.data.avgOfXPathQuery",
			reg: "mx.data.avgOfXPathQuery",
			solution: "mx.data.avgOfXPathSet"
		},
		{
			name: "mx.data.maxOfXPathQuery",
			reg: "mx.data.maxOfXPathQuery",
			solution: "mx.data.maxOfXPathSet"
		},
		{
			name: "mx.data.minOfXPathQuery",
			reg: "mx.data.minOfXPathQuery",
			solution: "mx.data.minOfXPathSet"
		},
		{
			name: "mx.data.ceilingOfXPathQuery",
			reg: "mx.data.ceilingOfXPathQuery",
			solution: "mx.data.ceilingOfXPathSet"
		},
		{
			name: "mx.data.floorOfXPathQuery",
			reg: "mx.data.floorOfXPathQuery",
			solution: "mx.data.floorOfXPathSet"
		},
		{
			name: "mendix.lib.MxContext#hasActiveClass",
			reg: ".hasActiveClass",
			solution: "mendix/lib/hasTrackEntity"
		},
		{
			name: "mendix.lib.MxContext#hasActiveGUID",
			reg: ".hasActiveGUID",
			solution: "mendix/lib/MxContext#hasTrackId"
		},
		{
			name: "mendix.lib.MxContext#hasTrackID",
			reg: ".hasTrackID",
			solution: "mendix/lib/MxContext#hasTrackId"
		},
		{
			name: "mendix.lib.MxContext#getActiveClass",
			reg: ".getActiveClass",
			solution: "mendix/lib/MxContext#getTrackEntity"
		},
		{
			name: "mendix.lib.MxContext#getActiveGUID",
			reg: ".getActiveGUID",
			solution: "mendix/lib/MxContext#getTrackId"
		},
		{
			name: "mendix.lib.MxContext#getTrackID",
			reg: ".getTrackID",
			solution: "mendix/lib/MxContext#getTrackId"
		},

		{
			name: "mendix.lib.MxContext#setActiveClass",
			reg: ".setActiveClass",
			solution: "mendix/lib/MxContext#setTrackEntity"
		},
		{
			name: "mendix.lib.MxContext#setActive",
			reg: ".setActive",
			solution: "mendix/lib/MxContext#setTrackEntity"
		},
		{
			name: "mendix.lib.MxContext#setTrackID",
			reg: ".setTrackID",
			solution: "mendix/lib/MxContext#setTrackId"
		},
		{
			name: "mendix.lib.MxContext#setContextFromMxObject",
			reg: ".setContextFromMxObject",
			solution: "mendix/lib/MxContext#setContext"
		},
		{
			name: "mendix.lib.MxObject#getGUID",
			reg: ".getGUID",
			solution: "mendix/lib/MxObject#getGuid"
		},
		{
			name: "mendix.lib.MxObject#getClass",
			reg: ".getClass",
			solution: "mendix/lib/MxObject#getEntity"
		},
		{
			name: "mendix.lib.MxObject#getAttribute",
			reg: ".getAttribute",
			solution: "mendix/lib/MxObject#get"
		},
		{
			name: "mendix.lib.MxObject#setAttribute",
			reg: ".setAttribute",
			solution: "mendix/lib/MxObject#set"
		},
		{
			name: "mendix.lib.MxObject#hasAttribute",
			reg: ".hasAttribute",
			solution: "mendix/lib/MxObject#has"
		},
		{
			name: "mendix.lib.MxObject#getAttributeClass",
			reg: ".getAttributeClass",
			solution: "mendix/lib/MxObject#getAttributeType"
		},
		{
			name: "mendix.lib.MxObject#inheritsOf",
			reg: ".inheritsOf",
			solution: "mendix/lib/MxObject#inheritsFrom"
		},
		{
			name: "mendix.lib.MxObject#hasSubClasses",
			reg: ".hasSubClasses",
			solution: "mendix/lib/MxObject#hasSubEntities"
		},
		{
			name: "mendix.lib.MxObject#getSubClasses",
			reg: ".getSubClasses",
			solution: "mendix/lib/MxObject#getSubEntities"
		},
		{
			name: "mendix.lib.MxObject#hasSuperClasses",
			reg: ".hasSuperClasses",
			solution: "mendix/lib/MxObject#hasSuperEntities"
		},
		{
			name: "mendix.lib.MxObject#getSuperClasses",
			reg: ".getSuperClasses",
			solution: "mendix/lib/MxObject#getSuperEntities"
		},
		{
			name: "mendix.lib.MxObject#getSelectorClass",
			reg: ".getSelectorClass",
			solution: "mendix/lib/MxObject#getSelectorEntity"
		},
		{
			name: "mendix.lib.MxObject#save",
			reg: /(!mx\.data)\.save/,
			solution: "mx.data.save"
		},
		{
			name: "mendix.lib.MxObject#commit",
			reg: ".commit",
			solution: "mx.data.commit"
		},
		{
			name: "mendix.lib.MxObject#rollback",
			reg: ".rollback",
			solution: "mx.data.rollback"
		},
		{
			name: "mendix.lib.MxObject#saveSequence",
			reg: ".saveSequence",
			solution: "mx.data.save + mx.data.commit"
		},
		{
			name: "mendix.lib.MxMetaObject#getGUID",
			reg: ".getGUID",
			solution: "mendix/lib/MxMetaObject#getGuid"
		},
		{
			name: "mendix.lib.MxMetaObject#getClass",
			reg: ".getClass",
			solution: "mendix/lib/MxMetaObject#getEntity"
		},
		{
			name: "mendix.lib.MxMetaObject#hasAttribute",
			reg: ".hasAttribute",
			solution: "mendix/lib/MxMetaObject#has"
		},
		{
			name: "mendix.lib.MxMetaObject#getAttributeClass",
			reg: ".getAttributeClass",
			solution: "mendix/lib/MxMetaObject#getAttributeType"
		},
		{
			name: "mendix.lib.MxMetaObject#inheritsOf",
			reg: ".inheritsOf",
			solution: "mendix/lib/MxMetaObject#inheritsFrom"
		},
		{
			name: "mendix.lib.MxMetaObject#hasSubClasses",
			reg: ".hasSubClasses",
			solution: "mendix/lib/MxMetaObject#hasSubEntities"
		},
		{
			name: "mendix.lib.MxMetaObject#getSubClasses",
			reg: ".getSubClasses",
			solution: "mendix/lib/MxMetaObject#getSubEntities"
		},
		{
			name: "mendix.lib.MxMetaObject#hasSuperClasses",
			reg: ".hasSuperClasses",
			solution: "mendix/lib/MxMetaObject#hasSuperEntities"
		},
		{
			name: "mendix.lib.MxMetaObject#getSuperClasses",
			reg: ".getSuperClasses",
			solution: "mendix/lib/MxMetaObject#getSuperEntities"
		},
		{
			name: "mendix.lib.MxMetaObject#getSelectorClass",
			reg: ".getSelectorClass",
			solution: "mendix/lib/MxMetaObject#getSelectorEntity"
		}
	]
};

module.exports = deprecations;