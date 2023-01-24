import React, { forwardRef } from "react";

import {
  classNames,
  defaultColors,
  getColorVariantsFromColorThemeValue,
  parseMarginTop,
} from "lib";
import { MarginTop } from "../../../lib/inputTypes";

export interface ListProps {
  marginTop?: MarginTop;
  children: React.ReactNode;
}

const List = forwardRef<HTMLUListElement, ListProps>(
  ({ marginTop = "mt-0", children }, ref) => {
    return (
      <ul
        className={classNames(
          "tremor-base list-element tr-w-full tr-overflow-hidden tr-divide-y",
          getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
          getColorVariantsFromColorThemeValue(defaultColors.lightBorder)
            .divideColor,
          parseMarginTop(marginTop)
        )}
        ref={ref}
      >
        {children}
      </ul>
    );
  }
);

export default List;
