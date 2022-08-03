import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatIndex from './CatIndex'
Enzyme.configure({ adapter: new Adapter() })

describe("When the CatIndex renders", () => {
  const props = {
    cats: [
      {
        id: 1,
        name: "Mittens",
        age: 5,
        enjoys: "sunshine and warm spots",
        image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      }
    ]
  }
  let renderedCatIndex;

  beforeEach(() => {
    renderedCatIndex = shallow(<CatIndex {...props} />);
  });
  it("displays a heading", () => {
    const indexHeader = renderedCatIndex.find("h2")
    expect(indexHeader.length).toEqual(1)
    expect(indexHeader.text()).toEqual("Find your purrfect match")
  })
  it("displays a cat", () => {
    const catIndexCard = renderedCatIndex.find("Card")
    expect(catIndexCard.length).toEqual(1)
  })
})