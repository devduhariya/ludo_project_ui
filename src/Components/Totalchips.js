import React, { useState, useEffect } from 'react'
import Axios from 'axios';
//import Header from './Header';

const Totalchips = () => {
    var token = JSON.parse(localStorage.getItem('login'));
    const config = {
        headers: { 'Authorization': `Bearer ${token.token}` }
    };

    const [data, setdata] = useState([]);


    const getchips = () => {
        Axios.get('http://localhost:9000/api/buyChips/totalchips', config).then(res => {
            console.log('res: ', res);
            setdata(res.data)
            // console.log("data before useEffect",setdata)
        }).catch(error => {
            console.log('Error: ', error);
        });
    }


    useEffect(() => {
        // Axios.get( 'http://localhost:9000/api/buyChips',config).then(res=>{setdata({...data,data:res.data})}).catch(console.error());
        // setTimeout(() => {
        getchips()
        // }, 3000);
    }, [])

    return (
        data?
       <li style={{paddingTop:'0.8%'}} className="nav-item">
           Chips:{data}
       </li>
       :<li style={{paddingTop:'0.8%'}} className="nav-item">
       Chips:0
   </li>
            
        

    )
}


export default Totalchips
