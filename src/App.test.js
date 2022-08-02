// Imports React into our test file.
import React from "react";

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from "enzyme";

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from "enzyme-adapter-react-16";

// Imports in the component we are going to be testing.
import App from "./App";

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() });

describe("When App renders", () => {
  let renderedApp;

  beforeEach(() => {
    renderedApp = shallow(<App />);
  });

  it("displays a Header and a Footer", () => {
    //set a variable to hold a component call
    // use enzyme .find to find the selector and set to a variable
    const renderedHeader = renderedApp.find("Header");
    // test that the selector is a certain length
    expect(renderedHeader.length).toEqual(1);

    const renderedFooter = renderedApp.find("Footer");
    expect(renderedFooter.length).toEqual(1);
  });

  it("provides a route of '/' to the home component", () => {
    const renderedHomeRoute = renderedApp.find("[path='/']");
    expect(renderedHomeRoute.length).toEqual(1);
  });
});
