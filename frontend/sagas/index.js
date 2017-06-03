import client from '../api';
// import { delay } from 'redux-saga'
import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'

function* helloSaga() {
  console.log('hello saga');
};

const postsService = client.service('posts');

// function* loadPost(action) {
//   try {
//     const data = yield call(postsService.get.bind(postsService), action.payload.id);
//     yield put({
//       type: 'LOAD_POST_SUCCESS',
//       data
//     });
//     console.log('hahahaha');
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//     yield put({
//       type: 'LOAD_POST_ERROR',
//       error
//     });
//   }
// };
// function* loadManyPost(action) {
//   try {
//     const data = yield call(postsService.find.bind(postsService), action.payload.filters);
//     yield put({
//       type: 'LOAD_MANY_POST_SUCCESS',
//       data
//     });
//     console.log('MANY BABY');
//     console.log(data.data);
//   } catch (error) {
//     console.log(error);
//     yield put({
//       type: 'LOAD_MANY_POST_ERROR',
//       error
//     });
//   }
// };

// function* watchLoadPost() {
//   yield takeLatest('LOAD_POST', loadPost);
//   yield takeLatest('LOAD_MANY_POST', loadManyPost);
// };

function createServiceSaga(name, client) {
  function* loadOne(action) {
    const { id, resolve, reject } = action.payload;
    try {
      const data = yield call(client.get.bind(client), id);
      yield put({
        type: `LOAD_ONE_SUCCESS[${name}]`,
        data
      });
      console.log('hahahaha');
      console.log(data);
      if (resolve) {
        resolve(data);
      }
    } catch (error) {
      console.log(error);
      yield put({
        type: `LOAD_ONE_ERROR[${name}]`,
        error
      });
      if (reject) {
        reject(error);
      }
    }
  };
  function* loadMany(action) {
    const { filters, resolve, reject } = action.payload;
    try {
      const data = yield call(client.find.bind(client), filters);
      yield put({
        type: `LOAD_MANY_SUCCESS[${name}]`,
        data
      });
      console.log('MANY BABY');
      console.log(data.data);
      if (resolve) {
        resolve(data);
      }
    } catch (error) {
      console.log(error);
      yield put({
        type: `LOAD_MANY_ERROR[${name}]`,
        error
      });
      if (reject) {
        reject(error);
      }
    }
  };


  return function* watchLoad() {
    yield takeLatest(`LOAD_ONE[${name}]`, loadOne);
    yield takeLatest(`LOAD_MANY[${name}]`, loadMany);
  };
}

export function* rootSaga() {
  yield all([
    helloSaga(),
    // watchLoadPost(),
    createServiceSaga('POST', client.service('posts'))(),
  ]);
};