import React, { Component } from 'react';

class Team extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h1 className="innerH1s">Meet The Team</h1>
              <p className="mainPara">
                These are the great folks on the Bubl team that made this app a
                reality. We made it with love and had a ton of fun too. Some of
                us are parents, others aren't. But we all remember what it felt
                like when it was time to go to a new school, new teachers, new
                kids, and all the new <em>work</em> ! So we made Bubl to help
                you out a little (hopefully a lot!)
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
