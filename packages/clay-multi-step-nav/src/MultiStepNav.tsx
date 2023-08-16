/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

import ClayMultiStepNavDivider from './Divider';
import ClayMultiStepNavIndicator from './Indicator';
import ClayMultiStepNavItem from './Item';
import ClayMultiStepNavTitle from './Title';

export interface IProps extends React.HTMLAttributes<HTMLOListElement> {
	/**
	 * Flag to indicate if nav should add `multi-step-nav-collapse-sm` class
	 */
	autoCollapse?: boolean;

	/**
	 * Flag to indicate if nav should add `multi-step-item-fixed-width` class.
	 */
	fixedWidth?: boolean;

	/**
	 * Flag to indicate the position of the indicator label.
	 */
	indicatorLabel?: 'bottom' | 'top';
}

function ClayMultiStepNav(props: IProps): JSX.Element & {
	Divider: typeof ClayMultiStepNavDivider;
	Indicator: typeof ClayMultiStepNavIndicator;
	Item: typeof ClayMultiStepNavItem;
	Title: typeof ClayMultiStepNavTitle;
};

function ClayMultiStepNav({
	autoCollapse = true,
	children,
	className,
	fixedWidth,
	indicatorLabel = 'bottom',
	...otherProps
}: IProps) {
	return (
		<ol
			className={classNames('multi-step-nav', className, {
				'multi-step-item-fixed-width': fixedWidth,
				'multi-step-nav-collapse-sm': autoCollapse,
				[`multi-step-indicator-label-${indicatorLabel}`]:
					indicatorLabel,
			})}
			{...otherProps}
		>
			{children}
		</ol>
	);
}

ClayMultiStepNav.Divider = ClayMultiStepNavDivider;
ClayMultiStepNav.Indicator = ClayMultiStepNavIndicator;
ClayMultiStepNav.Item = ClayMultiStepNavItem;
ClayMultiStepNav.Title = ClayMultiStepNavTitle;

export default ClayMultiStepNav;
