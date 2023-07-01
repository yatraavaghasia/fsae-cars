import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carousel.css';
function CarouselComponent() {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const slides = [
    {
      id: 1,
      image: '/images/image1.jpg',
      name: 'Car 1',
      description: 'This is the description for Car 1.',
    },
    {
      id: 2,
      image: '/images/image2.jpg',
      name: 'Car 2',
      description: 'This is the description for Car 2.',
    },
    {
        id: 3,
        image: '/images/image3.jpg',
        name: 'Car 3',
        description: 'This is the description for Car 3.',
      },
    ];
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (
    <div className="carousel-wrapper">
        <Carousel
      selectedItem={activeSlide}
      onChange={(slideIndex) => setActiveSlide(slideIndex)}
      autoPlay={true} // Set it to true if you want the carousel to auto-play on load
      infiniteLoop={true}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      dynamicHeight={false}
      useKeyboardArrows={false}
    >
      {slides.map((slide) => (
          <div key={slide.id}>
            <img src={slide.image} alt={slide.name} />
            <div className="slide-content">
              <h2 className="car-name">{slide.name}</h2>
              <p className="car-description">{slide.description}</p>
            </div>
          </div>
        ))}
    </Carousel>
    </div>
  );
}
export default CarouselComponent;
