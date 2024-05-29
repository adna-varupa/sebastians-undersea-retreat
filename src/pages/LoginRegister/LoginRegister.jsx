import React, {useState} from "react";
import './LoginRegister.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Link} from "react-router-dom"; 

const LoginRegister = () => {

    const [loginType, setLoginType] = useState('USER');

    return (
        <div className="MainContainer">
            <div className="WelcomeText">
                <form action="">
                    <h2>Welcome</h2>
                </form>
            </div>
            <div className="user-admin">
                <span
                    className={loginType === 'USER' ? 'active' : ''}
                    onClick={() => setLoginType('USER')}
                >
                    USER
                </span>
                {' | '}
                <span
                    className={loginType === 'ADMIN' ? 'active' : ''}
                    onClick={() => setLoginType('ADMIN')}
                >
                    ADMIN
                </span>
            </div>
            <div className="input-box">
                <input type="text" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <a href="https://accounts.google.com/v3/signin/challenge/pwd?TL=ALv_Gf9w63SYrggA63mBWZuLBj8qtGIfb5DyPKOoucWsnnqcZwBsdnwlPDisRBm-&cid=1&continue=https%3A%2F%2Fmyaccount.google.com%2Fsigninoptions%2Fpassword&flowName=GlifWebSignIn&hl=en-GB&ifkv=AaSxoQxj0GHVLFN6_4wt-ItNVR-xEGysYbOqw3e_cAkZuQMnFobl1Va5J2cagUVvidygu8ia5ZRkjg&kdi=CAM&rart=ANgoxcc4_IXQ4pfcoie347w4LVPy38hp4vFKdFOjWYPPujqPWiITGLp7zTFql5_g4FnwPjNsFNGpLi-k8nuD0M7lg7jH_KivUbOhny9doXIFDgkUf1PjMSA&rpbg=1&sarp=1&scc=1&service=accountsettings" target="_blank" rel="noopener noreferrer">Forgot password?</a>
            </div>
            <button className="button" type="submit">Login</button>
            <div className="LoginWith">or Login With</div>
            <hr class="HorizontalLine" />
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
            <div className="register">
                <p>
                    Don't have an account? Sign in <Link to='Registration'>here</Link>
                </p>
            </div>
        </div>
    )
}

export default LoginRegister