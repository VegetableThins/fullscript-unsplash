import React from 'react';

export default function GalleryImage({image}) {
    return (
        <div className="card">
            <a href={image.links.html} target="blank">
            <img src={image.urls.regular + "&fit=max"} className="card-img-top" alt={image.alt_description}></img>
            </a>
            <div className="card-body">
                <a href={image.user.links.html} target="blank">
                    <h5 className="card-title">{image.user.first_name + " " + image.user.last_name}</h5>
                </a>
                <p className="card-text">{image.alt_description}</p>
                <p className="card-text"><small className="text-muted">{image.exif.model}</small></p>
            </div>
        </div>
    );
}