import React from "react";
import './RegistrationSite.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Registration = () => {
    return (
        <div className="registration-background">
        <div className="registration-container">
            <div className="RegistrationText">
                <form action="">
                    <h2>Registration</h2>
                </form>
            </div>
            <div className="name-surname">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Surname" />
            </div>
            <div className="input-box">
                <input type="text" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
            </div>
            <button className="submit-button" type="submit">Sign Up</button>
            <div className="SignUpWith">or Sign Up With</div>
            <hr className="HorizontalLine" />
            <div className="Icons">
                <a href="https://accounts.google.com/signin" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-google"></i>
                </a>
                <a href="https://www.facebook.com/login/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://twitter.com/login" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
            </div>
        </div>
        </div>
    )
}

export default Registration;