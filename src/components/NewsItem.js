import React from 'react'

const NewsItem = (props) => {
  
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className="my-3">
        <div className="card" >
        <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}><span className="badge rounded-pill bg-danger" > {source} </span></div>
  <img src={!imageUrl ? "https://img.etimg.com/thumb/msid-101142206,width-1070,height-580,imgsize-88698,overlay-etmarkets/photo.jpg" : imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-danger">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
}

export default NewsItem