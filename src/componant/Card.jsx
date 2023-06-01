
import Spinner from "./Spinner"
 import {AppContext} from '../appContext/AppContext'
 import { useContext} from "react";
import DataCard from "./DataCard";
 
 function Card(){

	const {newsData} = useContext(AppContext);

     return (
		<DataCard/>
	 )

 }
 
 export default Card;


 
 

 

 
 
 {/*
 

 
 
 

 
 */}
 
 
 
