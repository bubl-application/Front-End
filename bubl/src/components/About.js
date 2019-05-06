import React, { Component } from 'react';
import video from '../assets/VIDEOS/720p.mp4';
import poster from '../assets/PNG/INDIVIDUAL/Group 39poster.png';

class About extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h1 className="innerH1s">About</h1>
              <video
                className="video"
                src={video}
                poster={poster}
                preload
                controls
                loop
              />
              <p className="mainPara">
                Bubl is a social app for elementary school students
                transitioning to middle school. We get it. It's tough! What will
                you wear? Will you see old friends? Make new ones? And the
                teachers and schedules and clubs... it can get super
                overwhelming. But we thought of you when we made it. <br />
                Bubl is a place where you can do all of those things we
                mentioned and more! Sign up, pick your school, find your old
                friends, create Bubl groups on common interests & activities,
                and make new friends! All in all - Bubl's gonna help you live
                your best middle school life!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
