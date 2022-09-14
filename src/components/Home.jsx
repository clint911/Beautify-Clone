import React, { useState } from "react";
import { ReactDOM } from "react";
import './Home.css';

export default function Home() {
  return (
    <div className="Home">
        <div className="image-page">
        <h1 className="header"> Contact Us</h1>
    <div className="formBody">
        <div className="userName">
            <label className="formLabel" for="userName">UserName</label>
            <input type="text" id="userName" placeholder="UserName goes here">   
            </input>
        </div>
    </div>
    <div className="userEmail">
            <label className="formLabel" for="userEmail">UserEmail</label>
            <input type="text" id="userEmail" placeholder="User Email goes here">   
            </input>
        </div>
        <div className="userMessage">
            <label className="formLabel" for="userName">MESSAGE(max, 120 Characters)</label>
            <input type="text" id="userMessage" placeholder="Write a message here ">   
            </input>
        </div>
        <div className="sendButton">
            <button className="button">Send</button>
        </div>
        </div>

        <div className="information-page">
            <h3 className="about">About</h3>
            <ul className="aboutList">
                <li>Homepage</li>
                <li>Our Expertise</li>
                <li>About us</li>
                <li>Products</li>
                <li>Read What's new</li>
            </ul>
            <h3 className="products">Products</h3>
            <ul className="productsList">
                <li>Clensers</li>
                <li>Serums</li>
                <li>Creams</li>
                <li>SPFS</li>
                <li>Toners</li>
            </ul>
            <h3 className="help">Help</h3> 
            <ul className="Help">
                <li>Shopping and returns</li>
                <li>Track Order</li>
                <li>FAQ'S</li>
            </ul>
            <h3 className="contacts">Contact us</h3>
            <ul className="contacts">
                <li>Phone: +254724680615</li>
                <li>Email: clintonnjogu007@gmail.com</li>
            </ul>
            <h3 className="follows">Follow Us</h3>
            <ul className="socialMediaIcons">
                <li>Instagram</li>
                <li>Tiktok</li>
                <li>Twitter</li>
                <li>Youtube</li>
            </ul>
        
        <div className="footerElement">
            <footer>
                <p>Terms & conditions</p>
                <p>Privacy Policy</p>
                <p>@2022BeautyMy&Co.All rights reserved beautify, B & B are trademarks of Beautify & Co </p>
            </footer>
        </div>
        </div>
        </div>
  );
}