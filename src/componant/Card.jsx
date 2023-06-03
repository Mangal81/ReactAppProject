import NavBar from './NavBar'
import Spinner from "./Spinner"
 import {AppContext} from '../appContext/AppContext'
 import { useContext} from "react";
import DataCard from "./DataCard";
 
 function Card(){

	const {newsData,loading} = useContext(AppContext);

     return (
		<div className="w-full h-full">
			<div>
				<NavBar/>
			</div>
		
			 <div className="w-full h-full">
				{
					loading ? (<div className="w-full h-full flex justify-center items-center"><Spinner/></div>) : (<DataCard/>)
				}
			</div>
		</div>
	 )

 }
 
 export default Card;


 {/*
 
w-full h-full 
 
 
 
 */}
