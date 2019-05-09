"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_helmet_1 = require("react-helmet");
var BaseLayout_1 = require("@components/BaseLayout");
var foo = {
    blah: 10,
    shj: 9
};
exports.default = (function () { return (React.createElement(BaseLayout_1.default, null,
    React.createElement(react_helmet_1.Helmet, null,
        React.createElement("title", null, "Home"),
        React.createElement("meta", { name: "description", content: "A page's description, usually one or two sentences." })),
    React.createElement("h2", null, "This is the homepage"),
    React.createElement("p", null, "You're good to go. Start adding content."))); });
//# sourceMappingURL=index.js.map