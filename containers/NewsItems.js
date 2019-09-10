import React from 'react';
import { connect, useSelector } from 'react-redux';
import NewsItem from './NewsItem';



export default () =>{
  const articles = useSelector(state => state.news)
  return(
    articles ? articles.map(article => <NewsItem article={article}/>): null
  );
}

// const NewsItems = ({articles}) =>{

//   return(
//     articles ? articles.map(article => <NewsItem article={article}/>): null
//   );
// }

// const mapStateToProps = (state) => ({
//   articles: state.news,
// })
// export default connect(
//   mapStateToProps,
//   null
// )(NewsItems);