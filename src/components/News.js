import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
export default class News extends Component {
   static defaultProps={
    country: "in",
     pageSize: 8,
     category: 'general',
   }
    static propTypes={
      country: PropTypes.string,
      category: PropTypes.string,
      pageSize: PropTypes.number,
      mode: PropTypes.string,
    }
  constructor(){
    super();
   this.state={ 
    articles: [''],
    loading: false,
    page:1
  }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles, totalResults: parseData.totalResults });
  }
  
  handlePrevious = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ 
      page: this.state.page - 1,
      articles: parseData.articles
    });
  };
  
  handleNext = async () => {

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles
    });

  }; 

  render() {
    return (
      <>
      <div className='container my-5'>
      <h1 className={`container text-center my-4 text-${this.props.mode==='dark'?'light':'dark'}`}>{this.props.category ? `${this.props.category} News` : 'NewsSphere-Trending'}</h1>

       <div className="row">
      {this.state.articles.map((element, index)=>{
        return <div className="col-md-4" key={`${element.url}-${index}`}>
        <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl ={element.url} author={element.author} date={element.publishedAt} mode={this.props.mode}/>
        </div>

      })}
        </div >
        <div className='d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className={`btn text-${this.props.mode==='dark'?'light':'dark'}`} onClick={this.handlePrevious}>&larr;Prev</button>
        <button disabled={this.state.page+1> Math.ceil(this.state.totalResults/3)} type="button" className={`btn text-${this.props.mode==='dark'?'light':'dark'}`} onClick={this.handleNext}>Next&rarr;</button>
        </div>
       </div>
      </>
    )
  }
}
