import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom'

class CatIndex extends Component {
  render() {
    // console.log(this.props.cats)
    return (
      <>
        <h2>Find your purrfect match</h2>
        <div>
          {this.props.cats && this.props.cats.map(cat => {
            return(
              <Card key={cat.id}>
                <CardImg top width="100%" src={cat.image} alt="Card image cap" />
                <CardBody>
                  <CardTitle>{cat.name}</CardTitle>
                  <CardSubtitle>{cat.age}</CardSubtitle>
                  <NavLink to={`/catshow/${cat.id}`}>
                    <Button>More info here</Button>
                  </NavLink>
                </CardBody>
              </Card>
            )
          })}
        </div>
      </>
    )
  }
}



export default CatIndex