import React,{Component} from "react";

export default class NewsItem extends Component{
    render(){
        let {title,description, imgUrl, newsUrl, date, author} =this.props
        return(
    <>  
    <div className="container">
    <div className="my-3">
           <div className={`card bg-${this.props.mode==='dark'?'dark':'light'} text-${this.props.mode==='dark'?'light':'dark'}`} >
            <img src={imgUrl?imgUrl:"https://www.niddk.nih.gov/-/media/Images/Components/Default-Social-Media-Images/News-Card.png"} className="card-img-top" alt="NewsSphere.com  Loading Error"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{date} <strong style={{position: 'absolute', right: '20px'}}>-{author}</strong></p>
                <p className="card-text">{description}</p>
                <a href={newsUrl} target="_blank" className={`btn btn-sm btn-${this.props.mode==='dark'?'light':'primary'}`}>Read More...</a>
            </div>
            </div>
        </div>
        </div>
 </>
        )              
    }
}