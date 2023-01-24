import React, { forwardRef } from "react";

import {
  classNames,
  defaultColors,
  fontWeight,
  getColorVariantsFromColorThemeValue,
} from "lib";

interface TableHeadProps {
  children: React.ReactElement[] | React.ReactElement;
}

const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ children }, ref) => (
    <>
      <thead
        className={classNames(
          "tr-text-left",
          getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
          fontWeight.lg
        )}
        ref={ref}
      >
        {children}
      </thead>
    </>
  )
);

export default TableHead;
