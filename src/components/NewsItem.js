import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <div style={{display :"flex",justifyContent:'flex-end',position:"absolute",right:"0"}}>
        <span className=" badge rounded-pill bg-info" >
          {source}
          </span></div>
        <img
          src={
            !imageUrl
              ? "https://imageio.forbes.com/specials-images/imageserve/62851ebd35c066f18f23d734/0x0.jpg?format=jpg&width=1200"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsUrl} className="btn btn-sm btn-primary">
            Read more
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
