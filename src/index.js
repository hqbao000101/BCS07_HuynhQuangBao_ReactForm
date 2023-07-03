import ReactDOM from "react-dom/client";
import "./index.css";
import Form from "./Components/Form";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Form />
  </Provider>
);
