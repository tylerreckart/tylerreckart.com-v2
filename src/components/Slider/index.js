import React from 'react';

export default class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemCount: 0,
      currentIndex: 0,
      transform: 0,
      slides: [],
    };
  }

  componentDidMount() {
    const slider = document.querySelector('.slides');
    const slides = Array.from(slider.children);

    this.setItemCount(slides.length);
    this.setState({ slides });
    this.startTimer();
  }

  startTimer() {
    setTimeout(() => {
      this.goToNextSlide();
      this.startTimer();
    }, 8000);
  }

  setItemCount(itemCount) {
    this.setState({ itemCount });
  }

  goToPrevSlide() {
    // do something
  }

  goToNextSlide() {
    const { currentIndex, itemCount } = this.state;
    const nextIndex = currentIndex + 1 > itemCount - 1 ? 0 : currentIndex + 1;
    const transform = nextIndex * 800;

    this.setState({
      currentIndex: nextIndex,
      transform,
    });
  }

  goToSlide(index) {
    const transform = index * 800;

    this.setState({ currentIndex: index, transform });
  }

  renderDots() {
    const { slides } = this.state;
    const { currentIndex } = this.state;

    return slides.map((slide, i) => (
      <div
        className={`dot ${i === currentIndex ? 'active' : ''}`}
        onClick={() => this.goToSlide(i)}
       />
    ));
  }

  render() {
    console.log(this.state);
    const { transform } = this.state;

    return (
      <div className="slider__wrapper">
        {/* <div className="slider__controls">
          <div className="next-arrow" />
          <div className="play-pause__button" />
          <div className="prev-arrow" />
        </div> */}
        <div className="slider">
          <ul className="slides" style={{ transform: `translateX(-${transform}px)`, transition: 'transform ease-out 300ms' }}>
            <li className="slide" />
            <li className="slide" style={{ backgroundColor: 'green'}} />
            <li className="slide" style={{ backgroundColor: 'yellow' }}/>
            <li className="slide" style={{ backgroundColor: 'blue' }} />
            <li className="slide" style={{ backgroundColor: 'red' }} />
          </ul>
        </div>
        <div className="slider__dots">
          {this.renderDots()}
        </div>
      </div>
    );
  }
}
