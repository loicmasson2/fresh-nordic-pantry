"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onRenderBody = void 0;
var React = require("react");
var stitches_config_1 = require("./stitches.config");
var HeadComponents = [
    <style id="stitches" key="stitches" dangerouslySetInnerHTML={{
            __html: (0, stitches_config_1.getCssText)(),
        }}/>,
];
var onRenderBody = function (_a) {
    var setHeadComponents = _a.setHeadComponents, setBodyAttributes = _a.setBodyAttributes;
    setHeadComponents(HeadComponents);
};
exports.onRenderBody = onRenderBody;
