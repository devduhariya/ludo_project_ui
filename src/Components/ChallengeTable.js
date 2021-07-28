import React from 'react'

const ChallengeTable = (props) => {
    console.log('pros', props.data);
    const { data } = props;
    return (
        <div>
            {data.length > 0 ? data.map((result) => {
                return (
                    <form >
                        <ul key={result._id} id="challenge-list" className="list-group">
                            {
                                result.amount > 50 || result.amount < 10000 ?
                                    <li id="" className="list-group-item" data-position="50">
                                        <div class="msg_cotainer_top">
                                            <div className="challengeText">
                                                {result.name} have set a Challenge for <span style={{ "background-color": "antiquewhite", "padding": "2px", "display": "inline-block" }}><b>{result.amount}</b></span>
                                                &nbsp;   room code-<b>{result.roomCode}</b></div>
                                            <div class="challengeButton">
                                                <button type="button" onClick={() => props.updateChallengeAmount(result._id,result.amount,result.roomCode)} className="btn btn-primary btn-sm">Play</button>
                                            </div>
                                        </div>
                                 </li> : null
                            }
                        </ul>
                    </form>
                )
            }) : <div>Loading challenges...</div>
            }



        </div>
    )
}

export default ChallengeTable
