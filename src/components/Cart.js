import React, { useContext } from 'react';
import CartItem from './CartItem';

// Bootstrap
import { Container, Card, Button, Alert } from 'react-bootstrap';

// Style
import style from './Cart.module.css'

// Context
import { CartContext } from '../context/CartContextProvider'

// Router
import { Link } from 'react-router-dom';

const Cart = () => {

     const { state, dispath } = useContext(CartContext)

     const pay = () => {
          dispath({ type: 'CHECKOUT' })
     }

     const clear = () => {
          dispath({ type: 'CLEAR' })
     }

     return (

          <Container className={style.container}>
               {
                    state.selectedItems.length ?
                         <Card>
                              <Card.Body>

                                   <>
                                        <div>
                                             <p><span className={style.text}>Total Items</span>: {state.itemsCounter}</p>
                                             <p><span className={style.text}>Total Paymets</span>: ${state.total.toFixed(2)}</p>
                                        </div>
                                        <div className={style.buttonsContainer}>
                                             <Button onClick={pay} className={style.button2}>Pay</Button>
                                             <Button onClick={clear} variant="secondary" className={style.button}>Clear</Button>
                                        </div>
                                   </>


                              </Card.Body>
                         </Card>
                         :
                         state.checkOut ?
                         <Alert variant='success'>
                              <h5>Payed successfully, <Link to='/'>Back to shop</Link></h5>
                         </Alert>
                         :
                         <Alert variant='primary'>
                              <h5>No product here <Link to='/'>Click Here</Link> to shop</h5>
                         </Alert>
               }
               <br />
               {
                    state.selectedItems.map(item => <CartItem key={item.id} data={item} />)
               }
          </Container>
     );
};

export default Cart;