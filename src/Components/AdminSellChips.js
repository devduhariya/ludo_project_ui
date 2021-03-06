import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import './Style.css';
import AdminSellChipsTable from './AdminSellChipsTable';

const AdminSellChips = () => {
    var token = JSON.parse(localStorage.getItem('login'));
    const config = {
        headers: { 'Authorization': `Bearer ${token.token}` }
    };

    const [data, setdata] = useState([]);
    const [state, setState] = useState({
        amount: null,
        status:''
    })

    const getUser = () => {
        Axios.get('https://ludo-project-backend.herokuapp.com/api/sellChips', config).then(res => {
            console.log('res: ', res);
            setdata(res.data)
        }).catch(error => {
            console.log('Error: ', error);
        });
    }


    useEffect(() => {
        getUser()
    }, [])


    const updateChallengeAmount = (id) => {
        setState({
            id: id
        })

        console.log("idd", id);
        Axios.put(`https://ludo-project-backend.herokuapp.com/api/sellChips/` + id, state,
            config
        ).then(res => {
            setState(res.data);
            window.location.reload()
            console.log("res.data", res.data);
        })
    }

    const rejectRequest = (id) => {
        setState({
            id: id
        })

        console.log("idd", id);
        Axios.delete(`https://ludo-project-backend.herokuapp.com/api/sellChips/` + id, state,
            config
        ).then(res => {
            setState(res.data);
            window.location.reload()
            console.log("res.data", res.data);

        })
    }

    return (
        <div>


            <AdminSellChipsTable data={data}
                updateChallengeAmount={updateChallengeAmount}
                rejectRequest={rejectRequest}
            />


        </div>

    )
}
export default AdminSellChips

