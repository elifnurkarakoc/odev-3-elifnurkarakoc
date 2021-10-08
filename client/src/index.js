import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QuestionProvider } from "./contexts/QuestionContext";
import { ChartProvider } from "./contexts/ChartContext";
import { SocketProvider } from "./contexts/SocketContext";

ReactDOM.render(
  <React.StrictMode>
    <QuestionProvider>
      <SocketProvider>
        <ChartProvider>
            <App />
        </ChartProvider>
      </SocketProvider>
    </QuestionProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
