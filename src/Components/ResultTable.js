import React from 'react'

const ResultTable = (props) => {
    // console.log('pros', props.data);
    const { data } = props;
    return (
        <div>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Amount</th>
                        <th>User1</th>
                        <th>User1 Status</th>
                        
                        <th>User1 Screenshot</th>
                       
                        <th>User 2</th>
                        <th>User2 Status</th>
                        <th>User2 Screenshot</th>
                        <th colSpan="2" className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data.length > 0 ? data.map((result, index) => {
                            const date = new Date(result.addedDate);
                            const dt = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
                            let time = date.toLocaleTimeString();
                            return (
                                <tr key={index}>
                                    <td>{result.challengeAmount}</td>
                                    {result.user1.map((phone, index) => {
                                        return (
                                            <React.Fragment>
                                                <td key={index}>{phone.user1}</td>
                                                <td>Won:{phone.won}</td>
                                                <td>{phone.screenshots}</td>

                                            </React.Fragment>
                                        )
                                    })}

                                    {result.user2.map((phone1, index) => {
                                        return (
                                            <React.Fragment>
                                                <td key={index}>{phone1.user2}</td>
                                                <td>Won:{phone1.won}</td>
                                                
                                                <td>{phone1.screenshots}</td>

                                            </React.Fragment>
                                        )
                                    })}

                                    <td><button type="button" onClick={() => props.updateChallengeAmount(result._id)} className="btn btn-primary btn-sm">Verify</button></td>
                                    <td><button className="btn btn-sm btn-danger" onClick={() => props.updateState(result._id)}>Reject </button></td>
                                </tr>
                            )
                        }) : <div>fetching Data</div>

                    }
                </tbody>
            </table>
        </div>
    )
}

export default ResultTable
