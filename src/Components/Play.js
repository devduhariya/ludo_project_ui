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
    var token = JSON.parse(localStorage.getItem('login'));
    const handleSubmitbutton = async (e) => {
        e.preventDefault();
        console.log(state);
        await fetch("http://localhost:9000/api/setChallenge",
            {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ` + token.token
                },
                body: JSON.stringify(state)
            }).then(response => {
                console.log(response)
                // stateById.push(response)
                //console.log("response", response);
            }, setState({ ...state, chipsSaved: true }))
            .catch(error => {
                console.log(error)
            })
    }
    const config = {
        headers: { 'Authorization': `Bearer ${token.token}` }
    };
    const getChallenge = () => {
        Axios.get('http://localhost:9000/api/setChallenge/all', config).then(res => {
            console.log('res: ', res);
            setData(res.data)
            // console.log("data before useEffect",res.data[0]._id)
        }).catch(error => {
            console.log('Error: ', error);
        });
    }


    const handleSubmit = (e) => {
        Axios.post(
            'http://localhost:9000/api/setChallenge',
            state,
            config
        ).then(console.log).catch(console.log);
        window.location.reload();
        state.amount <= 50 && state.amount >= 10000 ? window.alert("set challenge Amount between 50 to 10000") : <div></div>

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
        Axios.put(`http://localhost:9000/api/setChallenge/` + id, state,
            config
        ).then(res => {
            setData(res.data);
            props.history.push('/gameResult');
            window.location.reload()
            console.log("res.data", res.data);
            // console.log("res.data",res.data._id);


        })
    }

    // const findChallenge = () => {
    //     Axios.get('http://localhost:9000/api/setChallenge/result', config).then(res => {
    //         console.log('res: ', res);
    //         setData(res.data)
    //         // console.log("data before useEffect",res.data[0]._id)
    //     }).catch(error => {
    //         console.log('Error: ', error);
    //     });
    // }

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
                    {/* <label for="inputSetChallenge" class="sr-only active">Set Challenge</label> */}
                    <input style={{ float: 'left', marginRight: '1%' }} onChange={handleChange} name="amount" value={state.amount} type="text" className="form-control input-box" id="amount" placeholder="Amount" />
                    <input onChange={handleChange} name="roomCode" value={state.roomCode} type="text" className="form-control input-box" id="roomCode" placeholder="Room Code" />
                    <button style={{ marginLeft: '1%', marginTop: '0.5%' }} onClick={handleSubmit} type="submit" className="btn btn-primary waves-effect waves-light">Set</button>
                </div>

                <ul id="your-challenge-list" class="list-group">

                </ul>


                <ChallengeTable data={data}
                    updateChallengeAmount={updateChallengeAmount}
                />
                {/* {data.length > 0 ? data.map((result) => {
                    return (
                        
                        <ul key={result._id} id="challenge-list" className="list-group">
                            {
                                result.amount > 49 ?
                                    <li id="" className="list-group-item" data-position="50">

                                        <div class="msg_cotainer_top">
                                            <div className="challengeText">
                                                {result.name} have set a Challenge for <span style={{ "background-color": "antiquewhite", "padding": "2px", "display": "inline-block" }}><b>{result.amount}</b></span>
                                            </div>
                                            <div class="challengeButton">
                                                <button type="button" id ={result._id} onClick={updateChallengeAmount} className="btn btn-primary btn-sm">Play</button>
                                            </div>
                                            {/* <li>{result._id}</li> */}
                {/* </div>
                                    </li> : null
                            }
                        </ul>
                    )
                }) : <div>No challenges</div>
                } */}
            </form>
        </div>

    )
}

export default Play
