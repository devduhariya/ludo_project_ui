import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import './Style.css';
import ResultTable from './ResultTable'

const GetResult = () => {
    var token = JSON.parse(localStorage.getItem('login'));
    const config = {
      headers: { 'Authorization': `Bearer ${token.token}` }
    };
    const [data, setdata] = useState([]);
    const [state, setState] = useState({

    })
    const getResult = () => {
        Axios.get('http://localhost:9000/api/setChallenge/result', config).then(res => {
          console.log('res: ', res);
          setdata(res.data)
          // console.log("data before useEffect",setdata)
        }).catch(error => {
          console.log('Error: ', error);
        });
      }
    
      const updateResult = (id) => {
        setState({
          id: id
        })
      }
      useEffect(() => {
        getResult()
      }, [])
    return (
        <div>
            <ResultTable
            data={data}
            // updateResult={updateResult}
            />
        </div>
    )
}

export default GetResult
