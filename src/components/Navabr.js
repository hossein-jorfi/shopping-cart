import React, { useContext } from 'react';

// Bootstrap
import { Container } from 'react-bootstrap';

// Style
import style from './Navabr.module.css';

// Context
import { CartContext } from '../context/CartContextProvider'

// Router
import { Link } from 'react-router-dom';

const Navabr = () => {

     const number = useContext(CartContext).state.itemsCounter

     return (
          <div className={style.main}>
               <Container>
                    <div className={style.container}>
                         <h3><Link to='/'>Products</Link></h3>
                         <div className={style.cartContainer}>
                              <Link to='/cart'>
                                   <span className={style.number}>{number}</span>
                                   <img className={style.cart} alt='#' width='40' src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/48/null/external-trolley-ecommerce-anggara-line-anggara-putra.png" />
                              </Link>
                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default Navabr;