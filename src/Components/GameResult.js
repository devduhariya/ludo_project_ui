import React from 'react'

const GameResult = () => {
    return (
        <div>
            <a href="https://wa.me/917357525272?text=How+To+Play,+Please+Guide+Me" onclick="playAudio('supportAudio');" target="_blank">Click here to post Your Result</a>
        </div>

        // <div>
        //     {/* <a href="https://wa.me/917357525272?text=How+To+Play,+Please+Guide+Me" onclick="playAudio('supportAudio');" target="_blank">Click here to post Your Result</a> */}
        //     <select name="resultBox"
        //         className="form-control"
        //     >
        //         <option value="none" selected={true} hidden={true}>Result</option>
        //         <option value="hide" onChange={handleChange} >won</option>
        //         <option value="show" onChange={handleChange} >lost</option>
        //     </select><br />
        //     <div className="file-upload text-gray-500">
        //         <label for="file_upload ">ScreenShots: <span className="hightlight-color"></span></label>
        //         <input type="file" className="file-input" id="file_upload" />
        //     </div>
        //     <span className="waves-input-wrapper waves-effect waves-light"><input onClick={handleSubmit} type="submit" value="Submit" className="btn btn-success" /></span>

        // </div>
    )
}

export default GameResult





// import React,{useState} from 'react';
// import Axios from 'axios';



// const GameResult = (props) => {
//     const [result, setResult] = useState({
//         result: '',
//         screenshots:''
//     })

//     const handleChange = (e) => {
//         setResult((prevState) => ({
//             ...prevState,
//             [e.target.id]: e.target.value
//         }));
//     }
//     var token = JSON.parse(localStorage.getItem('login'));
//     const config = {
//         headers: { 'Authorization': `Bearer ${token.token}` }
//     };
    
//     // const handleSubmitbutton = async (e) => {
//     //     e.preventDefault();
//     //     console.log(result);
//     //     await fetch(`https://ludo-project-backend.herokuapp.com/api/result/` + props.location.state.data,
//     //         {
//     //             method: "POST",
//     //             config,
//     //             body: JSON.stringify(result)
//     //         }).then(response => {
//     //             console.log(response)
//     //         })

//     //         .catch(error => {
//     //             console.log(error)
//     //         })
//     // }

   
//     const handleSubmit = async(e) => {
//          e.preventDefault();
//         //     Axios.post(
//         //         `https://ludo-project-backend.herokuapp.com/api/result/` + props.location.state.data,
//         //         config,
//         //         result,
//         //     ).then(console.log).catch(console.log);
//         //window.location.reload();

//         Axios.post(`https://ludo-project-backend.herokuapp.com/api/result/` + props.location.state.data, result,
//             config
//         ).then(res => {
//             setResult(res.data);
        
//             //window.location.reload()
//             console.log("res.data", res.data);
//             // console.log("res.data",res.data._id);

//         });
//     }
    
//     return (
//         <div>
//            <form onSubmit={handleSubmit} id="set-challenge-form" className="form-inline" >
//                 <div className="form-group set-challenge-block">
//                     <input style={{ float: 'left', marginRight: '1%' }} onChange={handleChange}  name="Result" value={result.result} type="text" className="form-control input-box" id="result" placeholder="Result" />
//                     <input  name="Screenshot" value={result.screenshots} onChange={handleChange} type="text" className="form-control input-box" id="screenshots" placeholder="Screenshot" />
//                     <button onClick={handleSubmit} style={{ marginLeft: '1%', marginTop: '0.5%' }}  type="submit" className="btn btn-primary waves-effect waves-light">Submit</button>
//                 </div>

//                 <ul id="your-challenge-list" className="list-group">

//                 </ul>
//                 {/* <ChallengeTable data={data}
//                     updateChallengeAmount={updateChallengeAmount}
//                 /> */}
//             </form>
//         </div>
//     )
// }

// export default GameResult

