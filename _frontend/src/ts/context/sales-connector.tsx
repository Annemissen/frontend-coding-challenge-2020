import React from 'react';
import { SalesEventHub } from '../services/messages';
import { EntityStore } from '../services/meta-store';

interface SalesConnnectorContextValue {
	hub: SalesEventHub;
	store: EntityStore;
}

export const SalesConnnectorContext = React.createContext<SalesConnnectorContextValue>(null);

export const SalesConnnectorProvider = ({ children }) => {
	const services = React.useRef<SalesConnnectorContextValue>((null))

	const getContextValue = () => {
		if (services.current === null) {
			const hub = new SalesEventHub();
			const store = new EntityStore();
			hub.connect()

			services.current = {
				hub, store
			}
		}
		return services.current
	}

	return (
		<SalesConnnectorContext.Provider value={getContextValue()}>
			{children}
		</SalesConnnectorContext.Provider>
	)
}
