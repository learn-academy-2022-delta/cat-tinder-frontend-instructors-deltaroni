import React, { Component } from 'react'
import './App.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import CatEdit from "./pages/CatEdit"
import CatIndex from "./pages/CatIndex"
import CatNew from "./pages/CatNew"
import CatShow from "./pages/CatShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import {
  BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: []
    }
  }

  componentDidMount() {
    //to get cat info immediately when app renders
    this.readCat()
  }

  readCat = () => {
    fetch("http://localhost:3000/cats")  //the endpoint
    .then(response => response.json())
    // takes the array of cats returned and sets it to state  (payload = array of cats)
    .then(payload => this.setState({cats: payload }))
    // handle errors if promise is rejected
    .catch(errors => console.log("Cat read errors: ", errors))
  }


  createNewCat = (theNewCatObject) =>{
    fetch("http://localhost:3000/cats", {
      body: JSON.stringify(theNewCatObject),
      headers: {
        "Content-Type": "application/json"
      },
      method:"POST" 
  })
  .then(response => response.json())
  // since no payload, and state needs to be updated with new cat, refresh state by calling readCat()
  .then(() => this.readCat())
  .catch(errors => console.log("Cat new errors: ", errors))
  }


  updateCat = (cat, id) => {
    fetch(`http://localhost:3000/cats/${id}`, {
      body: JSON.stringify(cat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => response.json())
    .then(() => this.readCat())
    .catch(errors => console.log("Cat update errors: ", errors))
  }

  deleteCat = (id) => {
    console.log("deleted", id)
  }

  render() {
    console.log('appjs state: ', this.state)
    return(
      // Wrap entire return in <Router>
      <Router>
        {/* Header and footer and anything else you want on every page should be inside the Router but outside the Switch */}
        <Header />
        {/* Use Switch to be able to switch between pages, so wrap pages only in Switch */}
        <Switch>
          {/* Route helps us swap out view and we include a path and a component */}
          <Route exact path="/" component={Home}  />
          <Route path="/catedit/:id" render={(props) => {
            let id = +props.match.params.id
            let cat = this.state.cats.find(catObject => catObject.id === id)
            return(
              <CatEdit 
                cat={cat}
                updateCat={this.updateCat}
              />
            ) 
          }} />
          <Route path="/catindex" render={() => <CatIndex cats={this.state.cats} />} />
          <Route path="/catnew"
                 render={() => {
                  return <CatNew createNewCat={this.createNewCat}/>
                 }} />
          <Route path="/catshow/:id" render={(props) => {
            let id = +props.match.params.id
            let cat = this.state.cats.find(catObject => catObject.id === id)
            return(
              <CatShow 
                cat={cat}
                deleteCat={this.deleteCat}
              />
            )
          }} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
     
    )
  }
}

export default App