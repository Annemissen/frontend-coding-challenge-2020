import React from 'react';
import { classNames } from '../lib/compose';

export const Card = ({ children, className = undefined, ...rest }) => (
	<div
		role="region"
		className={classNames(
			'bg-white px-4 sm:px-6 py-5 border border-gray-100 shadow-md w-full rounded-md',
			'flex flex-col',
			className || '',
		)}
		{...rest}
	>
		{children}
	</div>
);

Card.InsetBody = ({ children, className = undefined }) => (
	<div className={classNames(
		'-mx-4 -my-5 sm:-mx-6 block min-h-0 w-auto',
		className,
	)}>
		{children}
	</div>
);
