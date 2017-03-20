import React, { Component } from 'react';
import ReactNative from 'react-native';

import { Provider }  from 'react-redux'

import { createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './../reducers'


//Import JSX component
const {
  View,
  Text
} = ReactNative;

// middleware that logs actions
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware
    )
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});
//The main component of the application :
export default class AppContainer extends Component {

  render() {
    return (
    <Provider store={store}>
      <View>
        <Text style={{marginTop: 20}}>
          Hello World !
        </Text>
      </View>
    </Provider>
    );
  }

}
