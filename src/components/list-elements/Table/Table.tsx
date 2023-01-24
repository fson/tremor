import React, { forwardRef } from "react";

import {
  classNames,
  defaultColors,
  fontSize,
  fontWeight,
  getColorVariantsFromColorThemeValue,
  parseMarginTop,
} from "lib";
import { MarginTop } from "../../../lib";

export interface TableProps {
  marginTop?: MarginTop;
  children: React.ReactNode;
}

const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ marginTop = "mt-0", children }, ref) => (
    <div className="tr-overflow-auto">
      <table
        className={classNames(
          "tremor-base tr-w-full tr-tabular-nums",
          parseMarginTop(marginTop),
          getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
          fontSize.sm,
          fontWeight.sm
        )}
        ref={ref}
      >
        {children}
      </table>
    </div>
  )
);

export default Table;
