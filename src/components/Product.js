import React, { useContext } from 'react';

// Functions
import { shorter } from '../helpers/functions';

// Bootstrap
import { Col, Card, Button } from 'react-bootstrap';

// Style
import style from './Product.module.css'

// Router
import { Link } from 'react-router-dom';

// icons
import trash from '../icons/trash.png'
import plus from '../icons/plus.png'
import minus from '../icons/minus.png'
import star from '../icons/star.png'

// Context
import { CartContext } from '../context/CartContextProvider';

const Product = props => {

     const { id, title, price, image, rating: { rate } } = props.data

     const { state, dispath } = useContext(CartContext)

     const selectedItems = state.selectedItems;
     const itemInContext = selectedItems.find(item => item.id === id)

     const addHandler = () => {
          dispath({ type: 'ADD_ITEM', payload: { ...props.data } })
     }
     const removeHandler = () => {
          dispath({ type: 'REMOVE_ITEM', payload: { ...props.data } })
     }
     const increaseHandler = () => {
          dispath({ type: 'INCREASE', payload: { ...props.data } })
     }
     const decreaseHandler = () => {
          dispath({ type: 'DECREASE', payload: { ...props.data } })
          console.log(state);
     }

     return (
          <Col className='mt-3' xs={12} sm={6} md={4} xl={3}>
               <Card>
                    <Card.Body style={{ 'textAlign': 'center' }}>
                         <div>
                              <Link to={`/products/${id}`}>
                                   <div className={style.imageContainer}>
                                        <img className={style.image} src={image} alt="" />
                                   </div>
                              </Link>
                         </div>
                         <Card.Title>{shorter(title)}</Card.Title>
                         <div className={style.buttonsContainer}>
                              <p className={style.price}>${price}</p>
                              <div className={style.rateContainer}>
                                   <img src={star} alt="#" />
                                   <p>{rate}</p>
                              </div>
                         </div>
                         <div className={style.buttonsContainer}>

                              {
                                   itemInContext ?
                                        <div className={style.handlersContainer}>
                                             {
                                                  itemInContext.quantity === 1 ?
                                                       <Button onClick={removeHandler} className={style.button} ><img src={trash} width='30' alt="img" /></Button>
                                                       :
                                                       <Button onClick={decreaseHandler} className={style.button} >
                                                            <img src={minus} width='30' alt="img" />
                                                       </Button>
                                             }
                                             <span className={style.number}>{itemInContext.quantity}</span>
                                             <Button onClick={increaseHandler} className={style.button} >
                                                  <img src={plus} width='30' alt="img" />
                                             </Button>
                                        </div>
                                        :
                                        <Button onClick={addHandler}>Add to card</Button>
                              }


                              <Link to={`/products/${id}`} className={style.detail} href="/">Detail</Link>
                         </div>
                    </Card.Body>
               </Card>
          </Col>
     );
};

export default Product;

// { id, title, price, description, category, image, rating: { rate, count } }