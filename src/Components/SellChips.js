import React, { useState } from 'react'
import './Style.css';
import Axios from 'axios';


const SellChips = () => {
    const [state, setState] = useState({
        paytm_no: null,
        amount: null
    })
    const handleChange = (e) => {
        setState((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }));
    }

    var token = JSON.parse(localStorage.getItem('login'));
    const handleSubmitbutton = async (e) => {
        window.location.reload();
        e.preventDefault();
        console.log(state);
        await fetch("https://ludo-project-backend.herokuapp.com/api/sellChips",
            {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ` + token.token
                },

                body: JSON.stringify(state)
            }).then(response => {
                console.log(response)
            }, setState({ ...state }))
            .catch(error => {
                console.log(error)
            })

    }

    var token = JSON.parse(localStorage.getItem('login'));
    const config = {
        headers: { 'Authorization': `Bearer ${token.token}` }
    };


    const handleSubmit = async(e) => {
        e.preventDefault();
        Axios.post(
            'https://ludo-project-backend.herokuapp.com/api/sellChips',
            state,
            config
        ).then(res=>{
            setState(res.data);
            console.log("res.data", res.data);
        });

    }

    return (
        <div>
            <div className="row no-gutters justify-content-center">
                <div className="col-10 col-md-6">
                    <div>
                        <p className="custom-title">Sell Chips<br /><span className="text-info">(1Chip = 1Rupee)</span></p>
                        <p className="text-primary">(Processing Timing: 06:00 PM)</p>
                        {/* <div style="padding: 5px; border: 2px dotted; border-radius: 10px;"> */}
                        <div>
                            <p className="text-info blink" >Only <span className="text-dark"><b>2 request</b></span> allowed per day.</p>
                            <p className="text-info blink" >एक दिन में सिर्फ <span className="text-dark"><b>2 रिकवेस्ट</b></span> ही ली जाएगी |</p>
                        </div><br />
                        
                       
                    </div><br />
                    <div className="form-group">
                        <form onSubmit={handleSubmit} method="post">
                            <input id="paytm_no" onChange={handleChange} value={state.paytm_no} type="number" name="paymentNumber" placeholder="Paytm Number" required={true} className="form-control" /><br />
                            <input type="number" onChange={handleChange} value={state.amount} id="amount" name="paymentAmount" placeholder="Chips Amount" required={true} className="form-control" /><br />
                            <span className="waves-input-wrapper waves-effect waves-light"><button type="submit" onClick={handleSubmit} value="Sell" className="btn btn-success">Sell</button></span>
                        </form>
                    </div>
                    <div id="postResponse" className="mssg bg-danger">
                        <span id="check"></span>
                    </div>
                    <ul id="challenge-list" className="list-group">
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SellChips
