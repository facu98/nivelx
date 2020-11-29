import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux"
import { useHistory } from 'react-router-dom';
import { purchasedProducts } from '../../actions'


export default function Admin(props) {
	
const user = useSelector(state => state.user);
const purchased = useSelector(state => state.purchased);
const history = useHistory();
const [show, setShow] = useState(false)



const handleShow = (id) => {
	if(show == id){
		setShow(false)
	}
	else setShow(id)
}

const dispatch = useDispatch()

	useEffect(() => {
		dispatch(purchasedProducts(user.id))
	}, [])

	return (
		<div>
		{purchased && purchased.length === 0
			? null
			: purchased.map((purchased) => (
					<div className='card m-auto border-0' key={purchased.product_id}>
						<div className='row'>
						<div className='col-md-4'>
							<img
								src={purchased.product_img[0]}
										className='card-img'
										alt='...'
							/>
								</div>

							<div className='col-md-5'>
								<div className='card-body'>
									<h5 className='card-title'>
										{purchased.product_name}
									</h5>
								</div>
							</div>
							<div className='col-md-3 d-flex align-items-center justify-content-center'>

					{purchased.review	?	<button className="btn btn-primary"
					onClick={() => {handleShow(purchased.product_id)}}>Editar reseña</button> :
							<button
									className="btn btn-primary"
									onClick={() => {handleShow(purchased.product_id)}}
								>
									Calificar

								</button>}
							</div>
						</div>
						{(show && show == purchased.product_id) && <ReviewButton product = {purchased}/>}
					</div>
				))}
		</div>
	)
}
