import React, { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import FeatherIcon from 'feather-icons-react';
// import { avatar01, avatar02, avatar03, avatar05, avatar06, logo, logoSmall } from '../imagepath'
import { Appcontext } from '../../../approuter'
import { avatar01, doctor_thumb_01, logo, logoSmall, patient1, patient2, patient3 } from '../imagepath';

const Header = (props) => {

    let pathname = props.location.pathname;
    const { isAuth, setIsAuth } = useContext(Appcontext);
    const [task, settask] = useState(true);
    const [task1, settask1] = useState(true);
    const [dropdown, setdropdown] = useState(false);
    const [dropdown1, setdropdown1] = useState(false);

    const handletheme = () => {
        document.body.classList.toggle('darkmode');
        settask(!task)
        settask1(!task1)
    }
    const handledropdown = () => {
        setdropdown(!dropdown)
        setdropdown1(false)
    }
    const handledropdown1 = () => {
        setdropdown1(!dropdown1)
        setdropdown(false)
    }
    const handlesidebar = () => {
        document.body.classList.toggle('mini-sidebar');
    }
    const handlesidebarmobilemenu = () => {
        document.body.classList.toggle('slide-nav');
    }