import React from 'react';

export default class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemCount: 0,
      currentIndex: 0,
      transform: 0,
      slides: this.props.slides || [],
    };
  }

  componentDidMount() {
    this.startTimer();

    const { slides } = this.props;

    if (slides) {
      this.setItemCount(slides.length);
    }
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
    const { transform } = this.state;
    const { slides } = this.props;

    if (!slides) {
      // no-op
      return <div />;
    }

    return (
      <div className="slider__wrapper">
        <div className="slider">
          <ul className="slides" style={{ transform: `translateX(-${transform}px)`, transition: 'transform ease-out 300ms' }}>
            {slides.map(url => (
              <li className="slide" style={{ backgroundImage: `url('${url}')`, backgroundSize: 'cover' }} />
            ))}
          </ul>
        </div>
        <div className="slider__dots">
          {this.renderDots()}
        </div>
      </div>
    );
  }
}
