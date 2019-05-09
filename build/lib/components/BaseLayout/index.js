"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_helmet_1 = require("react-helmet");
var gatsby_1 = require("gatsby");
var MainNav_1 = require("@components/MainNav");
exports.BaseLayout = function (_a) {
    var children = _a.children;
    return (React.createElement(React.Fragment, null,
        React.createElement(react_helmet_1.Helmet, { titleTemplate: "New Site - %s" },
            React.createElement("meta", { charSet: "utf-8" })),
        React.createElement("h1", null,
            React.createElement(gatsby_1.Link, { to: "/" }, "Website Title")),
        React.createElement(MainNav_1.default, null),
        children,
        React.createElement("footer", null,
            React.createElement("p", null,
                React.createElement(gatsby_1.Link, { to: "/privacy", title: "privacy policy" }, "Privacy policy")))));
};
exports.default = exports.BaseLayout;
//# sourceMappingURL=index.js.map