import React, { forwardRef } from "react";

import { classNames, fontSize, parseSpaceX, spacing } from "lib";
import { SpaceX } from "../../../lib";

export interface ListItemProps {
  spaceX?: SpaceX | "";
  children: React.ReactNode;
}

const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ spaceX = "", children }, ref) => {
    return (
      <>
        <li
          className={classNames(
            "tr-w-full tr-flex tr-justify-between tr-items-center tr-truncate tr-tabular-nums",
            spaceX ? parseSpaceX(spaceX) : spaceX,
            spacing.sm.paddingTop,
            spacing.sm.paddingBottom,
            fontSize.sm
          )}
          ref={ref}
        >
          {children}
        </li>
      </>
    );
  }
);

export default ListItem;
