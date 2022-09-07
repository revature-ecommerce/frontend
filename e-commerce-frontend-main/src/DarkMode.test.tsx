import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import DarkMode from './DarkMode';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Narbar";

afterEach(cleanup);

test("renders dark mode component", () => {
  render(<DarkMode />);
  const inputElement = screen.getByRole("checkbox") as HTMLInputElement;
  expect(inputElement).toBeInTheDocument();
});

test("toggles dark mode", () => {
  render(<DarkMode />);
  const inputElement = screen.getByRole("checkbox") as HTMLInputElement;
  expect(inputElement.checked).toEqual(false);
  fireEvent.click(inputElement);
  expect(inputElement.checked).toEqual(true);
  expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
});

// test("Check Logo",()=>{
//   render(<App/>);
//   const linkElement = screen.getByText(/Revature/i);
//   expect(linkElement).toBeInTheDocument();
// });
test("Check Logo",()=>{
  render(
  <BrowserRouter>
  <Navbar/>    
  </BrowserRouter>
  );
  const logo=screen.getAllByRole("img");
  expect(logo).toBeInTheDocument;
});