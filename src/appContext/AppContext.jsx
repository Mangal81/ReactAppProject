import { createContext } from 'react';
import baseUrl from '../baseUrl';
import { apiKey } from '../baseUrl';
import { useState } from 'react';

export const AppContext = createContext();

function AppContextProvider({ children }) {

	
	const [newsData, setNewsData]=useState([])
	const url = `${baseUrl}&apiKey=${apiKey}`;
	console.log(url);
	async function fetchData() {
		try {
			const response = await fetch(url)
			const data = await response.json();
			console.log(data.articles);
			setNewsData(data.articles);
		}
		catch(error){
			console.log("Error occured " , error);
		}
	}

	const value = {
		setNewsData,
		newsData,
		fetchData
	}

	return (
		<AppContext.Provider value={value}>
			{children}
		</AppContext.Provider>
	)
}

export default  AppContextProvider;


{/*

totalResults

*/}







