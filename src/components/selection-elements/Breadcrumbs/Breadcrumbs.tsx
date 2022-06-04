import React from 'react';

import { classNames, parseTextColorClassNames } from '@utils/classname-utils';

export interface BreadcrumbsProps {
    maxItems?: number,
    separator?: string,
    textColor?: string,
    children: React.ReactNode,
}

const Breadcrumbs = ({
    maxItems = 3,
    separator = '/',
    textColor = 'text-gray-500',
    children,
}: BreadcrumbsProps) => {
    const childrenCount = React.Children.count(children);
    const childrenArray = React.Children.toArray(children);
    const FirstChild = childrenArray[0];
    const LastChild = childrenArray[childrenArray.length - 1];
    return (
        <div className="w-full flex justify-start items-center">
            {
                childrenCount > maxItems ? (
                    <>
                        <div className={ classNames(parseTextColorClassNames(textColor)) }>
                            { FirstChild }
                        </div>
                        <div className={ classNames(
                            parseTextColorClassNames(textColor),
                            'mx-4'
                        ) }
                        >
                            { separator }
                        </div>
                        <span className={ classNames(parseTextColorClassNames(textColor)) }>
                            ...
                        </span>
                        <div className={ classNames(
                            parseTextColorClassNames(textColor),
                            'mx-4'
                        ) }
                        >
                            { separator }
                        </div>
                        <div className={ classNames(parseTextColorClassNames(textColor)) }>
                            { LastChild }
                        </div>
                    </>
                ) : (
                    <>
                        { React.Children.map(children, (child, i) => (
                            <>
                                <div className={ classNames(parseTextColorClassNames(textColor)) }>
                                    { child }
                                </div>
                                {
                                    i !== childrenCount - 1 ? (
                                        <div className={ classNames(parseTextColorClassNames(textColor), 'mx-4') }>
                                            { separator }
                                        </div>
                                    ) : null
                                }
                            </>
                        )) }
                    </>
                )
            }
        </div>
    );
};

export default Breadcrumbs;
