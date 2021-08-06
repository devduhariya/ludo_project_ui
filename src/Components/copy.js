import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const WonLost = (props) => {
    const [state, setState] = useState({
        roomCode: null
    })
    const [data, setData] = useState([]);
    const [resultData, setResultData] = useState([]);
    const [gameResult, setGameResult] = useState({
        screenshots: '',
        won: false,
        lost: false
    })
    const handleChange = (e) => {

        setResultData({ screenshots: e.target.value, won:true})

    }
    const handleResultChange = (e) => {
        setResultData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
            //  screenshots: e.target.files
        }));
    }

    var token = JSON.parse(localStorage.getItem('login'));
    const config = {
        headers: { 'Authorization': `Bearer ${token.token}` }
    };
    console.log("res.id", props.location.state.id);
    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.put(`https://ludo-project-backend.herokuapp.com/api/roomCode/` + props.location.state.id,
            state,
            config
        ).then(res => {
            setData(res.data);
            window.alert("Room Code Set Successfully");
            console.log("res.data", props.location.state.resStatus);
        })
    }

   const handelResult=(e)=> {
        e.preventDefault()
        // const formData = new FormData()
        // formData.append('screenshots', gameResult.screenshots)
        Axios.post(`https://ludo-project-backend.herokuapp.com/api/result/` + props.location.state.id,
        gameResult,
        config
        ).then(res => {
            console.log(res.data)
        })
    }

    // const handelResult = async (e) => {
    //     e.preventDefault();
    //     Axios.post(`https://ludo-project-backend.herokuapp.com/api/result/` + props.location.state.id,
    //         gameResult,
    //         config
    //     ).then(res => {
    //         setState(res.data);
    //         console.log("res.data", res.data);
    //     },
    //         setTimeout(() => {
    //             alert("Buy Chips request sent to admin");
    //             // window.location.reload();
    //         }, 800));



    // }

    // const handelResult = (e) => {
    //     e.preventDefault();
    //     Axios.post(`https://ludo-project-backend.herokuapp.com/api/result/` + props.location.state.id,
    //         gameResult,
    //         config
    //     ).then(res => {
    //         setGameResult(res.data);
    //         window.alert("Result posted Successfully");
    //         console.log("res.data", props.location.state.resStatus);
    //     })
    // }

    return (
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

                        {

                            props.location.state.status ?
                                <div id="roomIdWaiting">
                                    <p>Opponent accepted your Challenge </p>
                                    <input onChange={handleChange} value={state.roomCode} name="roomCode" type="text" id="roomCode" placeholder="RoomCode" />
                                    <div>
                                        <button onClick={handleSubmit} type="submit" className="btn btn-primary waves-effect waves-light">Submit</button>
                                    </div>
                                </div> :
                                <p>No</p>

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
                        <form id="challenge-result-form" className="form-inline">
                            <input className="hidden" name="challengeId" value="gnXEsYaidtSsGsbPBm5OTITOYStHiPjn" />
                            <div className="form-group challenge-result-block">
                                <div className="form-check challengeOptions text-success">
                                    <input className="form-check-input" id="challenge-won" onChange={handleResultChange} type="radio" name="challengeResult" value="won" required="" />
                                    <label className="form-check-label" htmlFor="challenge-won">
                                        I Won
                                    </label>
                                </div>
                                <div className="form-check challengeOptions text-danger">
                                    <input className="form-check-input" id="challenge-lost" onChange={handleResultChange} type="radio" name="challengeResult" value="lost" required="" />
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
                                {/* <div id="cancelReasonBlock" style={{ "display": "none" }}>
                                    <div className="form-group" style={{ "display": "block !important" }}>
                                        <label htmlFor="cancelReason">Cancel Reason</label>
                                        <textarea name="cancelReason" className="form-control" id="cancelReason" rows="2" maxLength="50"></textarea>
                                    </div><br />

                                    <div className="challengeBetween">
                                        <h6 className="card-text text-info">Mention if you have VIDEO PROOF and send it on whatsapp at 9407144049</h6>
                                        <a href="https://wa.me/919407144049" target="_blank">Click Here to send Video.</a>
                                    </div> */}
                            </div>
                            <div id="screenShotBlock">
                                <br />
                                <label>Winning Screen Shot</label>
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="screenshots" onChange={handleResultChange} accept=".png, .jpg, .jpeg" required="" />
                                    <label className="custom-file-label" for="screenShot">Upload</label>
                                </div>
                                <br /><br />
                                <div id="screenShot-upload" style={{ "display": "none;" }} />
                                <img className="img-fluid" alt="Responsive image" /><br />
                            </div>
                            {/* </div> */}
                            <br />
                            <span className="waves-input-wrapper waves-effect waves-light"><input type="submit" value="Post Result" onClick={handelResult} className="btn btn-primary" /></span>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default WonLost
