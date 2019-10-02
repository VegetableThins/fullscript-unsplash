import React, { Component } from 'react';
import axios from 'axios';
import GalleryImage from './GalleryImage';


export class Gallery extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        images: [],
      };
    }

    componentDidMount(){
        axios.get('/api/photos/random?count=30&orientation=portrait').then(res => {
          this.setState({images: res.data});
          console.log(res.data);
        });
    }

    render(){
        return(
            <section className="Gallery">
                <div className="container">
                    <h1>Gallery</h1>
                    <div className="card-columns">
                    {/* <div className="row"> */}
                    {this.state.images.map((image) => (
                        <GalleryImage key={image.id} image={image}></GalleryImage>
                    ))}
                    {/* </div> */}
                    </div>
                </div>
            </section>
        );
    }

}

export default Gallery;