import React from 'react';
import './Style.css';

const Help = () => {
    return (
        <div>
            <div className="row no-gutters justify-content-center">
                <div className="col-10 col-md-4">
                    <br />
                    <div className="card">
                        <div className="card-body">
                            <h3 className="text-align: center;">For any help, watch this video</h3>
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/JJvlsUSipe0?rel=0" allowfullscreen="" ></iframe>
                            </div>
                        </div>
                        <div className="card-body">
                            <h3 className="text-align: center;">For Any Other Query</h3>
                            <p className="text-align: center;">Please contact support at whatsapp (+1234567890)<br />Your query will be solved in <b>within 12 hours</b>.</p>
                            <a href="https://wa.me/1234567890?text=How+To+Play,+Please+Guide+Me" onclick="playAudio('supportAudio');" target="_blank" rel="noreferrer">Click here to contact Admin</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Help
