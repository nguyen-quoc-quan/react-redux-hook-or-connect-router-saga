import { put, takeLatest, all } from 'redux-saga/effects'

function* fetchNews(){
  const json = yield fetch('https://newsapi.org/v2/everything?q=hawaii&apiKey=e1c38e0e78f640a3a3ad01d704d55464')
         .then(response => response.json(), );    
   yield put({ type: "NEWS_RECEIVED", json: json.articles, });
}
function* actionWatcher() {
     yield takeLatest('GET_NEWS', fetchNews)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}