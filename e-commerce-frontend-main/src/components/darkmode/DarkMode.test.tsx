import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import DarkMode from './DarkMode';
import { BrowserRouter } from "react-router-dom";
import Navbar from '../navbar/Narbar';

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

test("checks toggle button", () => {
  render(<DarkMode/>);
  const inputElement = screen.getByRole("checkbox") as HTMLInputElement;
  expect(fireEvent.click(inputElement)).toBeTruthy();
});

/**
 * :root {
  --font-color: rgb(253,181,21);
  --background-color: rgb(185,185,186);
  --link-color: rgb(115,165,194);
}
  
[data-theme="dark"] {
  --font-color: rgb(255, 255, 255);
  --background-color: rgb(72, 76, 86);
  --link-color: rgb(242,105,38);
}
 */
test("Check Logo",()=>{
  render(
  <BrowserRouter>
  <Navbar/>    
  </BrowserRouter>
  );
  const logo=screen.getAllByRole("img");
  expect(logo).toBeInTheDocument;
});