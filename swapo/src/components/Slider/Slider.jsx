import './slider.css'
import {Carousel} from "react-bootstrap"
function Slider() {
    return (
        <>
<Carousel fade style={{'backgroundColor':'#006E89'}}>
  <Carousel.Item >
    <img
    style={{'height':400,'opacity':'0.9'}}
      className="d-block w-100"
      src="https://www.swapify.ca/assets/images/add_item.svg"
      alt="First slide"
    />
    <Carousel.Caption>

      <h3  className='slider-title'>Add service to your SWAPO profile page </h3>
      <p className='slider-p' >Step 1</p>
    </Carousel.Caption >
  </Carousel.Item>
  <Carousel.Item >
    <img
     style={{'height':400 ,'opacity':'0.9'}}
      className="d-block w-100"
      src="https://www.swapify.ca/assets/images/review_items.svg"
      alt="Second slide"
    />

    <Carousel.Caption>
       <h3  className='slider-title'>Second slide label</h3>
      <p className='slider-p' >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
     style={{'height':400 ,'opacity':'0.9'}}
      className="d-block w-100"
      src="https://www.swapify.ca/assets/images/swap_items.svg"
      alt="Third slide"
    />
    <Carousel.Caption>
       <h3  className='slider-title'>Third slide label</h3>
      <p className='slider-p' >Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
     </Carousel.Item>
  <Carousel.Item>
  
    <img
     style={{'height':400 ,'opacity':'0.9'}}
      className="d-block w-100"
      src="https://www.swapify.ca/assets/images/search.svg"
      alt="fouth slide"
    />
    <Carousel.Caption>
       <h3  className='slider-title'>First slide label</h3>
      <p className='slider-p' >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
     style={{'height':400 ,'opacity':'0.9'}}
      className="d-block w-100"
      src="https://www.swapify.ca/assets/images/make_offer.svg"
      alt="fifth slide"
    />

    <Carousel.Caption>
       <h3  className='slider-title'>Second slide label</h3>
      <p className='slider-p' >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
     style={{'height':400 ,'opacity':'0.9'}}
      className="d-block w-100"
      src="https://www.swapify.ca/assets/images/swap_items.svg"
      alt="Sixth slide"
    />
    <Carousel.Caption>
 
       <h3  className='slider-title'>Third slide label</h3>
      <p className='slider-p' >Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>

    )
}

export default Slider