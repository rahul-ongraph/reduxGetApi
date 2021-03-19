import React from "react";
import Login from "./container/Login";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Login />
      </Provider>
    </div>
  );
}
export default App;
