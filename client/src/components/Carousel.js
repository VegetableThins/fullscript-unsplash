import React, { Component } from 'react';
import axios from 'axios';
import CarouselImage from './CarouselImage';

export class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };
  }

  componentDidMount(){
    axios.get('/api/photos/random?count=5&orientation=landscape').then(res => {
      this.setState({images: res.data});
      console.log(res.data);
    });
    // this.setState({image: res.data})
  }

  render() {
    return (
      <section className="Carousel">
          <div id="carouselCaptions" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators">
            {this.state.images.map((image) => (
              <li data-target="#carouselCaptions" data-slide-to={this.state.images.indexOf(image)} className={this.state.images.indexOf(image) === 0 ? "active" : ""}></li>
            ))}
            </ol>
            <div className="carousel-inner">
              {this.state.images.map((image) => (
                <CarouselImage key={image.id} image={image} active={this.state.images.indexOf(image) === 0 ? true : false}></CarouselImage>
              ))}
            </div>
            <a className="carousel-control-prev" href="#carouselCaptions" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselCaptions" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
      </section>
    );
  }
}

export default Carousel;
