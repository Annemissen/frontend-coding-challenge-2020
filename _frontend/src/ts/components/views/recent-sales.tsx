import React, { useState } from 'react';
import { Card } from '../widgets/card';
import Table from '../widgets/table';
import { Sale } from '../dashboard';


export interface RecentSalesViewProps {
	recentSales: Sale[]
}


export const RecentSalesView = ({ recentSales }: RecentSalesViewProps) => {	
	
	const tenMostRecentSales = recentSales.length < 10 ? recentSales : recentSales.slice(-10)
	// console.log(tenMostRecentSales)
	// const [state, setState] = useState<Array<Sale>>(recentSales)
	
	return (
		<Card>
			<Card.InsetBody>
				Recent Sales
				<Table>
					<Table.Headers>
						<Table.Header>User</Table.Header>
						<Table.Header>Product Name</Table.Header>
						<Table.Header>Value</Table.Header>
					</Table.Headers>
					<Table.Body>
						{recentSales.slice(-10).map((sale, index) => {
						return (
							<Table.Row key={index}>
								<Table.Cell>{sale.name}</Table.Cell>
								<Table.Cell>{sale.productName}</Table.Cell>
								<Table.Cell>{sale.saleValue.toFixed(2)}</Table.Cell>
							</Table.Row>
						)})}
					</Table.Body>
				</Table>
			</Card.InsetBody>
		</Card>
	)
}
