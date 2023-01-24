import React, { forwardRef } from "react";

import {
  classNames,
  defaultColors,
  getColorVariantsFromColorThemeValue,
} from "lib";

interface TableBodyProps {
  children: React.ReactElement[] | React.ReactElement;
}

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ children }, ref) => (
    <>
      <tbody
        className={classNames(
          "tr-align-top tr-overflow-x-auto tr-divide-y",
          getColorVariantsFromColorThemeValue(defaultColors.lightBorder)
            .divideColor
        )}
        ref={ref}
      >
        {children}
      </tbody>
    </>
  )
);

export default TableBody;
