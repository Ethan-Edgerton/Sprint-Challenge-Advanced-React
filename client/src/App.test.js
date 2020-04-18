import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render } from "@testing-library/react";
import NavBar from "./components/navBar";
import Players from "./components/Players";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Dark mode toggle working", () => {
  const { getByTestId } = render(<NavBar />);
  getByTestId(/darkMode/i);
});

test("Players rendering", () => {
  const { getByTestId } = render(<Players />);
  getByTestId(/players/i);
});
