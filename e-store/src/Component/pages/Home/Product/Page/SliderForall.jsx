import { Box } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SingleSlider from "./SingleSlider/SigleSlider";
export default function SliderForAll({ sliderimg, size = 2 }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: size,
      slidesToSlide: size, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}

        showDots={true}


        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-10-px"
      >
        {sliderimg.map((ele) => {
          return (
            <Box >
              <SingleSlider ele={ele} />
            </Box>
          );
        })}
      </Carousel>
    </>
  );
}
