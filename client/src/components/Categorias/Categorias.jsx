
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation, Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import { Tooltip} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

export default function (props) {
	// const [categorias, setCategorias] = useState()
	const url = useLocation();


console.log(url.pathname)
	return (
		<div className='mr-3'>
			<h2 className="text-center mt-3">Categorias</h2>
			<hr />
			<ul className='list-group'>
				{props.categories &&
					props.categories.map((c) => {

						if (url.pathname === '/admin/editCategory') {
							return (
								<div className='botones'>
							<NavLink
								to={`/${c.id}`}
								key={c.id}
								className='list-group-item list-group-item-action'
							>
								{c.name}
							</NavLink>
							<>
								<Link to={`/admin/editCategory/${c.id}`}>
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
