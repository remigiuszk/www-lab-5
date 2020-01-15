// Import statements comes here.
import React, { Component } from 'react';
import { Table, Card, Button, CardTitle, CardText, Row, Col, CardImg } from 'reactstrap';


// You need to extend the functionality of `Component` to the class created.
class Product extends Component {
    constructor() {
        super();

// A state can hold anything dynamically. For example here randomVar is any    variable.
this.state = {
    products: [{ "name": "Horizon Zero Dawn", "img": "1.jpg", "id": 1, "price":   "69.99zl", "rating": "4.6" },
    { "name": "Bloodborne", "img": "2.jpg", "id": 2, "price": "59,99zl",   "rating": "4.8" },
    { "name": "God of War", "img": "3.jpg", "id": 3, "price": "69,99zl",   "rating": "4.8" },
    { "name": "Sekiro", "img": "4.jpg", "id": 4, "price": "169,99zl",   "rating": "4.9" },
    { "name": "Wiedzmin 3", "img": "5.jpg", "id": 5, "price": "89zl",   "rating": "4.7" },
    ],
    compare: {
      // The arr variable stores the id of selected components
        arr: []
    }
    
}
this.handleClick = this.handleClick.bind(this)
    }
    // e is the event. For example here the event is `click`. 
// This variable has some information like: name, id etc. of the component which fired it.
handleClick(e) {
    // Creating a duplicate of arr variable of state
    let temparr = this.state.compare.arr;
    // e.target.id returns the id of the button which fired the event.
    //This helps us in identifying the component
    let id = temparr.indexOf(e.target.id)
    //Checking if the component is already present in the arr variable or    not
    if (id != -1) {
      //If present then remove it
        temparr.splice(id, 1)
    }
    else {
      //else push the id to the temparr
        temparr.push(e.target.id)
    }
    //setState function helps in changing the state. It can't be done    manually
    this.setState({ compare: { arr: temparr } });
}
// This function renders a component
    render() {
        let temparr = this.state.compare.arr
        let temp = []
        let Compare;
        for (var i = 0; i < temparr.length; i++) {
            let x = this.state.products.find(prod => prod.id == temparr[i]);
            temp.push(x)
        }

        // Whatever is returned is rendered
        return (
            <div>
                <Row>
                    {this.state.products.map((product, index) => (
                        <Col key={product.id}>
                            <Card body outline engine="primary">
                                <img height="350px" width="240px" src={require("../assets/images/" + product.img)} alt={product.name} />
                                <CardTitle>{product.name}</CardTitle>
                                <Button type="button" id={product.id} onClick={this.handleClick}>{(this.state.compare.arr.indexOf(product.id) < 0) ? "Compare" : "Remove"}</Button>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Table>
                    <thead>
                        <th>Nazwa gry</th>
                        <th>Cena(niepromocyjna)</th>
                        <th>Ocena</th>
                    </thead>
                    {temp.map((product) => (
                        <tbody>
                            <tr>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.rating}</td>
                            </tr>

                        </tbody>

                    ))}
                </Table>

            </div >
        )
    }
}

export default Product;