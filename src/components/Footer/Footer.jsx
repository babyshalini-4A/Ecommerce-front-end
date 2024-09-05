import React from 'react'
import './Footer.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <div>
        <footer class="footer">

<section class="flex">

    <div class="box">
<a href="tel:1234567890"><i class="fas fa-phone"></i><span>123456789</span></a>
<a href="tel:1112223333"><i class="fas fa-phone"></i><span>1112223333</span></a>
<a href="tel:mailto:shalini@gmail.com"><i class="fas fa-envelope"></i><span>shalini@gmail.com</span></a>
<a href="#"><i class="fas fa-map-marker-alt"></i><span>thirupatur, india 635653</span></a>
    </div>

    <div class="box">
        <a href="home.html"><span>home</span></a>
        <a href="about.html"><span>about</span></a>
        <a href="contact.html"><span>contact</span></a>
        <a href="listings.html"><span>all listings</span></a>
        <a href="#"><span>saved properties </span></a>
       
    </div>

    <div class="box">
        <a href="#"><span>facebook</span><i class="fab fa-facebook"></i></a>
        <a href="#"><span>twitter</span><i class="fab fa-twitter"></i></a>
        <a href="#"><span>linkedin</span><i class="fab fa-linkedin"></i></a>
        <a href="#"><span>instagram</span><i class="fab fa-instagram"></i></a>
    </div>
    
</section>

<div class="credit">&copy;copyright @ 2022 by <span>mr. web designer</span>all rights reserved</div>
     </footer>
    </div>
  )
}

export default Footer