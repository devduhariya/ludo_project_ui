import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ChallengeTable from './ChallengeTable';

const Play = (props) => {
    const [state, setState] = useState({
        amount: undefined
    })
    const [data, setData] = useState([]);
    const handleChange = (e) => {
        setState((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }));
    }

    var token = JSON.parse(localStorage.getItem('login'));
    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.amount < 50 || state.amount >= 10000 ? window.alert("set challenge Amount between 50 to 10000") : <div></div>)
            Axios.post(
                'https://ludo-project-backend.herokuapp.com/api/setChallenge',
                state,
                config
            ).then(
                res => {
                    setState(res.data);
                    window.alert('Challenge set successfully');
                    window.location.reload();
                })
    }


    const config = {
        headers: { 'Authorization': `Bearer ${token.token}` }
    };
    const getChallenge = () => {
        Axios.get('https://ludo-project-backend.herokuapp.com/api/setChallenge/all', config).then(res => {
            console.log('res: ', res);
            setData(res.data)
        }).catch(error => {
            console.log('Error: ', error);
        });
    }

    useEffect(() => {
        getChallenge()
    }, [])
    const updateChallengeAmount = (id, amount) => {
        setState({
            id: id,
            amount: amount
        })
// const phone = null
        console.log("idd", id);
        Axios.put(`https://ludo-project-backend.herokuapp.com/api/setChallenge/` + id, state,
            config
        ).then(res => {
            setData(res.data);
            props.history.push({
                pathname: '/WonLost',
                state: {
                    id: id,
                    status:res.data.changeStatus.status,
                    phone:res.data.paytm_no
                }
            });
            //window.location.reload()
            console.log("res.data", res.data.changeStatus.status);
        })
    }

    const viewSetChallenge = (id,phone) =>{
        props.history.push({
            pathname: '/WonLost',
            state: {
               id : id,
               phone:phone
            }
        });
        console.log("phone play",phone)
    }


    console.log("data after useEffect", data)

    return (
        <div>
            <div className="toast fade hide hidden notification bounce" id="notificationToast" role="alert" aria-live="assertive" aria-atomic="true" data-delay="10000">
                <div className="toast-header bg-secondary pl-3">
                    <strong className="mr-auto">Notification</strong>
                    <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true" className="pr-2">×</span>
                    </button>
                </div>
            </div>
            <div className="row no-gutters justify-content-center">
                <div className="col-8 col-md-4">
                    <h6 className="card-text text-danger">Classic Room Code will be entered by the player who has set the challenge, so please wait till the opponent joins.</h6>
                </div>
            </div>
            <form id="set-challenge-form" className="form-inline" onSubmit={handleSubmit}>
                <div className="form-group set-challenge-block">
                    <input onChange={handleChange} name="amount" value={state.amount} type="text" id="amount" placeholder="Amount" />
                    <div>
                        <button onClick={handleSubmit} type="submit" className="btn btn-primary waves-effect waves-light">Set</button>
                    </div>
                </div>
                {/* <div>
                    <a href="https://wa.me/917357525272?text=How+To+Play,+Please+Guide+Me" target="_blank">Click here to post Your Result</a>
                </div> */}

                <ul id="your-challenge-list" className="list-group">

                </ul>
            </form>
            <ChallengeTable data={data}
                updateChallengeAmount={updateChallengeAmount}
                viewSetChallenge={viewSetChallenge}
            />
        </div>

    )
}

export default Play
