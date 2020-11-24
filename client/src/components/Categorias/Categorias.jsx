
import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation, Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import { Tooltip} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import {useDispatch, useSelector} from "react-redux"
import {getCategories} from "../../actions"

export default function () {
	// const [categorias, setCategorias] = useState()
	const dispatch = useDispatch()
	const url = useLocation();
	const categories = useSelector(state => state.categories)


	useEffect(() => {
		dispatch(getCategories())
	},[])



	return (
		<div className='mr-3'>
			<h2 className="text-center mt-3">Categorias</h2>
			<hr />
			<ul className='list-group'>
				{categories &&
					categories.map((c) => {
						if (url.pathname == '/admin/editCategory') {
							return (
								<div className='botones'>
							<NavLink
								to={`/${c.name}`}
								key={c.id}
								className='list-group-item list-group-item-action'
							>
								{c.name}
							</NavLink>
							<>
								<Link to={`/admin/editCategory/${c.name}`}>
								<IconButton>
									<Tooltip title='Editar categoria'>
									<EditIcon color='primary' />
									</Tooltip>
								</IconButton>
								</Link>


							</>
						</div>
							)
						}
						else {
							return (
							<div className='botones'>
							<NavLink
								to={`/${c.name}`}
								key={c.id}
								className='list-group-item list-group-item-action'
							>
								{c.name}
							</NavLink>
							</div>
							)
						}
					}
					)}
			</ul>
		</div>
	)
}
