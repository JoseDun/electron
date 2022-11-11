import { createRoot } from "react-dom/client";

import App from "./routes/App";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
