/* @refresh reload */
import { type MountableElement, render } from "solid-js/web";

import "./styles/reset.css";
import App from "./App";

render(() => <App />, document.getElementById("root") as MountableElement);
