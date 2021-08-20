import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useHistory } from "react-router-dom";


const WonLost = (props) => {
    const [state, setState] = useState({
        roomCode: null
    })

    const [result, setResult] = useState([]);
    const [data, setData] = useState([]);
    const [room, setRoom] = useState([]);
    const [id, setId] = useState('');
    const [winner, setWinner] = useState([]);
    const [resultId, setResultId] = useState('');
    const [gameResult, setGameResult] = useState(
        {
            won: true
        }
    )

    
    const handleChange = (e) => {
        setState((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }));
    }

    var str2bool = (value) => {
        if (value && typeof value === "string") {
            if (value.toLowerCase() === "true") return true;
            if (value.toLowerCase() === "false") return false;
        }
        return value;
    }

    const handleRadioInput = (e) => {
        const value = str2bool(e.target.value);
        setGameResult({ won: value });
    }



    var token = JSON.parse(localStorage.getItem('login'));
    var phone = token.phone
    const config = {
        headers: { 'Authorization': `Bearer ${token.token}` }
    };
    //console.log("res.id", props.location.state.id);
    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.put(`https://ludo-project-backend.herokuapp.com/api/roomCode/` + props.location.state.id,
            state,
            config
        ).then(res => {
            setData(res.data);
            console.log("room Code", res.data)
            window.alert("Room Code Set Successfully");
            console.log("res.data", props.location.state.resStatus);
        })
    }
    let userPhoneNumber = props.location.state.phone
    const getChallenge = () => {
        Axios.get(`https://ludo-project-backend.herokuapp.com/api/getRoomCode/` + props.location.state.id,
            config
        ).then(res => {
            setRoom(res.data.roomCode);
            // userPhoneNumber = res.data.paytm_no
            console.log('res: ', userPhoneNumber, phone);
            // console.log('tokenphone: ', phone);
        }).catch(error => {
            console.log('Error: ', error);
        });
    }



    const getResult = () => {
        Axios.get(`https://ludo-project-backend.herokuapp.com/api/results/` + props.location.state.id,
            config
        ).then(res => {
            setResult(res.data);
            setId(res.data[0]._id);
            console.log("result", res.data[0]._id);
        }).catch(error => {
            console.log('Error: ', error);
        });
    }
    const history=useHistory();
    const handleResult = (e) => {
        e.preventDefault()
        Axios.post(`https://ludo-project-backend.herokuapp.com/api/result/` + props.location.state.id,
            gameResult,
            config
        ).then(res => {
            setGameResult(res.data);
            console.log("Challenge Id", res.data.ChallengeId)
            window.alert("Result submitted Successfully");
            history.push("/Play")
        })
        setTimeout(() => {

        }, 0);
        getResult();

    }





    const editResult = async (e) => {
        e.preventDefault()
        await Axios.put(`https://ludo-project-backend.herokuapp.com/api/result/${id}`,
            gameResult,
            config
        ).then(res => {
            setGameResult(res.data);
            console.log("Result Id", resultId);
            window.alert("Result submitted Successfully");
            history.push("/Play")
        }
        );
    }
    




    useEffect(() => {
        getChallenge()
        getResult()
    }, [])


    return (
        <div>
            <div className="row no-gutters justify-content-center">
                <div className="col-sm-9 col-md-8 col-lg-6">
                    <br />
                    <div className="card">
                        <div className="card-body">
                            <div>
                                <small className="text-danger">Notice: कृपया ध्यान दे, गेम स्टार्ट होने के बाद 4-5 चान्सेस तक हर चांस में स्क्रीनशॉट ले | जरुरत पड़ने पर आपके काम आ सकता है |</small><br /><br />
                            </div>
                            <hr />

                            <input value="00300716" id="roomIdInput" className="hidden" />

                            {(userPhoneNumber == phone) ?
                                (<div id="roomIdWaiting">

                                    <input onChange={handleChange} value={state.roomCode} name="roomCode" type="text" id="roomCode" placeholder="RoomCode" />
                                    <div>
                                        <button onClick={handleSubmit} type="submit" className="btn btn-primary waves-effect waves-light">Submit</button>
                                    </div>
                                </div>) :
                                <p>Room Code : {room}</p>
                            }

                            <hr />

                            <div className="challengeBetween" style={{ "color": "red !important" }}>
                                <h6 className="card-text text-warning">Use <a href="https://play.google.com/store/apps/details?id=com.hecorat.screenrecorder.free">AZ Recorder</a> App to record game.</h6>
                                <h6 className="card-text text-danger">For cancelling game, <b><u>VIDEO PROOF</u></b> is necessary otherwise game will not be cancelled.</h6>
                            </div><br />

                            <div className="challengeBetween">

                                <h6 className="card-text text-info d-inline-block"><img className="mr-1" src="https://ludokhelo.s3.ap-south-1.amazonaws.com/static/images/chips.png" width="15px" />10 Penality = Wrong Update.</h6>
                                <h6 className="card-text text-info d-inline-block"><img className="mr-1" src="https://ludokhelo.s3.ap-south-1.amazonaws.com/static/images/chips.png" width="15px" />25 Penality = If you don't update after losing.</h6>
                            </div>

                            <hr />
                            <h4>POST RESULT</h4>
                            <hr />
                            <a href="https://wa.me/917357525272?text=How+To+Play,+Please+Guide+Me" onclick="playAudio('supportAudio');" target="_blank" rel="noreferrer">Post your Result here</a>

                            <form onSubmit={handleResult} id="challenge-result-form" className="form-inline">
                                <input className="hidden" name="challengeId" value="gnXEsYaidtSsGsbPBm5OTITOYStHiPjn" />
                                <div className="form-group challenge-result-block">
                                    <div className="form-check challengeOptions text-success">
                                        <input className="form-check-input" id="won" value={gameResult.won} type="radio" name="won" onChange={handleRadioInput} />
                                        <label className="form-check-label" htmlFor="challenge-won">
                                            I Won
                                        </label>
                                    </div>
                                    <div className="form-check challengeOptions text-danger">
                                        <input className="form-check-input" id="lost" value={!gameResult.won} type="radio" name="won" onChange={handleRadioInput} />
                                        <label className="form-check-label" htmlFor="challenge-lost">
                                            I Lost
                                        </label>
                                    </div>
                                    {/* <div className="form-check challengeOptions text-warning">
                                    <input className="form-check-input" id="challenge-cancel" type="radio" name="challengeResult" value="cancel" required="" />
                                    <label className="form-check-label" for="challenge-cancel">
                                        Cancel Game
                                    </label>
                                </div> */}
                                    <div id="cancelReasonBlock" style={{ "display": "none" }}>
                                        <div className="form-group" style={{ "display": "block !important" }}>
                                            <label htmlFor="cancelReason">Cancel Reason</label>
                                            <textarea name="cancelReason" className="form-control" id="cancelReason" rows="2" maxLength="50"></textarea>
                                        </div><br />
                                    </div>
                                </div>
                                <br />
                                {(userPhoneNumber == phone) ?
                                    <span className="waves-input-wrapper waves-effect waves-light"><button type="submit" value="Post Result" onClick={handleResult} className="btn btn-primary" >Upload</button></span>
                                    :
                                    <span className="waves-input-wrapper waves-effect waves-light"><button type="submit" value="Edit Result" onClick={editResult} className="btn btn-primary" >Upload Result</button></span>

                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default WonLost
