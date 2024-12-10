import React from 'react';
import Table from 'react-table'
import { Card } from './card';

export const SplashModal = ({text}) => {
	return (
		<Card>
			<Card.InsetBody>
				{text}
			</Card.InsetBody>
		</Card>
	)
}
