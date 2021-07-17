import React, { useState, useEffect } from 'react'
import Axios from 'axios';
//import Header from './Header';

const Totalchips = () => {
    var token = JSON.parse(localStorage.getItem('login'));
    const config = {
        headers: { 'Authorization': `Bearer ${token.token}` }
    };

    const [data, setdata] = useState(0);


    const getchips = () => {
        Axios.get('https://ludo-project-backend.herokuapp.com/api/buyChips/totalchips', config).then(res => {
            //console.log('res: ', res.data);
             setdata(res.data) 
            //console.log(res)
    }).catch(error => {
            console.log('Error: ', error);
        });
    }
    console.log(data);


    useEffect(() => {
        // Axios.get( 'http://localhost:9000/api/buyChips',config).then(res=>{setdata({...data,data:res.data})}).catch(console.error());
        // setTimeout(() => {
        getchips()
        // }, 3000);
    }, [])

    return (
       
            <li style={{ paddingTop: '0.8%' }} className="nav-item">
                Chips:{data}
            </li>

      



    )
}


export default Totalchips
