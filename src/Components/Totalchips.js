import React, { useState, useEffect } from 'react'
import Axios from 'axios';

const Totalchips = () => {
    var token = JSON.parse(localStorage.getItem('login'));
    const config = {
        headers: { 'Authorization': `Bearer ${token.token}` }
    };

    const [data, setdata] = useState(0);


    const getchips = () => {
        Axios.get('https://ludo-project-backend.herokuapp.com/api/buyChips/totalchips', config).then(res => {
            setdata(res.data)
        }).catch(error => {
            console.log('Error: ', error);
        });
    }
    console.log(data);


    useEffect(() => {
        getchips()
    }, [])

    return (
        <li style={{ paddingTop: '0.8%' }} className="nav-item">
            Chips:{data}
        </li>



    )
}


export default Totalchips
