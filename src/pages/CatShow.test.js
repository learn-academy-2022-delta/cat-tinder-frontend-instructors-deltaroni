import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatShow from './CatShow'
Enzyme.configure({ adapter: new Adapter() })

describe("When the CatShow renders", () => {
  const cat = {
        id: 1,
        name: "Mittens",
        age: 5,
        enjoys: "sunshine and warm spots",
        image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  }
  let renderedCatShow;

  beforeEach(() => {
    renderedCatShow = shallow(<CatShow cat={cat} />);
  });
  it("displays a profile for the cat", () => {
    const catShowCard = renderedCatShow.find("Card")
    expect(catShowCard.length).toEqual(1)
  })
})