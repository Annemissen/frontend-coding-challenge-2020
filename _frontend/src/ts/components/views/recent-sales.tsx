import React, { useState } from 'react';
import { Card } from '../widgets/card';
import Table from '../widgets/table';
import { Sale } from '../dashboard';


export interface RecentSalesViewProps {
	recentSales: Sale[]
}


export const RecentSalesView = ({ recentSales }: RecentSalesViewProps) => {	
	
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
						{recentSales.map((sale, index) => {
						return (
							<Table.Row key={index}>
								<Table.Cell>{sale.name}</Table.Cell>
								<Table.Cell>{sale.productName}</Table.Cell>
								<Table.Cell>{sale.saleValue}</Table.Cell>
							</Table.Row>
						)})}
					</Table.Body>
				</Table>
			</Card.InsetBody>
		</Card>
	)
}
