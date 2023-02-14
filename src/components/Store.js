import React, { useContext } from 'react';

// Context
import { ProductsContext } from '../context/ProductContextProvider';

// Components
import Product from './Product';
import Loading from './Loading';

// Bootstrap
import { Container, Row } from 'react-bootstrap';

const Store = () => {

     const products = useContext(ProductsContext)

     return (
          <Container>
               <Row>
                    {
                         products.length ?
                              products.map(item => {
                                   return <Product key={item.id} data={item} />
                              })
                              : <Loading />
                    }
               </Row>
          </Container>
     );
};

export default Store;