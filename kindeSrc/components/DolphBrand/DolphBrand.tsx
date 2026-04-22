"use server";

import React from "react";
import dolphWordmark from "./DolphLong.svg";

export const DolphBrand = (): React.JSX.Element => (
  <div className="dolph-brand">
    <img
      alt="DOLPH CLOUD"
      className="dolph-brand__logo"
      decoding="async"
      height={87}
      src={dolphWordmark}
      width={192}
    />
  </div>
);