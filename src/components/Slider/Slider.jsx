import React from 'react';
import classes from './Slide.module.css'

    const items = Array.from({ length: 10});
    
    export default function InfiniteSlider() {
      return (

        <div className={classes.slider}>

          <div className={classes.slider__track}>

            {items.concat(items).map((item, index) => (

              <div className={classes.slider__item} key={index}>
                <div></div>
                <h2>Aenean in luctus nibh</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Sunt aspernatur dolor 
                    quia velit delectus pariatur doloremque.
                </p>
                <div className={classes.content}>
                    <div></div>
                    <h3>Joseph Milan</h3>
                    <p>Lorem ipsul</p>
                </div>
              </div>

            ))}
          </div>
        </div>
      );
    }
