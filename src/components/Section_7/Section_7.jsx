import { useEffect, useRef, useState } from 'react'
import classes from './Section_7.module.css'

export default function Section7 () {

    const [values,setValue] = useState({})
    const [errors,setErrors] = useState({})


    function handlechange (e) {
        const {name,value} = e.target;

        setValue(prev => ({
            ...prev,
            [name]:value,
        })) ;

        setErrors(prev => ({
            ...prev,
            [name]:value.trim() === '',
        }))
    }


    return (
        <div className={classes.div}>
            <div className={classes.form_div}>
                <h1>Call Me Back</h1>
                <input  
                    name="fullName"
                    type="text" 
                    value={values.fullName || ''}
                    placeholder='Full Name*' 
                    onChange={handlechange}
                    style={{
                        borderColor:errors.fullName ? 'red' : undefined,
                    }}
                />

                <input 
                    type="email" 
                    placeholder='Email*'
                    name="email"
                    value={values.email || ''}
                    onChange={handlechange}
                    style={{
                        borderColor:errors.email ? 'red' : undefined,
                    }}
                />

                <input 
                    type="phone" 
                    placeholder='Phone No*'
                    name="number"
                    value={values.number || ''}
                    onChange={handlechange}
                    style={{
                        borderColor:errors.number ? 'red' : undefined,
                    }}
                />

                <input 
                    type="text" 
                    placeholder='Company*'
                    name="company"
                    value={values.company || ''}
                    onChange={handlechange}
                    style={{
                        borderColor:errors.company ? 'red' : undefined,
                    }}
                />

                <input type="textarea" placeholder="Message*" style={{resize:'both' }} />
                <div className={classes.content}>
                    <input type="checkbox" />
                    <p>I hereby deslare that i accept the data protection regulation</p>
                </div>
                <button type='submit'>Send</button>
            </div>
        </div>
    )
}