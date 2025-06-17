import React from "react";
import Slider from "react-slick";
import "./testimonialSlider.css";

function TestimonialsSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1055,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      text: "The best salon experience I’ve ever had. Loved the ambience and professionalism!",
      name: "Nitesh Kumar",
    },
    {
      text: "I went for a haircut and came out with a new look and boosted confidence!",
      name: "Sachin Bhanu",
    },
    {
      text: "Their facial service is so relaxing! Highly recommend their organic products.",
      name: "Disha",
    },
  ];

  return (
    <section className="testimonials">
      <h2>What Clients Say</h2>
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial-slide">
            <div className="testimonial-content">
              <blockquote>
                <p>“{item.text}”</p>
                <span>- {item.name}</span>
              </blockquote>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default TestimonialsSlider;
