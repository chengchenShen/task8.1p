import React from "react";
import './Contact.css'

function Contact()
{
    return <div>
        <form action ="">
        <input type = "text"  class="contactStyle" placeholder = "Contact us" />
        <div class ="icon">
        <a href = "#" class = "fa fa-facebook" ></a>
        <a href = "#" class = "fa fa-twitter" ></a>
        <a href = "#" class = "fa fa-youtube" ></a>
        <a href = "#" class = "fa fa-google" ></a>
        <a href = "#" class = "fa fa-linkedin" ></a>
        </div>

        </form>
    </div>
}

export default Contact