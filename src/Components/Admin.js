import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import './Style.css';
import AdminTable from './AdminTable'

const Admin = () => {
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
    Axios.get('https://ludo-project-backend.herokuapp.com/api/buyChips', config).then(res => {
      console.log('res: ', res);
      setdata(res.data)
      // console.log("data before useEffect",setdata)
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

   

    // const id  = state.id
    console.log("idd", id);
    Axios.put(`https://ludo-project-backend.herokuapp.com/api/buyChips/` + id, state,
      config
    ).then(res => {
      setState(res.data);
      // state,
      window.location.reload()
      console.log("res.data", res.data);
      // console.log("res.data",res.data._id);


    })
  }
  
  const rejectRequest = (id) => {
    setState({
      id: id
    })

   

    // const id  = state.id
    console.log("idd", id);
    Axios.delete(`https://ludo-project-backend.herokuapp.com/api/buyChips/` + id, state,
      config
    ).then(res => {
      setState(res.data);
      // state,
      window.location.reload()
      console.log("res.data", res.data);
      // console.log("res.data",res.data._id);


    })
  }



  // console.log("data after useEffect", data)

  return (
    <div>

   
      <AdminTable data={data}
        // editTableRecord={editTableRecordHandler}
        updateChallengeAmount={updateChallengeAmount}
        rejectRequest={rejectRequest}
      />

    
    </div>

  )
}
export default Admin

