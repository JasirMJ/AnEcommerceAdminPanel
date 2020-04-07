import React, { Component } from 'react'
import ImgsViewer from 'react-images-viewer'
import {
    Magnifier,
    GlassMagnifier,
    SideBySideMagnifier,
    PictureInPictureMagnifier,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION
  } from "react-image-magnifiers";

export default class App extends Component {
    render() {
        return (
            <div>
                
                <Magnifier
                    imageSrc="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528_1280.jpg"
                    imageAlt="Example"
                    largeImageSrc="./large-image.jpg" // Optional
                    mouseActivation={MOUSE_ACTIVATION.DOUBLE_CLICK} // Optional
                    touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP} // Optional
                    />
            </div>
        )
    }
}
