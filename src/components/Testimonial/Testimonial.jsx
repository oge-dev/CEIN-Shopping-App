import React, { useState } from "react";
import "./Testimonials.css";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Megan from "../../assets/Megen.png";
import James from "../../assets/James.png";

const testimonials = [
  {
    image: James,
    text:
      "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    name: "James K.",
    role: "Traveler",
    rating: 5,
  },
  {
    image: James,
    text:
      "Your product is amazing. I have no words to describe how grateful I am. Absolutely love it!",
    name: "Megen  W.",
    role: "Designer",
    rating: 4,
  },
  {
    image: Megan,
    text:
      "Excellent product! It has exceeded my expectations in every way. Highly recommended!",
    name: "Susan D.",
    role: "Developer",
    rating: 5,
  },
];

const Testimonial = ({ image, text, name, role, rating }) => {
  return (
    <div className="testimonial">
      <img src={image} alt={name} className="testimonial-image" />
      <div>
        <p className="testimonial-text">"{text}"</p>
        <div className="testimonial-rating">
          {"★".repeat(rating)}
          {"☆".repeat(5 - rating)}
        </div>
        <hr className="hr" />
        <div className="testimonial-author">
          <h4>{name}</h4> <p>{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials">
      <h2>This Is What Our Customers Say</h2>
      <p className="sub-title">
        Learn ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
        dui.
      </p>
      <div className="testimonial-container">
        <Testimonial {...testimonials[current]} />
      </div>
      <div className="testimonial-controls">
        <button className="testimonial-prev" onClick={prevTestimonial}>
          <IoIosArrowDropleft />
        </button>
        <button className="testimonial-next" onClick={nextTestimonial}>
          <IoIosArrowDropright />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;

