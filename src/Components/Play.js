import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ChallengeTable from './ChallengeTable';

const Play = (props) => {
    const [state, setState] = useState({
        amount: null,
        roomCode: null
    })
    const [data, setData] = useState([]);
    const handleChange = (e) => {
        setState((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }));
    }

    const required = (value) => {
        if (!value) {
          return (
            <div className="alert alert-danger" role="alert">
              This field is required!
            </div>
          );
        }
      };

    var token = JSON.parse(localStorage.getItem('login'));
    const handleSubmitbutton = async (e) => {
        e.preventDefault();
        console.log(state);
        await fetch("https://ludo-project-backend.herokuapp.com/api/setChallenge",
            {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ` + token.token
                },
                body: JSON.stringify(state)
            }).then(response => {
                console.log(response)
            }, setState({ ...state, chipsSaved: true }))

            .catch(error => {
                console.log(error)
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


    const handleSubmit = (e) => {
        if (state.amount <= 50 || state.amount >= 10000 ? window.alert("set challenge Amount between 50 to 10000") : <div></div>)
            Axios.post(
                'https://ludo-project-backend.herokuapp.com/api/setChallenge',
                state,
                config
            ).then(console.log).catch(console.log);
        window.location.reload();
    }
    useEffect(() => {
        getChallenge()
    }, [])
    const updateChallengeAmount = (id) => {
        setState({
            id: id
        })
        // const id  = state.id
        console.log("idd", id);
        Axios.put(`https://ludo-project-backend.herokuapp.com/api/setChallenge/` + id, state,
            config
        ).then(res => {
            setData(res.data);
            props.history.push('/gameResult');
            window.location.reload()
            console.log("res.data", res.data);
            // console.log("res.data",res.data._id);


        })
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
                <div onclick="" className="toast-body bg-primary text-center" id="notification-message">
                    You got a request on your trade!
                </div>
            </div>
            <div className="row no-gutters justify-content-center">
                <div className="col-8 col-md-4">
                    <h6 className="card-text text-danger">Classic Room Code will be entered by the player who has set the challenge, so please wait till the opponent joins.</h6>
                </div>
            </div>
            <form id="set-challenge-form" className="form-inline" onSubmit={handleSubmitbutton}>
                <div className="form-group set-challenge-block">
                    <input style={{ float: 'left', marginRight: '1%' }} onChange={handleChange} name="amount" value={state.amount} type="text" className="form-control input-box" id="amount" placeholder="Amount" />
                    <input onChange={handleChange} name="roomCode" value={state.roomCode} type="text" className="form-control input-box" id="roomCode" placeholder="Room Code" />
                    <button style={{ marginLeft: '1%', marginTop: '0.5%' }} onClick={handleSubmit} type="submit" className="btn btn-primary waves-effect waves-light">Set</button>
                </div>

                <ul id="your-challenge-list" class="list-group">

                </ul>
                <ChallengeTable data={data}
                    updateChallengeAmount={updateChallengeAmount}
                />
            </form>
        </div>

    )
}

export default Play
