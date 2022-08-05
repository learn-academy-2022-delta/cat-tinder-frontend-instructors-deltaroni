import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button} from 'reactstrap';
import { NavLink } from 'react-router-dom'

class CatShow extends Component {
  render() {
    // console.log(this.props.cat)
    let { cat } = this.props
    return (
      <>
        <Card className='card'>
          <CardImg top width="100%" src={cat.image} alt="Card image cap" />
          <CardBody>
            <CardTitle>Hi, my name is {cat.name}</CardTitle>
            <CardSubtitle>{cat.age}</CardSubtitle>
            <CardText>{cat.enjoys}</CardText>
            <NavLink to={`/catedit/${this.props.cat.id}`}>
              <Button>Update Cat</Button>
            </NavLink>
            <Button onClick={() => this.props.deleteCat(cat.id)}>Delete Cat</Button>
          </CardBody>
        </Card>
      </>
    )
  }
}



export default CatShow