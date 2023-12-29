import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Principal3 = () => {
  return (
    <Carousel showArrows={true} infiniteLoop={true} className="carousel-root">
      <div>
        <img src="img/fotosHombre/OIP.jpg" alt=""  />
      </div>
      <div>
        <img src="img/fotosHombre/tendencias-en-cortes-de-pelo-de-hombre-4.jpg" alt=""  />
      </div>
      
    </Carousel>
  )
}

export default Principal3
