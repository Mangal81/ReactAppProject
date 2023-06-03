import { AppContext } from '../appContext/AppContext'
import { useContext } from "react";

function DataCard() {

  const { newsData } = useContext(AppContext);

  return (
    <div className="flex flex-wrap justify-evenly">
      {
        newsData.map((post, index) => {
          return (
            <div className="dataCard h-[400px] w-[300px]" key={index}>
              {/*
							<p className="text-3xl font-bold underline">Author : {post.author}</p>
							<p>{post.description} <button>Read More</button></p>
							<p>Published At {post.publishedAt}</p>*/}
              <div>
                <img src={post.urlToImage}/>
		<h3 className="font-bold">{post.title}</h3>
		<p >{post.description}</p>
              </div>

            </div>
          )
        })
      }
    </div>
  )

}

export default DataCard;

