import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "./index.module.css";

export default function CarouselGrid({ carouselData }) {
  return (
    <div>
      <Carousel showArrows showThumbs={false} showStatus={false}>
        {carouselData.map((carousel, ind) => {
          const imageUrl = carousel.attributes.image.data.attributes.url;
          return (
            <div className="relative" key={ind}>
              <div className={styles.imageContainer}>
                <img className={styles.carouselImage} src={imageUrl} />
              </div>
              <p className={styles.carouselSubtitle}>
                {carousel.attributes.title}
              </p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
