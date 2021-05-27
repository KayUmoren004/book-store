import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { AccessTokenProvider } from "../../Context/AccessTokenContext";
import { BookProvider } from "../../Context/BookContext";
import reducer from "../../Redux/reducer";
import Routes from "../../Routes/Routes";

const App = () => {
  //Create Redux Store
  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return (
    <Provider store={store}>
      <AccessTokenProvider>
        <BookProvider>
          <Routes />
        </BookProvider>
      </AccessTokenProvider>
    </Provider>
  );
};

export default App;
