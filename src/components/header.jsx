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