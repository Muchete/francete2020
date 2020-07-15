import React, { Component } from "react";

class LoopVideo extends Component {
  render() {
    return (
      <>
        <video className="work__content__video" autoPlay muted loop>
          {/* <source
            type="video/mp4"
            src={this.props.video.high}
            media="all and (max-width:640px)"
          />
          <source
            type="video/mp4"
            src={this.props.video.medium}
            media="all and (max-width:960px)"
          /> */}
          <source type="video/mp4" src={this.props.video.high} />
        </video>
      </>
    );
  }
}

export default LoopVideo;
