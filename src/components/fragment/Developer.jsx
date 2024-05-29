import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import AvatarImage from "../assets/img/IMG-20230616-WA0063 (2).jpg";
import { Instagram, LinkedIn, Twitter } from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Meet the developer</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage} alt="Profile"/>
                    <div className={"Card-details"}>
                        <h3>Nwaokolo Dennis</h3>
                        <p>Full Stack developer</p>
                        <p>Passionate Programmer</p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>A graduate of computer science  Nile University of Nigeria, Abuja.</p>
                    <p>Graduated in 2023 and looking for a responsible position to gain practical knowledge</p>
                    <p>A full-stack web developer and a passionate programmer.</p>
                    <p>I love designing fully responsive websites.</p>
                    <p>I have a keen interest in developing projects, whenever I want to learn something new.</p>
                    <div className="Card-btn">
                        <IconButton target={"_blank"} href={"https://x.com/DennisNwao40722"}  title={"DennisNwao40722"}>
                            <Twitter/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.linkedin.com/in/dennis-nwaokolo/"}  title={"Bros-dee"}>
                            <LinkedIn/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.instagram.com/bros_dee3?utm_source=qr&igsh=MWFpazF1dHNkb2lhNQ=="}  title={"bros_dee3"}>
                            <Instagram/>
                        </IconButton>
                       
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;