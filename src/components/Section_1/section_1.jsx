import classes from './section_1.module.css'

export default function Section1() {
    return (
        <div className={classes.div}>
            <div className={classes.div_section}>
                <h1>Taking Your Content In All The World's</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Vitae temporibus nesciunt obcaecati expedita, fuga similique 
                    eius quae eveniet.
                </p>
                <button className={classes.background}>Contact Us</button>
            </div>

        </div>
    )
}