import ReactDOM from "react-dom";
import { CartCtxManager } from "./componenet/Cart/CartCtx";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <CartCtxManager>
    <App />
  </CartCtxManager>,
  document.getElementById("root")
);
