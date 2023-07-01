import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spin from "./Spin";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
    mode: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [""],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }
  async componentDidMount() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    this.props.setProgress(60);
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);

    document.title =
      this.props.category === "General"
        ? ' NewsSphere - Latest News, Breaking Stories, and In-Depth Analysis'
        : `NewsSphere - ${this.props.category}`;
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1, loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
      loading: false
    });
  };

  render() {
    return (
      <>
        <div className="container my-5">
          <h1
            className={`container text-center my-4 text-${
              this.props.mode === "dark" ? "light" : "dark"
            }`}
          >
            {this.props.category === "General"
              ? "NewsSphere-Top Headlines"
              : `${this.props.category} News`}
          </h1>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}/>
            
          <div className="container">
            <div className="row">
              {this.state.articles.map((element, index) => {
                return (
                  <div className="col-md-4" key={`${element.url}-${index}`}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imgUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source && element.source.name}
                      mode={this.props.mode}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {this.state.loading && <Spin />}
        </div>
      </>
    );
  }
}
