import classes from './Section_7.module.css'

export default function Section7 () {
    return (
        <div className={classes.div}>
            <div className={classes.form_div}>
                <h1>Call Me Back</h1>
                <input type="text" placeholder='Full Name*'/>
                <input type="text" placeholder='Email*'/>
                <input type="text" placeholder='Phone No*'/>
                <input type="text" placeholder='Company*'/>
                <input type="textarea" placeholder="Message*" style={{resize:'both' }} />
                <div className={classes.content}>
                    <input type="checkbox" />
                    <p>I hereby deslare that i accept the data protection regulation</p>
                </div>
                <button>Send</button>
            </div>
        </div>
    )
}