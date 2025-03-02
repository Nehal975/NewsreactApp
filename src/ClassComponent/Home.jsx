import React, { Component } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from 'react-infinite-scroll-component';
class Home extends Component {
    constructor(){
        super()
        this.state={
            articles:[],
            totalResult:0,
            page:1
        }
        console.log("API Response:", this.state.articles);
    }
    async getAPIData() {
        try {
            let response = await fetch(
                `https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.language}&page=1&pageSize=18&sortBy=publishedAt&apiKey=3916ddc1609f4a7aa879e34eaf006a92`
            );
            response = await response.json();
            console.log("API Response:", response); 
    
            if (response.status === "ok") {
                this.setState({
                    articles: response.articles,
                    totalResults: response.totalResults,
                    
                });
            } else {
                console.error("API Error:", response.message);
            }
        } catch (error) {
            console.error("Fetch Error:", error);
        }
    }
    fetchData= async()=>{
        this.setState({page:this.state.page+1})
        let response = await fetch(
            `https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.language}&page=${this.state.p}&pageSize=18&sortBy=publishedAt&apiKey=3916ddc1609f4a7aa879e34eaf006a92`
        );
        response = await response.json();
        console.log("API Response:", response); 

        if (response.status === "ok") {
            this.setState({
                articles:this.state.articles.concat(response.articles)
                
            });
        }

    }
    componentDidMount(){
        this.getAPIData()
    }
    componentDidUpdate(oldprops){
        console.log("called")
        if(oldprops!==this.props){
            this.getAPIData()
        }

    }
  render() {
    return (
        <div className="container-fluid">
                 <h5 className=" text-capitalize background text-center p-2 mt-1 text-dark ">{this.props.q} Articles</h5>
                 <InfiniteScroll
  dataLength={this.state.articles.length} 
  next={this.fetchData}
  hasMore={this.state.articles.length<this.state.totalResults}
  loader={<div className="my-5 text-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  </div>}
  
  >
                 <div className="row">
  {
    this.state.articles.map((item, index) => {
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
}

export default Home;
// 4e5fcef324c645789d54857d5b1601ae
