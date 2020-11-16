import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from "react-router-dom";
import Categorias from '../Categorias/Categorias'
import ProductsCards from '../ProductCard/ProductCard'
import GridList from '../GridListProducts/GridListProducts'
import Grid from '@material-ui/core/Grid'
import {useDispatch, useSelector} from "react-redux"
import {getProducts, searchbyCategory, searchbyQuery, getCategories} from "../../actions"
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core'
import { usePaginatedQuery} from 'react-query';

function useQuery() {
	return new URLSearchParams(useLocation().search);
}


export default function ({ match, location }) {

	const state = useSelector(state => state.products)
	const categories = useSelector(state => state.categories)
	const dispatch = useDispatch()

	const [productos, setProductos] = useState([])
	//const searchProduct = location.search
	const nameCategory = match.params.name
	//const  id  = useParams()
	let query = useQuery().get('name');


	useEffect(() => {


		dispatch(getCategories())

		if(nameCategory && nameCategory !== "search") {
			dispatch(searchbyCategory(nameCategory))
		}
		else if (query) {
			dispatch(searchbyQuery(query))

		}
		else if(query === null){
			dispatch(getProducts())

		}
	}, [])

	return (
		<Grid container direction='row'>
			{/* <div className='row h-100'> */}
			<Grid item xs={12} sm={2} md={2}>
				<Categorias categories={categories}/>
			</Grid>
			{state.length > 0 ?
			<Grid item xs={12} sm={10} md={10}>
				<GridList productos={state} />
			</Grid> : <div class="mx-auto" ><h3>No se encontraron resultados</h3></div> }

			{/* </div> */}
		</Grid>
	)
}
