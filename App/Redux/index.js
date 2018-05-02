import { combineReducers } from 'redux'
<<<<<<< HEAD
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'
=======
import { persistReducer } from 'redux-persist'
import configureStore from './CreateStore'
import { reducer as formReducer } from "redux-form";
import rootSaga from '../Sagas/'
import ReduxPersist from '../Config/ReduxPersist'
>>>>>>> acfdeafae7b3481c5724b29feadb389be903cd50

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  nav: require('./NavigationRedux').reducer,
  github: require('./GithubRedux').reducer,
<<<<<<< HEAD
  search: require('./SearchRedux').reducer
})

export default () => {
  let { store, sagasManager, sagaMiddleware } = configureStore(reducers, rootSaga)
=======
  search: require('./SearchRedux').reducer,
  form: formReducer
});


export default () => {
  let finalReducers = reducers
  // If rehydration is on use persistReducer otherwise default combineReducers
  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig
    finalReducers = persistReducer(persistConfig, reducers)
  }

  let { store, sagasManager, sagaMiddleware } = configureStore(finalReducers, rootSaga)
>>>>>>> acfdeafae7b3481c5724b29feadb389be903cd50

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers
      store.replaceReducer(nextRootReducer)

      const newYieldedSagas = require('../Sagas').default
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas)
      })
    })
  }

<<<<<<< HEAD
  return store
}
=======
  return store};
>>>>>>> acfdeafae7b3481c5724b29feadb389be903cd50
