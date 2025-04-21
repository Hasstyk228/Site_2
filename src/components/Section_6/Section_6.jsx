import React from 'react';
import { useRef, useState } from 'react'
import classes from './Section_6.module.css'

export default function Section6 () {

  const items = Array.from({ length: 6 }, (_, i) => i + 1);
  const [translate, setTranslate] = useState(0);
  const sliderRef = useRef();
  const itemWidth = 261;
  const totalItems = items.length;
   const images = [
    `${import.meta.env.BASE_URL}/photo/photo/1.jpg`,
    `${import.meta.env.BASE_URL}/photo/photo/2.jpg`,
    `${import.meta.env.BASE_URL}/photo/photo/3.jpg`,
    `${import.meta.env.BASE_URL}/photo/photo/4.jpg`,
    `${import.meta.env.BASE_URL}/photo/photo/5.jpg`,
    `${import.meta.env.BASE_URL}/photo/photo/6.jpg`,
   ];

   const titles = [
    'Kaleidoscope @ Innovate Expo 2025',
    'Breaking Through FutureTech Summit',
    'Kaleidoscope Joins Global Creators Fest',
    'Live Design Horizons 2025',
    'AI Meets Art Kaleidoscope Lab',
    'Kaleidoscope NextGen Vision Week',
  ];

/*/////////////////////////////////////////////////////*/

    function changeTranslateNext() {
        let newTranslate = translate - itemWidth;
      
        if (Math.abs(newTranslate) >= totalItems * itemWidth) {
          // Двигаем до клонированного конца, а потом телепортим
          setTranslate(newTranslate);
      
          setTimeout(() => {
            if (sliderRef.current) {
              sliderRef.current.style.transition = 'none';
              setTranslate(0);
      
              // без setTranslate DOM не обновится сразу, нужно напрямую
              sliderRef.current.style.transform = `translateX(0px)`;
      
              // Восстановим анимацию в следующем кадре
              requestAnimationFrame(() => {
                sliderRef.current.style.transition = 'transform 0.3s ease';
              });
            }
          }, 300); // Длительность transition должна совпадать
        } else {
          setTranslate(newTranslate);
        }
      }

/*/////////////////////////////////////////////////////*/    

  function changeTranslatePrev() {
    // Мы находимся в точке translate, например -6*259
    let newTranslate = translate + itemWidth;
  
    if (translate === 0) {
      // Телепортируемся в конец (без анимации)
      if (sliderRef.current) {
        const jumpTo = -totalItems * itemWidth;
        sliderRef.current.style.transition = 'none';
        sliderRef.current.style.transform = `translateX(${jumpTo}px)`;
  
        setTranslate(jumpTo);
  
        // ждём следующий кадр, чтобы двинуться назад с анимацией
        requestAnimationFrame(() => {
          sliderRef.current.style.transition = 'transform 0.3s ease';
  
          const afterJump = jumpTo + itemWidth; // ← идём влево
          setTranslate(afterJump);
        });
      }
    } else {
      setTranslate(newTranslate);
    }
  }

/*/////////////////////////////////////////////////////*/    

    React.useEffect(() => {
        if (sliderRef.current) {
          sliderRef.current.style.transform = `translateX(${translate}px)`;
        }
      }, [translate]);
      
/*/////////////////////////////////////////////////////*/    

  return(
    <div className={classes.div}>
      <div>
        <div>
          <h1>Kalaidoscope In The News</h1>
          <button onClick={changeTranslatePrev} ></button>
          <button onClick={changeTranslateNext} ></button>
        </div>
        <div className={classes.slider} ref={sliderRef}>
          {
            [...items, ...items].map((item, index) => 
              {
                const bgIndex = index % images.length;

                return(
                  <div key={index}>
                    <div className={classes.imageBlock} style={{backgroundImage:`url(${images[bgIndex]})`,}}></div>
                    <h3>{titles[bgIndex]}</h3>
                    <p>Time for a coffe? Time for a conversation! The tcworld 2025 again offers</p>
                    <button>Read More</button>
                  </div>
                      )
                    
              }
              )
          }
        </div>
      </div>
    </div>
  )
}