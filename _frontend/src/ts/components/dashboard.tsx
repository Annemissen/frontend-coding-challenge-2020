import React from 'react';
import { RecentSalesView } from './views/recent-sales';
import { TopSalesView, TopSalesViewProps } from './views/top-sales';
import { SplashModal } from './widgets/splash-modal';
import { Header } from './views/header';
import { SalesConnnectorContext } from '../context/sales-connector'; 

export interface Seller {
	name: string;
	id: number;
	totalSalesValue: number;
}

export interface Sale {
	name: string;
	productName: string;
	saleValue: number;
}

export const DashBoardView = () => {
	const { hub, store } = React.useContext(SalesConnnectorContext)

	const [mode, setMode] = React.useState<'top' | 'recent'>('recent');
	const [splash, setSplash] = React.useState<boolean>(false);
	const [splashMessageList, setSplashMessageList] = React.useState<Array<string>>([]);

	const [recentSalesState, setRecentSalesState] = React.useState<Array<Sale>>([]);
	const [sellersState, setSellersState] = React.useState<Array<Seller>>([]);

	React.useEffect(() => {
		// initialize callback
		const cb = async (e) => {
			let user = await store.getUser(e.userId)
			let product = await store.getProduct(e.productId)

			// console.log('User', user.name, `(${user.id})`, 'sold', product.name, 'with subscription length', e.duration, 'sales value: ', product.unitPrice * e.duration)

			//Recent sales
			const saleValue = product.unitPrice * e.duration
			setRecentSalesState((prevState) => (
				prevState.length > 9 
					? [...prevState, {name: user.name, productName: product.name,saleValue: saleValue}].slice(1) 
					: [...prevState, {name: user.name, productName: product.name, saleValue: saleValue}]
			))

			//Top sellers
			const existingSeller = sellersState.find((seller) => seller.id === user.id)
			if (existingSeller !== undefined) {
				updateSeller(existingSeller, saleValue)
			}
			else {
				addSeller(user.name, user.id, saleValue)
			}

			setSplashMessageList((prevState) => ([...prevState, `${user.name} sold ${product.name} worth ${saleValue}`]))

		}
		hub.registerSalesEventListener(cb)

		return () => hub.unregisterSalesEventListener(cb)
		
		
	}, [sellersState]);


	// Timer for notifications
	React.useEffect(() => {
		if (splashMessageList.length > 0) {
			if (!splash){
				setSplash(true)
				setTimeout(() => {
					setSplashMessageList((prevState) => (prevState.slice(1)))
					setSplash(false)
				}, 5000)
			}
		}

	 }, [splash, splashMessageList])


	 // Timer for sellers and sales view
	 React.useEffect(() => {
		// The top sellers list should be displayed for a minute, and the most recent sales should only be display for half a minute
		let halfwayThroughTopSellers = false
		const interval = setInterval(() => {
			if (mode === 'recent'){
				setMode('top')
			}
			else {
				if (!halfwayThroughTopSellers){
					halfwayThroughTopSellers = true
				}
				else {
					halfwayThroughTopSellers = false
					setMode('recent')
				}
			}
		}, 30000); 

		return () => {
			clearInterval(interval)
		}
	 }, [mode])


	const updateSeller = (seller: Seller, saleValue: number) => {	
		const newSellersState = sellersState.filter((s) => s.id !== seller.id)
		setSellersState((prevState) => ([...newSellersState, {
			name: seller.name,
			id: seller.id,
			totalSalesValue: seller.totalSalesValue + saleValue
		}]))
	}
	

	const addSeller = (name: string, id: number, saleValue: number) => {
		setSellersState((prevState) => ([...prevState, {
			name: name,
			id: id,
			totalSalesValue: saleValue
		}]))
	}
	
	const getTop10Sellers = () => {
		return sellersState.sort(compareSellers).slice(0,10)
	}


	const compareSellers = (sellerA: Seller, sellerB: Seller) => {
		return sellerB.totalSalesValue - sellerA.totalSalesValue
	}


	return (
		<>
			<div className="flex-auto p-5">
				<Header />
				{splash &&
					<SplashModal text={splashMessageList[0]}/>
				}
				{mode === 'recent' ?
					<RecentSalesView recentSales={recentSalesState}/>
					: <TopSalesView topSellers={getTop10Sellers()}/>
				}

			</div>
		</>
	)
}
