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
        e.preventDefault();
        console.log(state);
        await fetch("https://ludo-project-backend.herokuapp.com/api/sellchips",
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

    // var token=JSON.parse(localStorage.getItem('login'));
    const config = {
        headers: { 'Authorization': `Bearer ${token.token}` }
    };


    const handleSubmit = (e) => {

        Axios.post(
            'https://ludo-project-backend.herokuapp.com/api/sellchips',
            state,
            config
        ).then(console.log).catch(console.log);

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
                        {/* <div style="display: flex; justify-content: center;"> */}
                        <div>
                            {/* <!-- display: flex;  justify-content: center; align-items: center; --> */}
                            {/* <div style="padding: 5px 10px; border: 2px dotted; border-radius: 10px; margin-right: 10px;"> */}
                            <div>
                                <span className="text-info">Unused Chips:</span><br />
                                <span className="text-success" >0</span>
                            </div>
                            {/* <div style="padding: 5px 10px; border: 2px dotted; border-radius: 10px;"> */}
                            <div>
                                <span className="text-info" >Winning Chips:</span><br />
                                <span className="text-success">0.00</span>
                            </div>
                        </div>
                        <p>Unused Chips cannot be sold, Play and convert to Winning Chips</p>
                        {/* <!-- <p className="text-danger">(PhonePe / Google Pay / UPI ID) will be removed soon.</p> --> */}
                    </div><br />
                    <div className="form-group">
                        <form onSubmit={handleSubmitbutton} method="post">
                            <input id="paytm_no" onChange={handleChange} value={state.paytm_no} type="number" name="paymentNumber" placeholder="Paytm Number" required={true} className="form-control" /><br />
                            <input type="number" onChange={handleChange} value={state.amount} id="amount" name="paymentAmount" placeholder="Chips Amount" required={true} className="form-control" /><br />
                            <span className="waves-input-wrapper waves-effect waves-light"><button type="submit" onClick={handleSubmit} value="Sell" className="btn btn-success">Sell</button></span>
                        </form>
                    </div>
                    <div id="postResponse" className="mssg bg-danger">
                        <span id="check"></span>
                    </div>
                    <hr />
                    <ul id="challenge-list" className="list-group">
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SellChips
