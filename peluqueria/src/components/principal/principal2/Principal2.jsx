import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './principal2.css'
const Principal2 = () => {
  return (
    
       <Carousel showArrows={true} infiniteLoop={true} className="carousel-root">
      <div>
        < img src="img/fotosMujer/1634527142_836_25-kurze-Frisuren-mit-Pony (1) (1).jpg" alt="" />
      </div>
      <div>
        <img src="img/fotosMujer/1634527142_836_25-kurze-Frisuren-mit-Pony (2).jpg" alt=""  />
      </div>
      <div>
        <img src="img/fotosMujer/cortes-de-pelo-corto-mujer-2021_60f33986_1280x1828 (1).jpg" alt=""  />
      </div>
    </Carousel>
    
  )
}

export default Principal2
