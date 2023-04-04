import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function BannerCarousel() {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            useKeyboardArrows={true}
            swipeable={false}
            dynamicHeight={false}
            showStatus={false}
            showThumbs={false}
            
        >
            <div>
                <img src='./image/carcenter0.jpg' className='h-60 bg-cover'/>
            </div>
            <div>
                <img src='./image/carcenter1.jpg' className='h-60 bg-cover'/>
            </div>
            <div>
                <img src='./image/carcenter2.jpg' className='h-60 bg-cover'/>
            </div>
            
        </Carousel>
    );
}

export default BannerCarousel;