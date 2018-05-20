import {takeEvery} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import * as types from '../content/index.js';
import axios from 'axios'
// 工作者
export function* fatchData (action) {
    try{
        // call请求外部数据有三个参数 请求方式 url 接受数据
        let data = yield call(axios.post, '/api/list');
        // put等同于dispatch(action)
        yield put({
            type: types.SET_HOME_LIST,
            data: data
        })
    }
    catch(err){
        console.log(err)
    }
}
// export function* fatchData1 (action) {
//     try{
//         // call请求外部数据有三个参数 请求方式 url 接受数据
//         let data = yield call(axios.post, '/api/list');
//         // put等同于dispatch(action)
//         yield put({
//             type: types.SET_HOME_LIST,
//             data: data
//         })
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// 监听者 watcher 监听worker
export default function* watchFetchData () {
    yield takeEvery('FATCH_DATA', fatchData)
    // yield takeEvery('FATCH_DATA1', fatchData1)
}