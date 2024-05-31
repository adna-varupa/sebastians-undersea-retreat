import React from 'react';
import './AboutUs.css'; 
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

export default function AboutUs(){
  return (
   <div className='about-us'>
    <NavBar />
    <div class='background'>
  <div class='about-container'>
    <div class='about'>
      <h2>About Us</h2>
    </div>
    <p class='about-desc'>
      Welcome to our aquarium! We are dedicated to providing an immersive and educational experience for visitors of all ages. Our mission is to inspire conservation of marine life through interactive exhibits, educational programs, and conservation initiatives.
    </p>
    <p class='about-desc'>
      Our aquarium showcases a diverse range of marine species, from colorful tropical fish to majestic sharks and playful dolphins. Explore our exhibits to learn about the wonders of the ocean and the importance of protecting marine ecosystems.
    </p>
    <p class='about-desc'>
      Whether you're a family looking for a fun day out, a student eager to learn about marine biology, or a conservation enthusiast passionate about preserving marine habitats, there's something for everyone at our aquarium. Come dive in and discover the beauty and diversity of the underwater world!
    </p>
  </div>
</div>

    <div className="homepage-text-image">
    <div className="left">
        <div className="copy-container">
            <div className="text-blck wysiwyg-formatting">
                <h2 id="conservation">A Modest Beginning: Our Aquarium Museum's Humble Origins</h2>
                <p id="consdesc">Born from the shared passion of marine enthusiasts, our aquarium museum started modestly in a corner of a local community center. Through grassroots support and volunteer dedication, we've grown into a vibrant hub of marine exploration and education.</p>
                <p id="consdesc">Today, we stand as a testament to the power of community and the enduring importance of our mission to inspire understanding and conservation of the ocean.</p>
            </div>
        </div>
    </div>
    <div className="right">
    <img src="/images/blob.webp"/>
    </div>
</div>

<div className="homepage-text-image">
    <div className="left1">
        <img src="/images/learning.png"/>
    </div>
    <div className="right1">
        <div className="copy-container">
            <div className="text-block wysiwyg-formatting">
                <h2 id="conservation">Nurtured by Passion: The Growth of Sebastians Undersea Retreat</h2>
                <p id="consdesc">Since our establishment, the Sebastians Undersea Retreat has remained steadfast in its commitment to educate and inspire visitors about the wonders of the deep. Through captivating exhibits and immersive experiences, we endeavor to cultivate a deeper understanding of marine ecosystems and promote conservation efforts.</p>
                <p id="consdesc">Join us as we continue to explore, educate, and protect the ocean's treasures together.</p>
            </div>
        </div>
    </div>
</div>
<Footer />
</div>
  );
};
