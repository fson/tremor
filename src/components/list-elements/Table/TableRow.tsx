import React, { forwardRef } from "react";

export interface TableRowProps {
  children: React.ReactNode;
}

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ children }, ref) => {
    return (
      <>
        <tr ref={ref}>{children}</tr>
      </>
    );
  }
);

export default TableRow;
