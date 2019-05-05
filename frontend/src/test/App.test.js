import React from "react";
import { render } from "react-testing-library";
import App from "../components/App";

describe("MyComponent", () => {
  it("should render without crashing", () => {
    const { form } = render(<App />);
    expect(form).toBeInTheDocument();
  });
});
