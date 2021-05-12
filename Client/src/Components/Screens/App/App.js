import React from "react";

//Dependencies
import { AccessTokenProvider } from "../../Context/AccessTokenContext";
import Routes from "../../Routes/Routes";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "../../Redux/reducer";
import thunk from "redux-thunk";
import { MainProvider } from "../../Context/MainContext";

const App = () => {
  const store = createStore(reducer, applyMiddleware(thunk));

  return (
    <Provider store={store}>
      <AccessTokenProvider>
        <MainProvider>
          <Routes />
        </MainProvider>
      </AccessTokenProvider>
    </Provider>
  );
};

export default App;
