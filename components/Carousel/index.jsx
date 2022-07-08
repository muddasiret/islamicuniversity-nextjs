import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function CarouselGrid({ carouselData }) {
  return (
    <div>
      <Carousel showArrows autoPlay showThumbs={false} showStatus={false}>
        {carouselData.map((carousel, ind) => {
          const imageUrl = carousel.attributes.image.data.attributes.url;
          // const imageUrl =
          //   "https://islamicuniversity.s3.ap-south-1.amazonaws.com/univ_e464f43ae4.jpeg";
          return (
            <div className="relative" key={ind}>
              <div className="imageContainer">
                <img className="carouselImage" src={imageUrl} />
              </div>
              <div className="carouselTexts">
                {carousel.attributes.title && (
                  <p className="carouselTitle">{carousel.attributes.title}</p>
                )}
                {carousel.attributes.description && (
                  <p className="carouselSubtitle">
                    {carousel.attributes.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
