import React, { useState } from 'react';
import Axios from 'axios';
import './Style.css';


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
        await fetch("https://ludo-project-backend.herokuapp.com/api/buyChips",
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


    const handleSubmit = async(e) => {
        e.preventDefault();
        Axios.post(
            'https://ludo-project-backend.herokuapp.com/api/sellChips',
            state,
            config
        ).then(res=>{
            setState(res.data);
            console.log("res.data", res.data);
        },
    
        setTimeout(() => {
            alert("Sell Chips request sent to admin");
        window.location.reload();
        },500));

    }

    return (
        <div>
            <div className="row no-gutters justify-content-center">
                <div className="col-10 col-md-4">
                    <div>
                        <p className="custom-title">Sell Chips<br /><span className="text-info">(1Rupee = 1Chip)</span></p>
                        <p>Pay via Paytm Wallet Only</p>
                        <p className="text-danger">Don't pay through Bank (You will lose your money).</p>
                        <p>Please pay at this number only <span><b>7357525272</b></span>, and enter wallet Transcation Id.<br />
                            <a href="/help/loadbalance">Help</a></p>
                    </div>

                    <div className="form-group">

                        <form id="loadBalance" onSubmit={handleSubmit} method="post">
                            <div className="input-group mb-3">
                                <input id="paymentNumber" type="number" className="form-control" name="paytm_no" placeholder="Enter Receiver Paytm Number..." readOnly={true} value="7357525272" />
                                <div className="input-group-append">
                                    <button id="copyButton" className="btn btn-outline-secondary waves-effect waves-light" type="button">Copy</button>
                                </div>
                            </div>
                            <div id="yourPaytmNumber" className="input-group mb-3">
                                <input type="number" id="paytm_no" onChange={handleChange} value={state.paytm_no} placeholder="Enter Your Paytm Number..." className="form-control" />
                            </div>

                            {/* <div className="input-group mb-3">
                                <input type="text" onChange={handleChange} value={state.txn_ID} id="txn_ID" name="txnId" placeholder="Transcation ID" required="" className="form-control" />
                            </div> */}
                            <div className="input-group mb-3">
                                <input type="number" onChange={handleChange} value={state.amount} id="amount" name="amount" placeholder="Amount" required="" className="form-control" step="0.01" />
                            </div>
                            <span className="waves-input-wrapper waves-effect waves-light"><input onClick={handleSubmit} type="submit" value="Load" className="btn btn-success" /></span>
                        </form>
                        <div id="postResponse" className="mssg bg-danger">
                            <span id="check"></span>
                        </div>
                        Paid at another number? Don't worry just <a href="javascript:$('#paymentNumber').attr('readonly', false).val('');$('#copyButton').fadeOut();$('#yourPaytmNumber').fadeIn();playAudio('manualLoad');">click here.</a>
                        <br /><br />
                        If your <u>Transaction Id</u> is not matching. Don't worry, please <a href="https://wa.me/917357525272?text=My+Transaction+Id+is+not+matching.+My+account+number+is+7357525272" onclick="playAudio('supportAudio');" target="_blank">click here</a> to contact admin or whatsapp your complaint at (+917357525272). Your query will be solved in within 12 hours.
                    </div>

                    <br />
                </div>
            </div>
        </div>
    )
}

export default SellChips




// import React, { useState } from 'react'
// import './Style.css';
// import Axios from 'axios';


// const SellChips = () => {
//     const [state, setState] = useState({
//         paytm_no: 0,
//         amount: 0
//     })
//     const handleChange = (e) => {
//         setState((prevState) => ({
//             ...prevState,
//             [e.target.id]: e.target.value
//         }));
//     }

   

//     var token = JSON.parse(localStorage.getItem('login'));
//     const config = {
//         headers: { 'Authorization': `Bearer ${token.token}` }
//     };


//     const handleSubmit = async(e) => {
//         e.preventDefault();
//         Axios.post(
//             'https://ludo-project-backend.herokuapp.com/api/sellChips',
//             state,
//             config
//         ).then(res=>{
//              setState(res.data); 
//             console.log("res.data", res.data);
//         });

//     }

//     return (
//         <div>
//             <div className="row no-gutters justify-content-center">
//                 <div className="col-10 col-md-6">
//                     <div>
//                         <p className="custom-title">Sell Chips<br /><span className="text-info">(1Chip = 1Rupee)</span></p>
//                         <p className="text-primary">(Processing Timing: 06:00 PM)</p>
//                         <div>
//                             <p className="text-info blink" >Only <span className="text-dark"><b>2 request</b></span> allowed per day.</p>
//                             <p className="text-info blink" >एक दिन में सिर्फ <span className="text-dark"><b>2 रिकवेस्ट</b></span> ही ली जाएगी |</p>
//                         </div><br />
                       
//                     </div><br />
//                     <div className="form-group">
//                         <form onSubmit={handleSubmit} method="post">
//                             <input id="paytm_no" onChange={handleChange} value={state.paytm_no} type="number" name="paymentNumber" placeholder="Paytm Number" required={true} className="form-control" /><br />
//                             <input type="number" onChange={handleChange} value={state.amount} id="amount" name="paymentAmount" placeholder="Chips Amount" required={true} className="form-control" /><br />
//                             <span className="waves-input-wrapper waves-effect waves-light"><button type="submit" onClick={handleSubmit} value="Sell" className="btn btn-success">Sell</button></span>
//                         </form>
//                     </div>
//                     <div id="postResponse" className="mssg bg-danger">
//                         <span id="check"></span>
//                     </div>
//                     <ul id="challenge-list" className="list-group">
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default SellChips
