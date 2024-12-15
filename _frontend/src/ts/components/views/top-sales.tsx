import React from 'react';
import Table from '../widgets/table';
import { Card } from '../widgets/card';
import { Seller } from '../dashboard';

export interface TopSalesViewProps {
	topSellers: Seller[]
}

export const TopSalesView = ({ topSellers }: TopSalesViewProps) => {

	const getTop10Sellers = () => {
		return topSellers.sort(compareSellers).slice(0,10)
	}


	const compareSellers = (sellerA: Seller, sellerB: Seller) => {
		return sellerB.totalSalesValue - sellerA.totalSalesValue
	}

	return (
		<Card>
			<Card.InsetBody>
			Top 10 Sellers
				<Table>
					<Table.Headers>
						<Table.Header>User</Table.Header>
						<Table.Header>Total Sales Value</Table.Header>
					</Table.Headers>
					<Table.Body>
						{getTop10Sellers().map((seller, index) => {
							return (
								<Table.Row key={index}>
									<Table.Cell>{seller.name}</Table.Cell>
									<Table.Cell>{seller.totalSalesValue.toFixed(2)}</Table.Cell>
								</Table.Row>
						)})}
					</Table.Body>
				</Table>
			</Card.InsetBody>
		</Card>
	)
}
