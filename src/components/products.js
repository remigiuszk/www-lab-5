import React, { Component } from 'react';
import { Table, Card, Button, CardTitle, CardText, Row, Col, CardImg } from 'reactstrap';

class Product extends Component {
    constructor() {
        super();

this.state = {
    products: [{ "name": "Horizon Zero Dawn", "img": "1.jpg", "id": 1, "price":   "69.99zl", "rating": "4.6" },
    { "name": "Bloodborne", "img": "2.jpg", "id": 2, "price": "59,99zl",   "rating": "4.8" },
    { "name": "God of War", "img": "3.jpg", "id": 3, "price": "69,99zl",   "rating": "4.8" },
    { "name": "Sekiro", "img": "4.jpg", "id": 4, "price": "169,99zl",   "rating": "4.9" },
    { "name": "Wiedzmin 3", "img": "5.jpg", "id": 5, "price": "89zl",   "rating": "4.7" },
    ],
    compare: {
      // tablica przechowujaca id componentow
        arr: []
    }
    
}
this.handleClick = this.handleClick.bind(this)
    }
    // e = event
handleClick(e) {
    // kopiujemy zawartosc tablicy arr to nowej zmiennej
    let temparr = this.state.compare.arr;
    // e.target.id zwraca id buttona przypisanego do danego obiektu co pozwala nam go zidentyfikowac
    let id = temparr.indexOf(e.target.id)
    //walidacja czy dany produkt jest juz na liscie do porownywania
    if (id != -1) {
        temparr.splice(id, 1)
    }
    else {
        temparr.push(e.target.id)
    }
    this.setState({ compare: { arr: temparr } });
}
    render() {
        let temparr = this.state.compare.arr
        let temp = []
        let Compare;
        for (var i = 0; i < temparr.length; i++) {
            let x = this.state.products.find(prod => prod.id == temparr[i]);
            temp.push(x)
        }

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