import classes from './section_2.module.css'
import { useState } from 'react'

export default function Section2 () {
    return (
        <div className={classes.div}>

            <button><img src={`${import.meta.env.BASE_URL}/photo/sec_2_btn.png`} alt="btn" /></button>
            <h1>Software, Processes, Consulting</h1>
            <p>Pnly by using technology can organisation and processes be scaled.</p>
            <div>
                <div>
                    <div>
                        <div className={classes.translate_div}></div>
                        <h2>Translation</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Laboriosam nostrum, possimus in libero odit quisquam aliquam, 
                            soluta ullam nisi qui unde quidem error aliquid explicabo! 
                            Ea optio dicta officiis exercitationem?
                        </p>
                        <button className={classes.btn_hover}>Read More</button>
                    </div>
                </div>
                <div>
                    <div>
                        <div className={classes.vocabular_div}></div>
                        <h2>Translation</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Laboriosam nostrum, possimus in libero odit quisquam aliquam, 
                            soluta ullam nisi qui unde quidem error aliquid explicabo! 
                            Ea optio dicta officiis exercitationem?
                        </p>
                        <button className={classes.btn_hover}>Read More</button></div>
                </div>
                <div>
                    <div>
                        <div className={classes.write_div}></div>
                        <h2>Translation</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Laboriosam nostrum, possimus in libero odit quisquam aliquam, 
                            soluta ullam nisi qui unde quidem error aliquid explicabo! 
                            Ea optio dicta officiis exercitationem?
                        </p>
                        <button className={classes.btn_hover}>Read More</button></div>
                </div>
            </div>

        </div>
    )
}