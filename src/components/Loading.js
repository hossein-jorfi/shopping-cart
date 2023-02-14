import React from 'react';

import style from './Loading.module.css'

const Loading = () => {
     return (
          <div className={style.center}>
               <div className={style.wave}></div>
               <div className={style.wave}></div>
               <div className={style.wave}></div>
               <div className={style.wave}></div>
               <div className={style.wave}></div>
               <div className={style.wave}></div>
               <div className={style.wave}></div>
               <div className={style.wave}></div>
               <div className={style.wave}></div>
               <div className={style.wave}></div>
          </div>
     );
};

export default Loading;