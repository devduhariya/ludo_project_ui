import React, { useState } from 'react';
import Axios from 'axios';
const GameResult = () => {
    const [state, setState] = useState({
        result: '',
        screenshots: '',
    })


    var token = JSON.parse(localStorage.getItem('login'));
    // const handleSubmitbutton = async (e) => {
    //     window.location.reload();
    //     e.preventDefault();
    //     console.log(state);
    //     await fetch("https://ludo-project-backend.herokuapp.com/api/results",
    //         {
    //             method: "POST",
    //             headers: {
    //                 "Authorization": `Bearer ` + token.token
    //             },

    //             body: JSON.stringify(state)
    //         }).then(response => {
    //             console.log(response)
    //         }, setState({ ...state, chipsSaved: true }))
    //         .catch(error => {
    //             console.log(error)
    //         })

    // }
    const handleChange = (e) => {
        setState((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }));
    }

    var token = JSON.parse(localStorage.getItem('login'));
    const config = {
        headers: { 'Authorization': `Bearer ${token.token}` }
    };


    const handleSubmit = (e) => {
        Axios.post(
            'https://ludo-project-backend.herokuapp.com/api/result/:id',
            state,
            config
        ).then(console.log).catch(console.log);

    }

    return (
        <div>
            {/* <a href="https://wa.me/917357525272?text=How+To+Play,+Please+Guide+Me" onclick="playAudio('supportAudio');" target="_blank">Click here to post Your Result</a> */}
            <select name="resultBox"
                className="form-control"
            >
                <option value="none" selected={true} hidden={true}>Result</option>
                <option value="hide" onChange={handleChange} >won</option>
                <option value="show" onChange={handleChange} >lost</option>
            </select><br />
            <div className="file-upload text-gray-500">
                <label for="file_upload ">ScreenShots: <span className="hightlight-color"></span></label>
                <input type="file" className="file-input" id="file_upload" />
            </div>
            <span className="waves-input-wrapper waves-effect waves-light"><input onClick={handleSubmit} type="submit" value="Submit" className="btn btn-success" /></span>

        </div>
    )
}

export default GameResult

