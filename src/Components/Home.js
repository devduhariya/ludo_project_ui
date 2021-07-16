import './Style.css';
import React from 'react';
const Home = () => {
    return (
        <div>
            <div className="row no-gutters justify-content-center">
                <div className="col-10 col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <p style={{ "-webkit-text-align": "center", "text-align": "center" }}>
                            </p><h4>Please <a href="\login">login</a> to play now.</h4>
                            <p />
                            <img className="img-fluid" alt="Responsive image" src="https://www.ludokhelo.com/images/ludo.png" /><br /><br />
                            {/* <h3 style="text-align: center;">Not an user?</h3>
                            <p style="text-align: center;">
                                <h4>Click <a href="\register">here</a> to register now.</h4>
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <br>
      <div class="row justify-content-center">
          <div class="col-10 col-md-6">
              <div class="card">
                  <div class="card-body">
                      <h3 style="text-align: center; color: red">Win ₹20000 daily.</h3>
                      <p style="text-align: center;">You can win more than ₹20000 daily by just playing Ludo.</p>
                      <p style="text-align: center;">
                          <h6>Please <a href="\login">login</a> to play now.</h6>
                      </p>
                      <p style="text-align: center;">
                          <h4>Don't have a account, <a href="\register">register</a> to play now.</h4>
                      </p>
                      <p>For any help, watch this video</p>
                      <div class="embed-responsive embed-responsive-16by9">
                          <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/JJvlsUSipe0?rel=0" allowfullscreen></iframe>
                      </div>
                  </div>
                  <div class="card-body">
                      <p style="text-align: center;">
                          <h4>Please <a href="\login">login</a> to play now.</h4>
                      </p>
                      <h3 style="text-align: center;">For Any Other Query</h3>
                      <p style="text-align: center;">Please contact support at whatsapp (+919407144049)</p>
                      <a href="https://wa.me/919407144049?text=How+To+Play,+Please+Guide+Me" target="_blank">Click here to contact Admin</a>
                  </div>
              </div>
          </div>
      </div> */}
            {/* <audio id="playAudio" style={{ "display": "none" }} controls>
                <source src="./audio/play.mp3" type="audio/mpeg" />
            </audio>
            <audio id="challengeAcceptedAudio" style={{ "display": "none" }} controls>
                <source src="./audio/challengeAccepted.mp3" type="audio/mpeg" />
            </audio> */}
            {/* Global site tag (gtag.js) - Google Analytics */}
        </div>

    )
}

export default Home

