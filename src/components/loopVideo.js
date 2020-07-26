import React, { Component } from "react";
const whitelist = [
  "01videoprojektabgabefrancasidler11.mp4",
  "ovum4-konvertiert.mov",
];

class LoopVideo extends Component {
  check = (name) => {
    if (whitelist.includes(name)) return true;
  };

  render() {
    return (
      <>
        <video
          className="work__content__video"
          autoPlay
          muted={!this.check(this.props.name)}
          controls={this.check(this.props.name)}
          controlsList="nodownload"
          playsinline
          loop
          poster={this.props.video.poster}
        >
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
