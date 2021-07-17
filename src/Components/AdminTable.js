import React, { useState, useEffect } from 'react'

const Admintable = (props) => {
    console.log('pros', props.data);
    const { data } = props;


    return (
        <div>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Paytm_no</th>
                        <th>Purchased Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Txn_ID</th>
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
                                    <td>{result.paytm_no}</td>
                                    <td>{dt + " || " + time}</td>
                                    <td>{result.amount}</td>
                                    <td>{result.status}</td>
                                    <td>{result.txn_ID}</td>
                                    <td><button type="button" onClick={() => props.updateChallengeAmount(result._id)} className="btn btn-primary btn-sm">Verify</button></td>
                                    <td><button className="btn btn-sm btn-danger" onClick={() => props.rejectRequest(result._id)}>Reject </button></td>
                                </tr>
                            )
                        }) : <div>fetching Data</div>

                    }
                </tbody>
            </table>
        </div>

    )
}

export default Admintable
