import { useState, useRef, useEffect } from 'react'
import classes from './header.module.css'

export default function Header () {

/*////////////////////////////////////////////////////*/
    
    const [width, setWidth] = useState ("-210px")

    const [back, setBack] = useState('none')

    const [inp, setInp] = useState('none')


    function changeMenu () {

        if(width == '-210px')
        {   
           setTimeout(() => setWidth("-16px") , 1)

            
        } else {
            setWidth("-210px")
        }
    }

    function changeBack () {
        (back == 'none') ? setBack('block') : setBack('none') ;
        (inp == 'none') ? setInp('flex') : setInp('none') ;
    }


/*////////////////////////////////////////////////////*/

    return(
        <div className={classes.div}>

            <img src={`${import.meta.env.BASE_URL}photo/logo.png`} alt="img" className={classes.img_logo} />

            <p className={classes.name_site}>KALEIDOSCOPE</p>

            <p className={classes.empty_p}></p>

            <p>SHOP</p>

            <p>REFERENCES</p>

            <p>NEWS</p>

            <p>SERVICE & SUPORT</p>

            <button>Get A Quote!</button>

            <button>Contact Us</button>

            <img src={`${import.meta.env.BASE_URL}/photo/search.png`} alt="srch" className={classes.img_search} onClick={changeBack} />

            <div className={classes.lang_div}>
                <details>
                    <summary><img src={`${import.meta.env.BASE_URL}/photo/internet.png`}  alt="img" className={classes.img_internet}/></summary>
                    <p>eng</p>
                    <p>rus</p>
                </details>
            </div>
            <div className={classes.div_menu}>
                <img src={`${import.meta.env.BASE_URL}/photo/menu.png`} alt="menu" className={classes.menu} onClick={changeMenu}/>
            </div>

            <div className={classes.list_menu} style={{right:width}}>
                <button><img src={`${import.meta.env.BASE_URL}/photo/exit.png`} alt="exit" onClick={changeMenu}/></button>
                <p>SHOP</p>
                <p>REFERENCES</p>
                <p>NEWS</p>
                <p>SERVICE & SUPORT</p>
            </div>
            <div className={classes.overlay} style={{display:back}} onClick={changeBack}></div>
            <div className={classes.serch} style={{display:inp}}><input type="text"/></div>

        </div>
    )
}