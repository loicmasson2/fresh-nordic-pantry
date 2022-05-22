import * as React from "react";
import { getCssText } from "./stitches.config";
const HeadComponents = [
  <style
    id="stitches"
    key="stitches"
    dangerouslySetInnerHTML={{
      __html: getCssText(),
    }}
  />,
];
export const onRenderBody = ({ setHeadComponents, setBodyAttributes }) => {
  setHeadComponents(HeadComponents);
};
