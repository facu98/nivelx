import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ProductCard from '../ProductCard/ProductCard'
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core'
import { usePaginatedQuery} from 'react-query';
import Grid from '@material-ui/core/Grid'
import {useHistory } from 'react-router-dom'
import { useLocation } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '90%',
    height: '80%',
  },
}));

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

export default function ImageGridList(props) {


  const history = useHistory()
  const classes = useStyles();
  
  let url = window.location.href.split("/");
 

  let page = useQuery().get('page')

  const fetchProducts = (key, page = 0) => fetch('http://localhost:3000/products?page=' + page);

  const {
    resolvedData,
    latestData,
    isFetching,
  } = usePaginatedQuery(['products', page], fetchProducts);

  var list = props.productos.map((prod) => (
   <GridListTile key={prod.id} cols={1}>
         <ProductCard productos={prod}/>
   </GridListTile>
 ))



 const handleNext = () =>{
  //  if(!page && url.includes("edit")) {
  //    history.push('/search?page=2')
  //    console.log(page)
  //  }
  //  else history.push(`/search?page=${parseInt(page) + 1}`);
  if( !page ){
    history.push('/search?page=2')
  }
  else history.push(`/search?page=${parseInt(page) + 1}`)
 }

 const handlePrevious = () => {
history.push(`/search?page=${parseInt(page) - 1}`)
 }

  return (
    <div className={classes.root}>
      <GridList cellHeight={450} className={classes.gridList} cols={4} spacing={4}>
      {props.productos.msg? <><h3>No se encontraron productos para tu búsqueda</h3></>
         : list.slice(0,12)
      }
      </GridList>
      <Grid container justify = "center">
				<Button onClick={handlePrevious}
				variant="outlined"
				disabled={(page === null) || (page == 1)}
				>
					Anterior
				</Button>
				{/*CURRENT PAGE */}
				  <Box name='page' m={2}>
					  { page ? page : 1 }
				  </Box>
				<Button onClick={handleNext}
					variant="outlined"
					disabled={list.length < 12}
				>
					Siguiente
				</Button>
      </Grid>
    </div>
  );
}
