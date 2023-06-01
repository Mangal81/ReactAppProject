 import {AppContext} from '../appContext/AppContext'
 import { useContext} from "react";
 
 function DataCard(){

	const {newsData} = useContext(AppContext);

     return (
		<div>
			{
				newsData.map((post,index)=>{
					return(
						<div className="dataCard" key={index}>
							<h3>{post.title}</h3>
							<p>Author : <i>{post.author}</i></p>
							<p>{post.description} <button>Read More</button></p>
							<p>Published At {post.publishedAt}</p>
						</div>
					)
				})
			}
		</div>
	 )

 }
 
 export default DataCard;
 
