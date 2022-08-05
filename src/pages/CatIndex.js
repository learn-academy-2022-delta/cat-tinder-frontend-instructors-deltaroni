import React, { Component } from 'react'
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom'

class CatIndex extends Component {
  render() {
    // console.log(this.props.cats)
    return (
      <>
        <div className="page-body">
          <h2 className='center-heading'>Find your purrfect match</h2>
          <div className="index-cards">
            <Row>
              {this.props.cats && this.props.cats.map(cat => {
                return(
                  <Col sm={4}>
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
                  </Col>
                )
              })}
            </Row>
          </div>
        </div>
      </>
    )
  }
}



export default CatIndex