import React from 'react'
// import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import NewsItems from '../containers/NewsItems'
import Loading from '../containers/Loading'
import { getNews } from '../actions'

//sử dụng họok thay vì dùng connect của redux 
const Home = () =>{
  const dispatch = useDispatch();
  dispatch({ type: 'GET_NEWS' })
   return [<NewsItems />, <Loading/>]
}
export default Home


//Phần này kết quả tương tự fuction bên trên nhưng không sử dụng hook.
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