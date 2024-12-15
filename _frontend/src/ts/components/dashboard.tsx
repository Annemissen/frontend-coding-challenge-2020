import React, {useState, useEffect, useContext} from 'react';
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

const enum Modes {
	Recent = 'recent',
	Top = 'top'
}


export const DashBoardView = () => {
	const { hub, store } = useContext(SalesConnnectorContext)

	// const modeMap = new Map([['recent', 30000], ['top', 60000]])
	const [modeOptions, setModeOptions] = useState<Map<string,number>>(new Map([
		[Modes.Recent, 5000], 
		[Modes.Top, 1000]
	]))

	// setModeOptions((prevState) => {
	// 	return prevState.set(Modes.Recent, 10000)
	// })


	const [mode, setMode] = useState<Modes>(Modes.Recent);
	// const test = Array.from(modeMap.keys())
	const [splash, setSplash] = useState<boolean>(false);
	const [splashMessageList, setSplashMessageList] = useState<Array<Sale>>([]);

	const [recentSalesState, setRecentSalesState] = useState<Array<Sale>>([]);
	const [sellersState, setSellersState] = useState<Array<Seller>>([]);


	useEffect(() => {
		// initialize callback
		const cb = async (e) => {
			let user = await store.getUser(e.userId)
			let product = await store.getProduct(e.productId)

			console.log('User', user.name, 'sold', product.name, 'with subscription value', e.duration * product.unitPrice)


			//Recent sales
			const saleValue = product.unitPrice * e.duration
			const recentSale: Sale = {name: user.name, productName: product.name, saleValue: saleValue}
			setRecentSalesState((prevState) => (
				[...prevState, recentSale]
			))

			//Top sellers
			const existingSeller = sellersState.find((seller) => seller.id === user.id)
			if (existingSeller !== undefined) {
				updateSeller(existingSeller, saleValue)
			}
			else {
				addSeller(user.name, user.id, saleValue)
			}

			setSplashMessageList((prevState) => ([...prevState, recentSale]))
		}

		hub.registerSalesEventListener(cb)

		return () => hub.unregisterSalesEventListener(cb)
		
	}, [sellersState]);


	// // Timer for notifications - TODO: for at fjerne splash: prøv med interval ...
	useEffect(() => {
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
	 useEffect(() => {
		// The top sellers list should be displayed for a minute, and the most recent sales should only be display for half a minute
		const interval = setInterval(() => {
			if (mode === "recent"){
				setMode(Modes.Top)
			}
			else {
				setMode(Modes.Recent)
			}
		}, modeOptions.get(mode)); 

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

	return (
		<>
			<div className="flex flex-col p-5">
				<div className="pb-5">
					<Header />

					{mode === Modes.Recent ?
						<RecentSalesView recentSales={recentSalesState}/>
						: <TopSalesView topSellers={sellersState}/>
					}

				</div>
				
				{splash &&
					<SplashModal title="New Sale" children={ 
						<div className="max-w-40 min-w-60">
							<a className="font-medium">{splashMessageList[0].name}</a> sold <a className="font-medium">{splashMessageList[0].productName}</a>
							<br></br>
							<a className="font-medium">Sale value:</a> {splashMessageList[0].saleValue.toFixed(2)}
						</div>
					}/>
				}
			</div>
		</>
	)
}
