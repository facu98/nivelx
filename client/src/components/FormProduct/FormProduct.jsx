import React, {useState} from 'react';
import style from './Product.module.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const data = [
    { id: 1, name: "Lavarropas", description: "0 km", price: 50000, stock: 6, pictures: "", brand: "Drean", model: "R200", valoration: "9", category: "Electro", category2: "Home" },
    { id: 2, name: "Secarropas", description: "0 km", price: 20000, stock: 2, picture: "", brand: "Drean", model: "R200", valoration: "9", category: "Electro", category2: "Home" },
    { id: 3, name: "PlayStation 3", description: "0 km", price: 40000, stock: 4, picture: "", brand: "Sony", model: "Slim", valoration: "9", category: "Game", category2: "Enterteinment" }
]

export default function ProductCRUD({ match }){
    const [input, setInput] = useState({
        name: "",
        brand: "",
        price: "",
        pictures: "",
        category: [],
        stock: "",
        description: "",
        color: [],
    })


    const handleInputChange = (e)=>{
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    };
    const resetForm = ()=> {
        setInput({
            name: "",
            brand: "",
            price: "",
            pictures: "",
            category: [],
            stock: "",
            description: "",
            color: [],
        })
    };

    const handleSubmit = (e)=>{
      var img = input.pictures.replace("C:\\fakepath\\", "http://localhost:3000/assets/img/")
        e.preventDefault();
        const newProduct = {
            name: input.name,
            brand: input.brand,
            price: input.price,
            pictures: img.split(),
            category: input.category.replace(" ", "").split(","),
            stock: true,
            description: input.description,
            quantity: input.stock,
            color: input.color.split(),
        }
        console.log(picture)
        fetch('http://localhost:3001/products', {
            method: 'POST',
            body: JSON.stringify(newProduct),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
        })
        .then(()=>{
            alert(`Se ha creado un nuevo producto exitosamente`)
            resetForm();
        })
        .catch((err)=>{
             console.log(err)
        })
    }
    return (
        <div className={style.formStyle}>
            <h3>Crear Producto</h3>
            <hr/>
            <form onSubmit={handleSubmit} >
                <div className={style.inputContainer}>
                    <label>Nombre del producto</label>
                    <input type="text" name="name" onChange={handleInputChange} value={input.name} required autoFocus />
                </div>
                <div className={style.inputContainer}>
                    <label>Marca del producto</label>
                    <input type='text' name='brand' onChange={handleInputChange} value={input.brand} required autoFocus />
                </div>
                <div className={style.inputContainer}>
                    <label>Precio del producto</label>
                    <input type="number" name="price" onChange={handleInputChange} value={input.price} required autoFocus  />
                </div>
                <div className={style.inputContainer}>
                    <label>Imagen del producto</label>
                    <input type="file" name="pictures" onChange={handleInputChange} value={input.pictures} required autoFocus />
                </div>
                <div className={style.inputContainer}>
                    <label>Categoría</label>
                    <input type='text' name='category' onChange={handleInputChange} value={input.category} required autoFocus />
                </div>
                <div>
                    <label className={style.labelStock}>Stock</label>
                    <input className={style.inputStock} type='number' name='stock' onChange={handleInputChange} value={input.stock} required autoFocus />
                </div>

                <div>
                    <label className={style.labelStock}>Color</label>
                    <input className={style.inputStock} type='text' name='color' onChange={handleInputChange} value={input.color} required autoFocus />
                </div>

                <div className={style.inputContainer}>
                    <label>Descripción del producto</label>
                    <textarea name="description" onChange={handleInputChange} value={input.description} required />
                </div>

                <div className="buttonContainer">
                    <button onClick={resetForm} className="button"> Cancelar </button>
                    <input  type="submit" value="Guardar" className="button"/>
                </div>

            </form>
        </div>
    )
}
