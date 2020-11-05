import React from 'react';
import style from './Product.module.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const data = [
    { id: 1, name: "Lavarropas", description: "0 km", price: 50000, stock: 6, picture: "", brand: "Drean", model: "R200", valoration: "9", category: "Electro", category2: "Home" },
    { id: 2, name: "Secarropas", description: "0 km", price: 20000, stock: 2, picture: "", brand: "Drean", model: "R200", valoration: "9", category: "Electro", category2: "Home" },
    { id: 3, name: "PlayStation 3", description: "0 km", price: 40000, stock: 4, picture: "", brand: "Sony", model: "Slim", valoration: "9", category: "Game", category2: "Enterteinment" }
]

export default class ProductCRUD extends React.Component {
    state = {
        data: data,
        form: {
            id: "",
            name: "",
            description: "",
            price: "",
            stock: "",
            picture: "",
            brand: "",
            model: "",
            valoration: "",
            category: "",
            category2: "",
        },
        createOpen: false,
        editOpen: false,
    }
    handleChange = e => {
        this.setState({
            form: {
                ...this.setState.form,
                [e.target.name]: e.target.value,
            }
        })
    }

    render() {
        return (
            <>
            <Form className={style.form}>
                <h2 className={style.title} >Agregar producto</h2>
                <Form.Group className={style.formChild} controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre del producto</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" name="name"/>
                </Form.Group>
                <Form.Group className={style.formChild} controlId="exampleForm.ControlInput2">
                    <Form.Label>Marca del producto</Form.Label>
                    <Form.Control type="text" placeholder="Marca" name="brand"/>
                </Form.Group>
                <Form.Group className={style.formChild} controlId="exampleForm.ControlInput3">
                    <Form.Label>Precio:</Form.Label>
                    <Form.Control type="number" placeholder="Pesos" name="price"/>
                </Form.Group>
                <label className={style.marginLeft}>Seleccionar imagen</label>
                <Form.File
                    id="custom-file"
                    name="picture"
                    label=""
                    custom
                />
                <Form.Group controlId="exampleForm.ControlSelect1" className={style.formChild} >
                    <Form.Label>Seleccionar categoría</Form.Label>
                    <Form.Control as="select" name="category">
                    <option>Electrodomésticos</option>
                    <option>Entretenimiento</option>
                    <option>Televisores</option>
                    <option>Celulares</option>
                    <option>PC's</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2" className={style.formChild} >
                    <Form.Label>Stock</Form.Label>
                    <Form.Control className={style.stock} type="number" placeholder="Stock" name="stock"/>
                </Form.Group>
                <Form.Group className={style.formChild} controlId="exampleForm.ControlTextarea1">
                    <Form.Label className={style.titulo}>Descripción</Form.Label>
                    <Form.Control className={style.textarea} as="textarea" rows={6} columns={14} placeholder="Descripción" />
                </Form.Group>
                <div className={style.buttons}>
                    <Button className={style.buttonSuccess} variant="success">Crear</Button>{' '}
                    <Button className={style.buttonCancel} variant="danger">Cancelar</Button>{" "}
                </div>
            </Form>
            </>
        )
    }
}

