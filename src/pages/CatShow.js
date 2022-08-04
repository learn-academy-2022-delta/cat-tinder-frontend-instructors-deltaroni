import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';

class CatShow extends Component {
  render() {
    // console.log(this.props.cat)
    let { cat } = this.props
    return (
      <>
        <Card>
          <CardImg top width="100%" src={cat.image} alt="Card image cap" />
          <CardBody>
            <CardTitle>Hi, my name is {cat.name}</CardTitle>
            <CardSubtitle>{cat.age}</CardSubtitle>
            <CardText>{cat.enjoys}</CardText>
          </CardBody>
        </Card>
      </>
    )
  }
}



export default CatShow