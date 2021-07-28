import './slider.css'
import { Carousel } from "react-bootstrap"
import How from './How1.png'
function Slider() {
    return (
        <>
            <Carousel fade style={{ 'backgroundColor': '#006E89','height':400}}>
               <Carousel.Item style={{ 'height':350}} >

                    <img
                        style={{ 'height':350}}
                        className="d-block w-100"
                        src={How}
                        alt="First slide"
                    />
                    <Carousel.Caption id="top-header">

                        <h2 className='slider-header'>How it works?</h2>
                    
                    </Carousel.Caption >
                </Carousel.Item>



                <Carousel.Item >
                    <img
                        style={{ 'height':"200px"}}
                        className="d-block w-100"
                        src="https://www.swapify.ca/assets/images/add_item.svg"
                        alt="First slide"
                    />
                    <Carousel.Caption className='roleTitle'>
                        <h3 className="role-title1">Service provider</h3>
                        <h3 className='slider-title'>Add service to your SWAPO profile page </h3>
                        <p className='slider-p' >Step 1</p>
                    </Carousel.Caption >
                </Carousel.Item>


                <Carousel.Item >
                    <img
           style={{ 'height':"200px"}}
                        className="d-block w-100"
                        src="https://www.swapify.ca/assets/images/review_items.svg"
                        alt="Second slide"
                    />
                <Carousel.Caption className='roleTitle'>
                        <h3 className="role-title1">Service provider</h3>
                        <h3 className='slider-title'>Review offers for the service</h3>
                        <p className='slider-p' >Step 2</p>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                    <img
           style={{ 'height':"200px"}}
                        className="d-block w-100"
                        src="https://www.swapify.ca/assets/images/swap_items.svg"
                        alt="Third slide"
                    />
                <Carousel.Caption className='roleTitle'>
                        <h3 className="role-title1">Service provider</h3>
                        <h3 className='slider-title'>Swap service for  other services.</h3>
                        <p className='slider-p' >Step 3</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                    <img
           style={{ 'height':"200px"}}
                        className="d-block w-100"
                        src="https://www.swapify.ca/assets/images/search.svg"
                        alt="fouth slide"
                    />
                <Carousel.Caption className='roleTitle'>
                        <h3 className="role-title1">Recipient</h3>
                        <h3 className='slider-title'>Search for the desired service.</h3>
                        <p className='slider-p' >Step 1</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
           style={{ 'height':"200px"}}
                        className="d-block w-100"
                        src="https://www.swapify.ca/assets/images/make_offer.svg"
                        alt="fifth slide"
                    />

                <Carousel.Caption className='roleTitle'>
                        <h3 className="role-title1">Recipient</h3>
                      
                        <h3 className='slider-title'>Make an offer.</h3>
                        <p className='slider-p' >Step 2</p>
                    </Carousel.Caption>
                </Carousel.Item> 
                <Carousel.Item>
                    <img
           style={{ 'height':"200px"}}
                        className="d-block w-100"
                        src="https://www.swapify.ca/assets/images/swap_items.svg"
                        alt="Sixth slide"
                    />
                     
                <Carousel.Caption className='roleTitle'>
                       <h3 className="role-title1">Recipient</h3>
                        <h3 className='slider-title'>Swap service for other services.</h3>
                        <p className='slider-p' >Step 3</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>

    )
}

export default Slider