import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import NewsItem from './NewsItem';



// const NewsItems = () =>{
//   const articles = useSelector(state => state.news)
//   console.log("aaaaaaaaaaa");
//   return(
//     articles ? articles.map(article => <NewsItem article={article}/>): null
//   );
// }

const NewsItems = ({articles}) =>{

  return(
    articles ? articles.map(article => <NewsItem article={article}/>): null
  );
}

const mapStateToProps = (state) => ({
  articles: state.news,
})
export default connect(
  mapStateToProps,
  null
)(NewsItems);