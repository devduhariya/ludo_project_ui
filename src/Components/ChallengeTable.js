import React from 'react'

const ChallengeTable = (props) => {
    console.log('pros', props);
    const { data } = props;
    var token = JSON.parse(localStorage.getItem('login'));
    var phone = token.phone
    console.log("phone", phone)
    return (
        <div>
            {data.length > 0 ? data.map((result) => {
                return (
                    
                    <form >
                        { result.status = "pending"   ?
                        <ul key={result._id} id="challenge-list" className="list-group">
                            {
                                result.amount > 50 || result.amount < 10000 ?
                                    <li id="" className="list-group-item" data-position="50">
                                        <div className="msg_cotainer_top">
                                            {
                                                result.paytm_no === phone ?
                                                    <div className="challengeText">

                                                        You have set a Challenge for <span style={{ "backgroundColor": "antiquewhite", "padding": "2px", "display": "inline-block" }}><b>{result.amount}</b></span>
                                                        </div> :
                                                    <div className="challengeText">

                                                        {result.name} have set a Challenge for <span style={{ "backgroundColor": "antiquewhite", "padding": "2px", "display": "inline-block" }}><b>{result.amount}</b></span>
                                                        </div>
                                            }
                                            <div className="challengeButton">
                                                {
                                                    result.paytm_no === phone ?
                                                        <button type="button" onClick={() => props.viewSetChallenge(result._id,result.status)} className="btn btn-primary btn-sm">View</button>
                                                        :
                                                        <button type="button" onClick={() => props.updateChallengeAmount(result._id, result.amount)} className="btn btn-primary btn-sm">Play</button>

                                                }
                                            </div>

                                        </div>
                                    </li> : null
                            }
                        </ul>:null
            }
                    </form>
                )
            }) : <div>Loading challenges...</div>
            }



        </div>
    )
}

export default ChallengeTable
