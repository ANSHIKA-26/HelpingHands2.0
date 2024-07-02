import React from 'react';
import './Contact.css'; // Create this file to add styles specific to Navbar

const Contact = () => {
  return (
    <footer className="contact-us" id="contact-us-footer">
      <h2>Contact Us</h2>
      <ul>
        <li><a href="mailto:example@example.com"><i class="fas fa-envelope"></i> Email : helpinghands@gmail.com</a></li>
        <li><a href="tel:+1234567890"><i class="fas fa-phone"></i> Phone Number : 7923820932</a></li>
        <li><a href="#"></a></li>
        <li><a href="#"><i class="fab fa-instagram"></i> Instagram</a></li>
        <li><a href="#"><i class="fab fa-twitter"></i> Twitter</a></li>
        <li><a href="#"><i class="fab fa-facebook"></i> Facebook</a></li>
      </ul>
    </footer>
  );
};

export default Contact;
