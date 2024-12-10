import React from 'react';
import { classNames } from '../lib/compose';

interface ChildrenProp {
	children?: React.ReactNode | React.ReactNode[];
}

export const Table = ({ children }: ChildrenProp) => (
	<table className={classNames(
		"w-full table-fixed bg-white rounded-sm overflow-x-auto overflow-y-hidden thin-scrollbar"
	)}>
		{children}
	</table>
)

Table.Headers = ({ children }: ChildrenProp) => (
	<thead className="border-b-2 border-gray-100">
		<tr>
			{children}
		</tr>
	</thead>
)


Table.Body = ({ children }: ChildrenProp) => (
	<tbody>
		{children}
	</tbody>
)

Table.Header = ({ children }: ChildrenProp) => (
	<th className={classNames(
		"py-2 px-5 pr-3 font-['Brown'] text-left text-base text-black font-medium",
		"overflow-hidden text-ellipsis whitespace-nowrap"
	)}>
		{children}
	</th>
)


Table.Row = ({ children }: ChildrenProp) => (
	<tr className="odd:bg-zinc-50">
		{children}
	</tr>
)


Table.Cell = ({ children }: ChildrenProp) => (
	<td className={classNames(
		"whitespace-nowrap text-ellipsis text-black py-2 px-5 overflow-hidden text-base",
		"touch-none pointer-events-none overflow-hidden"
	)}>
		{children}
	</td>
)

export default Table;
