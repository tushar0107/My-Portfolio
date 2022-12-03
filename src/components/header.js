import './styles/header.css';
import React from 'react';
import { FaInstagram, FaGithub, FaHackerrank, FaLinkedin } from "react-icons/fa";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header(){
    return (
        <>
            <div id="nav">
                <div id="logo">L O G O</div>
                <div id="nav-items">
                    <a href="https://www.linkedin.com/in/tushar-dasare-107989200" class="nav-icon"><FaLinkedin/></a>
                    <a href="https://instagram.com/frozzy.dev?igshid=YmMyMTA2M2Y" class="nav-icon"><FaInstagram/></a>
                    <a href="https://github.com/tushar0107" class="nav-icon"><FaGithub/></a>
                    <a href="https://www.hackerrank.com/tushardasare1701" class="nav-icon"><FaHackerrank/></a>
                </div>
            </div>
        </>
    );
}