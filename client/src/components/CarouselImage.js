import React from 'react';

export default function CarouselImage({image, active}) {
    return (
        <div className={active ? "carousel-item active" : "carousel-item"}>
        <img src={image.urls.regular + "&fit=max"} className="d-block w-100" alt={image.alt_description}></img>
            <div className="carousel-caption d-none d-md-block">
            <h1>{image.alt_description}</h1>
            <p><a href={image.user.links.html} target="blank">{image.user.first_name + " " + image.user.last_name}</a></p>
            </div>
        </div>
        
    );
}