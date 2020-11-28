import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import Categorias from '../Categorias/Categorias';
import GridList from '../GridListProducts/GridListProducts'
import Grid from '@material-ui/core/Grid'
import {useDispatch, useSelector} from "react-redux"
import {getProducts, searchbyCategory, searchbyQuery, productsPage} from "../../actions"


function useQuery() {
	return new URLSearchParams(useLocation().search);
}

export default function ({ match, location }) {

	const state = useSelector(state => state.products)

	const dispatch = useDispatch()

	// const [productos, setProductos] = useState([])
	//const searchProduct = location.search
	const nameCategory = match.params.name
	//const  id  = useParams()
	let query = useQuery().get('name');

	let page = useQuery().get('page')


	useEffect(() => {
		window.scrollTo(0, 0)



		if (query) {
			dispatch(searchbyQuery(query))}

		else if(page){
			dispatch(productsPage(page))
		}

		else if(nameCategory) {
			dispatch(searchbyCategory(nameCategory))
		}

		else if(query === null){
			dispatch(getProducts())

		}
	}, [nameCategory, query, page, dispatch]) // dispatch agregado

	return (
		<Grid container direction='row'>
			{/* <div className='row h-100'> */}
			<Grid item xs={12} sm={2} md={2}>
				<Categorias/>
			</Grid>
			{state.length > 0 ?
			<Grid item xs={12} sm={10} md={10}>
				<GridList productos={state} />
			</Grid> : <div class="mx-auto" ><h3>No se encontraron resultados</h3></div> }

			{/* </div> */}
		</Grid>
	)
}
