import React, { useContext } from 'react';

// Bootstrap
import { Card, Button } from 'react-bootstrap';

// Style
import style from './CartItem.module.css'

// Helper 
import { shorter } from '../helpers/functions'

// Icons
import trash from '../icons/trash.png'
import plus from '../icons/plus.png'
import minus from '../icons/minus.png'

// Context
import { CartContext } from '../context/CartContextProvider';

// Router 
import { Link } from 'react-router-dom';

const CartItem = ({ data }) => {

     const { image, title, price, quantity, id } = data

     const { dispath } = useContext(CartContext)


     const increase = () => {
          dispath({ type: 'INCREASE', payload: data })
     }

     const decrease = () => {
          dispath({ type: 'DECREASE', payload: data })
     }

     const remove = () => {
          dispath({ type: 'REMOVE_ITEM', payload: data })
     }

     return (
          <Card className={style.container}>
               <Card.Body className={style.helper}>
                    {/* <div className={style.mainContainer}> */}
                    <Link to={`/products/${id}`}>
                         <img src={image} className={style.image} alt="#" />
                    </Link>
                    <div>
                         <h6>{shorter(title)}</h6>
                         <p className={style.price}>${price}</p>
                    </div>
                    <div className={style.buttonsContainer}>
                         {
                              quantity === 1 ?
                                   <Button onClick={remove} className={style.button}>
                                        <img src={trash} width='30' alt="#" />
                                   </Button>
                                   :
                                   <Button onClick={decrease} className={style.button}>
                                        <img src={minus} width='30' alt="#" />
                                   </Button>
                         }
                         <span className={style.number}>
                              {quantity}
                         </span>
                         <Button onClick={increase} className={style.button}>
                              <img src={plus} width='30' alt="#" />
                         </Button>
                    </div>
                    {/* </div> */}
               </Card.Body>
          </Card>
     );
};

export default CartItem;