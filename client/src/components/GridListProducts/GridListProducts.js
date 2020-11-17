import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ProductCard from '../ProductCard/ProductCard'
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core'
import { usePaginatedQuery} from 'react-query';
import Grid from '@material-ui/core/Grid'

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

export default function ImageGridList(props) {
  const classes = useStyles();
  // console.log(props.productos)

  const [page, setPage] = React.useState(0);

  const fetchProducts = (key, page = 0) => fetch('http://localhost:3000/products?page=' + page);

  const {
    resolvedData,
    latestData,
    isFetching,
  } = usePaginatedQuery(['products', page], fetchProducts);

  return (
    <div className={classes.root}>
      <GridList cellHeight={450} className={classes.gridList} cols={4} spacing={4}>
      {props.productos.msg? <><h3>No se encontraron productos para tu búsqueda</h3></>
         :props.productos.map((prod) => (
          <GridListTile key={prod.id} cols={1}>
                <ProductCard productos={prod}/>
          </GridListTile>
        ))
      }
      </GridList>
      <Grid container justify = "center">
				<Button onClick={() => setPage(old => Math.max(old - 1, 0))}
				variant="outlined"
				disabled={page === 0}
				>
					Anterior
				</Button>
				{/*CURRENT PAGE */}
				  <Box name='page' m={2}>
					  { page + 1 } 
				  </Box>
				<Button onClick={() => setPage(old => (!latestData || !latestData.hasMore ? old : old + 1))}
					variant="outlined"
					disabled={!latestData || !latestData.hasMore}
				>
					Siguiente
				</Button>
      </Grid>
    </div>
  );
}
