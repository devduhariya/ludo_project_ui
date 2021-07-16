import Axios from 'axios';
import React,{useState} from 'react';
import './Style.css';

const Query = () => {

    const[state,setState] = useState({
        whatsapp:null,
        paytm:null,
        txn_Id:'',
        reciver_Paytm:null,
        amount:null,
        message:'',
        screenshots:'',
        
    })

   

    const[query,setQuery] = useState({
        value:'show',
    });

    const handleChange = (e)=>{
        setState((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }));
    }
    const onDropdownChange = (e) =>{
       setQuery({value:e.target.value})
    }

   
    var token=JSON.parse(localStorage.getItem('login'));
    const handleSubmitbutton = async(e) =>{
        e.preventDefault();
        console.log(state);
        await fetch("http://localhost:9000/api/query", 
        {                   
            method:"POST",
                headers:{
                "Authorization" :`Bearer ` + token.token
                },
            body:JSON.stringify(state)
        }).then(response=>{
            console.log(response)
            window.alert("Query saved");
          
        }, setState({...state,querySaved:true}))
        .catch(error=>{
            console.log(error)
        })

    }

    var token=JSON.parse(localStorage.getItem('login'));
    const config = {
        headers: { 'Authorization': `Bearer ${token.token}` }
    };
    
    
    const handleSubmit = (e) => {
        e.preventDefault();

        
        Axios.post( 
            'http://localhost:9000/api/query',
            state,
            config
          ).then(window.alert("Query saved successfully")).catch(console.log);
          }
    
    return (
        <div>
            <div className="row no-gutters justify-content-center">
                <div className="col-10 col-md-6">
                    <div>
                        <p className="custom-title">Raise Query</p>
                    </div>
                    <div className="form-group">
                        <form   method="post" onSubmit={handleSubmitbutton}>
                            <select name="complainSubject"
                             className="form-control"
                             onChange={onDropdownChange}

                             >
                                <option value="none" selected={true} hidden={true}>Select Subject</option>
                                <option value="hide" >Problem In Buy Chips</option>
                                <option value="show" >Wrong Challenge Result</option>
                            </select><br />
                            <input id="whatsapp" className="form-control" onChange={handleChange} value={state.whatsapp} type="text" name="whatsappNumber" placeholder="Your Whatsapp Number" minlength="10" maxlength="10"  required="" /><br />
                            <div className={query.value=='hide'?'show' : 'hide'} id="buyChipsBox">
                                <input type="number" id="paytm" onChange={handleChange} value={state.paytm} name="paytm" placeholder="Your Paytm Number" minLength="10" maxLength="10" className="form-control" /><br />
                                <input type="number" id="reciver_Paytm"  onChange={handleChange} value={state.reciver_Paytm} name="reciver_Paytm" placeholder="Receiver Paytm Number" minLength="10" maxLength="10" className="form-control" /><br />
                                <input type="text" id="txn_Id"  onChange={handleChange} name="txnId" value={state.txn_Id} placeholder="txn_Id ID" minLength="5" maxLength="30" className="form-control" /><br />
                                <input type="number" id="amount"  onChange={handleChange} name="amount" value={state.amount} placeholder="Amount" max="100000" className="form-control" /><br />
                            </div>
                            {/* <div className={query.value=='show'?'show' : 'hide'} id="challengeBox">
                                <select name="challengeId" className="form-control">
                                    <option value="none" selected="" hidden="">Select Challenge</option>
                                </select><br />
                            </div>   */}
                            <textarea id="message"  name="message" value={state.message} onChange={handleChange} placeholder="Define Your Problem" className="form-control" rows="4" minLength="10" maxLength="200" required=""></textarea><br />
                            <div className="form-group custom-file">
                                <input id="screenshots" name="screenshots"  onChange={handleChange} value={state.screenshots}  type="text" className="form-control" /><br />
                                {/* <Input valuscreenshotse={screenshots} id="screenShot" type="file" className="custom-file-input" accept=".png, .jpg, .jpeg" /><br /> */}
                                <label id="screenShotLabel" className="custom-file-label">Upload Screenshot</label><br />
                            </div>
                            <span className="waves-input-wrapper waves-effect waves-light"><input onClick={handleSubmit} type="submit" value="Raise Ticket" className="btn btn-success" /></span>
                            <div id="screenShot-upload" className="display: none;">
                                {/* <img className="img-fluid" alt="Responsive image" /><br /> */}
                            </div>
                        </form>
                    </div>
                    <div id="postResponse" className="mssg bg-danger">
                        <span id="check"></span>
                    </div>
                    {/* <a href="/supporthistory">Click Here To Check Solved Queries!</a> */}
                    <hr />
                    <ul id="challenge-list" className="list-group">

                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Query
