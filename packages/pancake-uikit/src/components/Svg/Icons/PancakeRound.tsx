import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 256 256" {...props}>
      <image width="256px" height="256px" href="/images/custom/key-logo.png" />
    </Svg>
  );
};

export default Icon;
