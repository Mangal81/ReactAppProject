import "./App.css";
import {AppContext} from './appContext/AppContext'
import { useContext, useEffect } from "react";

import Card from './componant/Card';

export default function App() {
	const {newsData, fetchData} = useContext(AppContext);
	useEffect(()=>{
		fetchData();
	},[])
	
  return (
    <div>
    	<div>
    		<Card/>
    	</div>
    </div>
  )
}


