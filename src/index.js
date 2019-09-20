import React from "react";
import ReactDOM from "react-dom";

//
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createRootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
//
import rootSaga from "./saga";
import ConnectedUserLogin from "./UserLogin";

import "./styles.css";

const App = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(createRootReducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga);

  return (
    <Provider store={store}>
      <div className="App">
        <ConnectedUserLogin />
      </div>
    </Provider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
