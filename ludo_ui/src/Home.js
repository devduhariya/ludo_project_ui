import React, { useState, useEffect } from 'react'
import Axios from 'axios'
const Home = () => {
    const [data, setData] = useState([])
    const getData = () => {
            Axios.get('http://localhost:8900/').then(res => {
                console.log('res: ', res);
                setData(res.data)
                // console.log("data before useEffect",setdata)
            }).catch(error => {
                console.log('Error: ', error);
            });
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <h2>{data}</h2>
        </div>
    )
}

export default Home
