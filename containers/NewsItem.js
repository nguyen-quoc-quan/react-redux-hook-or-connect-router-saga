import React from 'react';

const imgStyle = {
  hight: 'auto',
  width: '80%',
  border: '4px solid RebeccaPurple ',
  borderRadius: '5%'
};
const articleStyle = {
width: '50%',
margin: '0 auto',
color: 'olive'
}
const NewsItem = (props) => {
  return(
    <article style={articleStyle}>
      <div>
        <h1>{props.article.title}</h1>
        <img style={imgStyle} src={props.article.urlToImage} alt="" />
        <h4>{props.article.description}</h4>
        <a href={props.article.url} target="_blank">READ MORE</a>
      </div>
    </article>
  );
}

export default NewsItem;