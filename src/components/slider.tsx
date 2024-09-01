import React from "react";
import Slider, { type Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <Slider {...settings}>
            <div className="w-full h-40 bg-primary text-white">
                <h3>1</h3>
            </div>
            <div className="w-full h-40 bg-primary text-white">
                <h3>2</h3>
            </div>
            <div className="w-full h-40 bg-primary text-white">
                <h3>3</h3>
            </div>
            <div className="w-full h-40 bg-primary text-white">
                <h3>4</h3>
            </div>
            <div className="w-full h-40 bg-primary text-white">
                <h3>5</h3>
            </div>
            <div className="w-full h-40 bg-primary text-white">
                <h3>6</h3>
            </div>
        </Slider>
    );
}