import './styles/header.css';
import React from 'react';
import { FaBars } from "react-icons/fa";

export default function Header(){
    return (
        <>
            <div id="header">
                <a href="?"><FaBars/></a>
                <div id='logo'>Hello world!!!</div>
            </div>
        </>
    );
}