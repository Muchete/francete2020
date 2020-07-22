import React, { Component } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import LoopVideo from "../components/loopVideo";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      totalSlides: this.props.data.allDatoCmsWork.edges.length - 1,
    };
  }

  content(item) {
    if (item.video) {
      return <LoopVideo video={item.video} className="cover" />;
    } else {
      return <Img sizes={item.sizes} className="cover" />;
    }
  }

  setSlide(n) {
    this.setState({ currentSlide: this.state.currentSlide + n });
    if (this.state.currentSlide < 0) {
      this.setState({ currentSlide: 0 });
    } else if (this.state.currentSlide > this.state.totalSlides) {
      this.setState({ currentSlide: this.state.totalSlides });
    }
  }

  render() {
    let Slide = () => {
      console.log("slide: " + this.state.currentSlide);
      let work = this.props.data.allDatoCmsWork.edges[this.state.currentSlide]
        .node;

      return (
        <div key={work.id} className="showcase__item">
          <Link to={`/${work.slug}`} className="card__image">
            {this.content(work.coverImage)}
          </Link>
        </div>
      );
    };

    let RenderControls = () => {
      return (
        <>
          {this.state.currentSlide !== 0 && (
            <button
              className="controls controls__left"
              onClick={() => this.setSlide(-1)}
            />
          )}
          {this.state.currentSlide !== this.state.totalSlides && (
            <button
              className="controls controls__right"
              onClick={() => this.setSlide(1)}
            />
          )}
        </>
      );
    };

    return (
      <div className="option_mouse">
        <div className="showcase">
          <div className="showcase__middle">
            <Slide />
          </div>
          <RenderControls />
        </div>
      </div>
    );
  }
}

export default Slider;
