import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './principal.css'
const Principal = () => {
  

  return (
    <Carousel showArrows={true} infiniteLoop={true} className="carousel-root">
      <div>
        <img src="img/fotosMain/1d43da9c81fb1e4f1e6652b0a11d5c41.jpg" alt=""  />
      </div>
      <div>
        <img src="img/fotosMain/047adae1a1219672958d2f4cc94a492e.jpg" alt=""  />
      </div>
      <div>
        <img src="img/fotosMain/f768x1-301460_301587_5050.jpg" alt=""  />
      </div>
    </Carousel>

   
  );
}

export default Principal;