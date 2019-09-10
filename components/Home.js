import React from 'react'
// import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import NewsItems from '../containers/NewsItems'
import { getNews } from '../actions'


const Home = () =>{
  const dispatch = useDispatch();
  dispatch({ type: 'GET_NEWS' })
   return <NewsItems />
}
export default Home



// class Home extends React.Component {
//   componentDidMount() {
//     this.props.getNews()
//   }
//   render() {
//     return <NewsItems />
//   }
// }

// const mapDispatchToProps = {
//   getNews: getNews,
// };
// export default connect(null, mapDispatchToProps)(Home);