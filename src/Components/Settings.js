import React from 'react';
import './Style.css';

const Settings = () => {
    return (
        <div>
            <div className="row no-gutters justify-content-center">
                <div className="col-10 col-md-4">
                    <div>
                        <p className="custom-title">Settings
                        </p>
                    </div>
                    <div className="form-group">
                        <form id="updateForm" method="post">
                            <input type="text" name="username" placeholder="Username" required="" className="form-control" value="" /><br />
                            <span className="waves-input-wrapper waves-effect waves-light"><input type="submit" value="Update" className="btn btn-success" /></span>
                        </form>
                    </div>
                    <div><a href="/changePassword">Change Password</a>
                    </div>
                    <div id="postResponse" className="mssg bg-danger">
                        <span id="check"></span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Settings
