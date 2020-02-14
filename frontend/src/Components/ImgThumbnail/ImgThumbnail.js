import React from 'react';
import {apiURL} from "../../apiURL";

const ImgThumbnail = props => {
    let image = '';
    if (props.image) {
    image= apiURL + '/uploads/' + props.image;
    if (image === 'http://localhost:8000/uploads/null') {
        return null;
    }
}
    return (
        <img src={image} alt="" className="image"/>
    );
};

export default ImgThumbnail;