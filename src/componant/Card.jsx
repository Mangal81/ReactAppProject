

 import {AppContext} from '../appContext/AppContext'
 import { useContext, useEffect } from "react";
 
 function Card({newsData}){

	{
		newsData.map((news) =>{
			console.log(news.author)
		})
	}

     return (
		<div>

			{
				newsData.length===0 ? (<p>no post</p>):
				(
					newsData.map((post,index) =>{
						return (<p>{index} {post.author} </p>)
					})	
				)
			}

		</div>
	 )

 }
 
 export default Card;


 
 

 

 
 
 {/*
 
 const {newsData} = useContext(AppContext);
     console.log(newsData);
     console.log("printing in Card.jsx");
     
     newsData.map((news,index)=>{
     	console.log(news.author);
     })
 
 */}
 
 
 
