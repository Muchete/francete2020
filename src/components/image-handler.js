import React, { Component } from "react";
import Img from "gatsby-image";
import LoopVideo from "../components/loopVideo";

class ImageHandler extends Component {
  content = (item) => {
    if (item.video) {
      return (
        <LoopVideo
          name={item.filename}
          video={item.video}
          className={this.props.cn + " cover__vid"}
        />
      );
    } else if (item.url.substr(item.url.length - 3) === "gif") {
      return (
        <div className={this.props.cn + " wrapper__gif cover__gif"}>
          <div>
            <img src={item.url} />
          </div>
        </div>
      );
    } else {
      return (
        <Img sizes={item.sizes} className={this.props.cn + " cover__img"} />
      );
    }
  };

  render() {
    if (this.props.content) {
      return this.content(this.props.content);
    } else return null;
  }
}

export default ImageHandler;
