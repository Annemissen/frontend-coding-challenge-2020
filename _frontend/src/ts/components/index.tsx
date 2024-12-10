import React from 'react';
import { Sidebar } from './views/sidebar';
import { SalesConnnectorProvider } from '../context/sales-connector';
import { DashBoardView } from './dashboard'

export default () => (
	<React.StrictMode>
		<Sidebar />
		<SalesConnnectorProvider>
			<DashBoardView />
		</SalesConnnectorProvider>
	</React.StrictMode>
)

