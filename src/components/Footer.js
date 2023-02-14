import React from 'react';

// Bootstrap
import { Container } from 'react-bootstrap';

// Style
import style from './Footer.module.css'

const Footer = () => {
     return (
          <div className={style.mianContainer}>
               <Container className={style.container}>
                    <h6 className={style.text}>Hossein Jorfi</h6>
               </Container>
          </div>
     );
};

export default Footer;