import React from 'react'

const ChallengeTable = (props) => {
    console.log('pros', props.data);
    const { data } = props;
    return (
        <div>
            {/* <button className="btn btn-sm btn-warning" onClick={() => props.editTableRecord(data._id)}>play </button> */}

            {data.length > 0 ? data.map((result) => {
                return (
                    <form onSubmit={props.handleUpdateButton}>
                        <ul key={result._id} id="challenge-list" className="list-group">
                            {
                                result.amount > 49 ?
                                    <li id="" className="list-group-item" data-position="50">

                                        <div class="msg_cotainer_top">
                                            <div className="challengeText">
                                                {result.name} have set a Challenge for <span style={{ "background-color": "antiquewhite", "padding": "2px", "display": "inline-block" }}><b>{result.amount}</b></span>
                                            </div>
                                            <div class="challengeButton">
                                                {/* <button type="button" onClick={() => props.editTableRecord(result._id)} className="btn btn-primary btn-sm">Play</button> */}
                                                <button type="button" onClick={() => props.updateChallengeAmount(result._id)} className="btn btn-primary btn-sm">Play</button>
                                            </div>
                                            {/* <li>{result._id}</li> */}
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
