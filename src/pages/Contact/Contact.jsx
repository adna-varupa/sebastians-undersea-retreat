import React from "react";
import './Contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {

    console.log("Rendering ContactPage...");

    return (
        <div className="MainContainer">
            <div className="contact-info">
            <i className="fas fa-phone"></i>
            <span>Phone</span>
            <p>(312) 867-5309</p>
            <i className="fas fa-location"></i>
            <span>Adress</span>
            <p>77 Haven Lane Lansing, <br />MD 48906</p>
            <i className="far fa-clock"></i>
            <span>Business Hours</span>
            <p> Mon - Sat
                <time datetime="2024-05-22T05:00:00-04:00">
                    9 am
                </time>
                    &nbsp;-&nbsp;
                <time datetime="2024-05-22T14:00:00-04:00">
                    6 pm
                </time>
                <br />Sun - Closed
            </p>
            </div>
            <hr class="divider" />
            <div className="contact-form">
                <h2>Contact Us</h2>
                <form>
                    <input type="text" placeholder="Enter your Name" name="name" required />
                    <input type="email" placeholder="Enter a valid email address" name="email" required />
                    <input type="text" placeholder="Address" name="address" required />
                    <textarea name="message" required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;