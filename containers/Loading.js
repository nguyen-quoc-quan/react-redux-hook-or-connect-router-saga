import React from 'react';
import { connect, useSelector } from 'react-redux'
import img from './giphy.gif'

export default () =>{
  const loading = useSelector(state => state.loading)
  return(
    loading ?
    <div style={{ textAlign: 'center' }}>
      <img src={img} alt='loading' />
      <h1>LOADING</h1>
    </div>:
    null
  )
}

// let Loading = ({ loading }) => (
// loading ?
// <div style={{ textAlign: 'center' }}>
//    <img src={img} alt='loading' />
//    <h1>LOADING</h1>
// </div>:
// null
// );
// const mapStateToProps = (state) => ({loading: state.loading})
// Loading = connect(mapStateToProps,null)(Loading)
// export default Loading;