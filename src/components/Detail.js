import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

// Context
import { ProductsContext } from '../context/ProductContextProvider';
import { CartContext } from '../context/CartContextProvider';

// Bootstrap
import { Container, Button } from 'react-bootstrap';

// Style
import style from './Detail.module.css'

// Router
import { useNavigate } from 'react-router-dom';

// Icons
import trash from '../icons/trash.png'
import plus from '../icons/plus.png'
import minus from '../icons/minus.png'

const Detail = () => {

     const id = Number(useParams().id)

     const { state, dispath } = useContext(CartContext)

     const products = useContext(ProductsContext)
     const product = products.filter(item => item.id === id)[0]

     const { title, price, description, category, image } = product

     const productInCart = state.selectedItems.find(item => item.id === id)

     const navigate = useNavigate()

     const addHandler = () => {
          dispath({ type: 'ADD_ITEM', payload: product })
     }
     const remove = () => {
          dispath({ type: 'REMOVE_ITEM', payload: product })
     }
     const decrease = () => {
          dispath({ type: 'DECREASE', payload: product })
     }
     const increase = () => {
          dispath({ type: 'INCREASE', payload: product })
     }

     return (
          <Container className={style.main}>
               <div className={style.container}>
                    <img src={image} className={style.image} alt="img" />
                    <div className={style.detailsContainer}>
                         <div>
                              <h5>{title}</h5>
                              <p>{description}</p>
                         </div>
                         <p className={style.category}>{category}</p>
                         <p className={style.price}>${price}</p>
                         <div className={style.mainButtonsContainer}>
                              <Button onClick={() => navigate(-1)} variant="warning" className='me-2'>
                                   {/* <Link className={style.back} to='/products'>Back</Link> */}
                                   Back
                              </Button>

                              {
                                   productInCart ?
                                        <div className={style.buttonsContainer}>
                                             {
                                                  productInCart.quantity === 1 ?
                                                       <Button onClick={remove} className={style.button}>
                                                            <img width='30' src={trash} alt="#" />
                                                       </Button>
                                                       :
                                                       <Button onClick={decrease} className={style.button}>
                                                            <img width='30' src={minus} alt="#" />
                                                       </Button>
                                             }
                                             <span className={style.number}>{productInCart.quantity}</span>
                                             <Button onClick={increase} className={style.button}>
                                                  <img width='30' src={plus} alt="#" />
                                             </Button>
                                        </div>
                                        :
                                        <Button onClick={addHandler}>Add to Card</Button>
                              }
                         </div>
                    </div>
               </div>
          </Container>
     );
};

export default Detail;