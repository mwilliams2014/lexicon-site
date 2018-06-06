var pageComponent=webpackJsonppageComponent([69],{300:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),a=i(l),c=n(1),p=i(c);n(4),n(5),n(3),n(2),n(7),n(6),n(8),n(9),n(10),n(11),n(12),n(13);var u=n(301),g=i(u),m=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),t}(a.default);p.default.register(m,g.default),t.default=m},301:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.AfbBf=void 0;var l,a=n(0),c=i(a),p=n(1),u=i(p);goog.loadModule(function(e){function t(e,t,i){var l=function(){r("h3",null,null,"id","description"),s("Description"),o("h3"),r("p");var t=e.page.description;"function"==typeof t?t():null!=t&&s(t),o("p"),r("p"),s("This page contemplates the visual definition of the hierarchy, the measurements and the definition of the components that establish that hierarchy"),o("p"),r("h3",null,null,"id","visual-definition"),s("Visual Definition"),o("h3"),r("p"),s("There are defined three main elements to define the form hierarchy:"),o("p"),r("ol"),r("li"),s("Form structure title"),o("li"),r("li"),s("First level section header. This one can be either:"),r("ol"),r("li"),s("The header of a fixed section"),o("li"),r("li"),s("The header of a collapsible section"),o("li"),o("ol"),o("li"),r("li"),s("Second level section header"),o("li"),o("ol"),r("p"),s("You can see all these elements coexisting in the same form structure in the following examples:"),o("p"),r("p"),r("img",null,null,"srcset","../../../images/FormHierarchy1@2x.png 2x","src","../../../images/FormHierarchy1.png","alt","Form hierarchy example 1"),o("img"),o("p"),r("p"),s("Including examplanatory texts:"),o("p"),r("p"),r("img",null,null,"srcset","../../../images/FormHierarchy2@2x.png 2x","src","../../../images/FormHierarchy2.png","alt","Form hierarchy example 2"),o("img"),o("p"),r("h3",null,null,"id","metrics"),s("Metrics"),o("h3"),r("p"),s("Metrics definition is important to understand how forms are build and the vertical spacing logic work in our forms."),o("p"),r("h4"),s("Desktop"),o("h4"),r("p"),s("As it’s explained in the "),r("a",null,null,"href","../../designPrinciples/grid.html"),s("grid section"),o("a"),s(", the main vertical spacing reference is 24px."),o("p"),r("p"),r("strong"),s("Section blocks metrics"),o("strong"),o("p"),r("p"),r("img",null,null,"srcset","../../../images/FormHierarchy3@2x.png 2x","src","../../../images/FormHierarchy3.png","alt","Section blocks metrics"),o("img"),o("p"),r("p"),r("strong"),s("Inside sections metrics"),o("strong"),o("p"),r("p"),r("img",null,null,"srcset","../../../images/FormHierarchy4@2x.png 2x","src","../../../images/FormHierarchy4.png","alt","Inside sections metrics 1"),o("img"),o("p"),r("p"),r("img",null,null,"srcset","../../../images/FormHierarchy5@2x.png 2x","src","../../../images/FormHierarchy5.png","alt","Inside sections metrics 2"),o("img"),o("p"),r("p"),r("strong"),s("Metrics using explanatory texts associated to different section levels"),o("strong"),o("p"),r("p"),r("img",null,null,"srcset","../../../images/FormHierarchy6@2x.png 2x","src","../../../images/FormHierarchy6.png","alt","Metrics using explanatory texts associated to different section levels"),o("img"),o("p"),r("h4"),s("Mobile"),o("h4"),r("p"),s("In small viewports, as it’s explained in the "),r("a",null,null,"href","../../designPrinciples/grid.html"),s("grid section"),o("a"),s(" the main vertical spacing reference changes from 24px to 16px."),o("p"),r("p"),r("img",null,null,"srcset","../../../images/FormHierarchy7@2x.png 2x","src","../../../images/FormHierarchy7.png","alt","Inside sections metrics 2"),o("img"),o("p"),r("p"),r("img",null,null,"srcset","../../../images/FormHierarchy8@2x.png 2x","src","../../../images/FormHierarchy8.png","alt","Inside sections metrics 2"),o("img"),o("p"),r("h3",null,null,"id","components-description"),s("Components Description"),o("h3"),r("p"),s("Here you can see all specific components we can find in this documentation."),o("p"),r("p"),r("img",null,null,"srcset","../../../images/FormHierarchy9@2x.png 2x","src","../../../images/FormHierarchy9.png","alt","Components description"),o("img"),o("p"),r("input",null,null,"type","hidden","value",e.page.title),o("input"),r("input",null,null,"type","hidden","value",e.site.title),o("input")};a(n.$$assignDefaults({content:l},e),null,i)}goog.module("AfbBf.incrementaldom");var n=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var i=goog.require("incrementaldom"),r=i.elementOpen,o=i.elementClose,s=(i.elementVoid,i.elementOpenStart,i.elementOpenEnd,i.text),a=(i.attr,u.default.getTemplate("guide.incrementaldom","render"));return e.render=t,goog.DEBUG&&(t.soyTemplateName="AfbBf.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=l=e,e});var g=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),t}(c.default);u.default.register(g,l),t.AfbBf=g,t.templates=l,t.default=l}},[300]);