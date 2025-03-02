import React,{ useEffect, useState}  from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from 'react-infinite-scroll-component';
function Home (props) {
    let[articles,setarticles]=useState([])
    let[totalResults,setTotalResults]=useState(0)
    let[page,setPage]=useState(1)
 
    async  function getAPIData() {
        try {
            let response = await fetch(
                `https://newsapi.org/v2/everything?q=${props.q}&language=${props.language}&page=${setPage}&pageSize=18&sortBy=publishedAt&apiKey=5c360dbe570840d3a340464e8967a563`
            );
            response = await response.json();
            console.log("API Response:", response); 
    
            
                if (response.status === "ok") {
                    setarticles(response.articles)
                    setTotalResults(response.totalResults)
                }
            else {
                console.error("API Error:", response.message);
            }
        } catch (error) {
            console.error("Fetch Error:", error);
        }
    }
    let fetchData= async()=>{
        setPage(page+1)
        let response = await fetch(
            `https://newsapi.org/v2/everything?q=${props.q}&language=${props.language}&page=${setPage}&pageSize=18&sortBy=publishedAt&apiKey=5c360dbe570840d3a340464e8967a563`
        );
        response = await response.json();
        if (response.status === "ok") {
            setarticles=(articles.concat(response.articles))
        }

    }
    useEffect(()=>{            // it work componentdid mount and componentdidupdate
       getAPIData()
    },[props])
  
  
    return (
        <div className="container-fluid">
                 <h5 className=" text-capitalize background text-center p-2 mt-1 text-dark ">{props.q} Articles</h5>
                 <InfiniteScroll
  dataLength={articles.length} 
  next={fetchData}
  hasMore={articles.length<totalResults}
  loader={<div className="my-5 text-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  </div>}
  
  >
                 <div className="row">
  {
    articles.map((item, index) => {
      return <NewsItem 
      key={index} 
      title={item.title} 
      description={item.description}  
      url={item.url}
      pic={item.urlToImage}
      date={item.publishedAt}
      source={item.source?.name}
      
      />;
    })
  }
</div>
</InfiniteScroll>

        </div>
    );
  }


export default Home;

