import React from 'react';
const UploadForm = ({uploader}) => {
    const handleChange = (e) =>{
        uploader(e.target.files[0])
    }
    return <form>
        <input type="file" accept ="image/*" onChange ={handleChange}/>
    </form>;
}
export default UploadForm;