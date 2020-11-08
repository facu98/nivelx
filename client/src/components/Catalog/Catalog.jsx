import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from "react-router-dom";
import Categorias from '../Categorias/Categorias'
import ProductsCards from '../ProductCard/ProductCard'
import GridList from '../GridListProducts/GridListProducts'
import Grid from '@material-ui/core/Grid'


function useQuery() {
	return new URLSearchParams(useLocation().search);
}

export default function ({ match, location }) {
	const [productos, setProductos] = useState([])
	//const searchProduct = location.search
	const nameCategory = match.params.name
	//const  id  = useParams()
	let query = useQuery().get('name');



	useEffect(() => {
		if(nameCategory && nameCategory !== "search") {
			fetch(`http://localhost:3001/category/${nameCategory}`)
			.then((res) => res.json())
			.then((data) => {
				setProductos(data)
				console.log(data)
			})
		}
		else if (query) {

			fetch(`http://localhost:3001/products/search?name=${query}`)
				.then((res) => res.json())
				.then((data) => setProductos(data))
		}
		else if(query === null){
			fetch('http://localhost:3001/products')
			.then((res) => res.json())
			.then((data) => {
				setProductos(data)
				console.log(data)
			})
		}
		}, [])

	return (
		<Grid container direction='row'>
			{/* <div className='row h-100'> */}
			<Grid item xs={12} sm={2} md={2}>
				<Categorias />
			</Grid>
			{productos.length > 0 ?
			<Grid item xs={12} sm={10} md={10}>
				<GridList productos={productos} />
			</Grid> : <div><h3>No se encontraron resultados</h3></div> }

			{/* </div> */}
		</Grid>
	)
}
