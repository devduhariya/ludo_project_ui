import React,{useState} from 'react';
import Axios from 'axios';



const GameResult = (props) => {
    const [result, setResult] = useState({
        result: '',
        screenshots:''
    })

    const handleChange = (e) => {
        setResult((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }));
    }
    var token = JSON.parse(localStorage.getItem('login'));
    const config = {
        headers: { 'Authorization': `Bearer ${token.token}` }
    };



    const handleSubmit = async(e) => {
         e.preventDefault();
        Axios.post(`https://ludo-project-backend.herokuapp.com/api/result/` + props.location.state.data, result,
            config
        ).then(res => {
            setResult(res.data);
            console.log("res.data", res.data);

        });
    }

    return (
        <div>
           <form onSubmit={handleSubmit} id="set-challenge-form" className="form-inline" >
                <div className="form-group set-challenge-block">
                    <input style={{ float: 'left', marginRight: '1%' }} onChange={handleChange}  name="Result" value={result.result} type="text" className="form-control input-box" id="result" placeholder="Result" />
                    <input  name="Screenshot" value={result.screenshots} onChange={handleChange} type="text" className="form-control input-box" id="screenshots" placeholder="Screenshot" />
                    <button onClick={handleSubmit} style={{ marginLeft: '1%', marginTop: '0.5%' }}  type="submit" className="btn btn-primary waves-effect waves-light">Submit</button>
                </div>

                <ul id="your-challenge-list" className="list-group">
                </ul>
            </form>
        </div>
    )
}

export default GameResult

