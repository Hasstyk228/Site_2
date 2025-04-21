import classes from './Footer.module.css'

export default function Footer () {
    return (
        <div className={classes.div}>
            <div className={classes.content}>
                <div> {/* Section 1 */}

                    <div>
                        <img src="/src/photo/logo_white.png" alt="" />
                        <h3>KALEIDOSCOP</h3>
                    </div>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Neque obcaecati maiores totam reiciendis similique, 
                        inventore optio, culpa nulla voluptatum quibusdam modi 
                        doloremque quam voluptas exercitationem, odit nihil 
                        officiis ipsam repudiandae.
                    </p>

                    <div>
                        <img src="/src/photo/facebook.png" alt="" />
                        <img src="/src/photo/twitter.png" alt="" />
                        <img src="/src/photo/email.png" alt="" />
                        <img src="/src/photo/instagram.png" alt="" />
                        <img src="/src/photo/youtube.png" alt="" />
                        <img src="/src/photo/linkedin.png" alt="" />
                    </div>

                </div>

                <div> {/* Section 2 */}

                    <h3>Quick Links</h3>
                    <h4>Login</h4>
                    <h4>Logout</h4>
                    <h4>Jobs</h4>
                    <h4>Siemap</h4>
                    <h4>Imprint</h4>
                    <h4>Privacy Policy</h4>

                </div>

                <div> {/* Section 3 */}

                    <h3>Quick Links</h3>
                    <h4>Shop</h4>
                    <h4>References</h4>
                    <h4>News</h4>
                    <h4>Events</h4>
                    <h4>Service & Support</h4>
                    <h4>Contact</h4>
                
                </div>
            </div>
            <p>2025 • All righs reserved by Kaleidoscope GmbH</p>
        </div>
    )
}