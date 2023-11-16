import { FC, useEffect, useState } from 'react';
import './Currencies.scss';
import { useGetCryptosQuery } from "../../urls/cryptoApi";
import { CurrencyCard } from '../CurrencyCard/CurrencyCard';
import { millify } from "millify";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Loader } from '../Loader/Loader';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 768 },
      items: 3,
      slidesToSlide: 4,
     
    },
    tablet: {
      breakpoint: { max: 1308, min: 768 },
      items: 2,
      slidesToSlide: 3,
      partialVisibilityGutter: 40
      
      
       // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 15
       // optional, default to 1.
    }
  };


interface ICurrencies {
    isSimplified: boolean;
}

export const Currencies: FC<ICurrencies> = ({isSimplified}) => {
    const count = isSimplified ? 10 : 100;
    const { data, isLoading, error } = useGetCryptosQuery(count);
    
    return (
        <div className='currencies-list'>
            <Carousel
                partialVisible={true}
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="transform 300ms ease-in-out"
                transitionDuration={1800}
                containerClass="carousel-container"
                removeArrowOnDeviceType={'mobile' || 'desktop'}
                deviceType={'desktop' || 'tablet' || 'mobile'}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-10-px"
                >
            { isLoading ? (
                <> ...Loading </>
            ) : data ? (
                data.data.coins.map((crypto: any) => (
                    <CurrencyCard 
                        key={crypto.id}
                        currencyId={crypto.uuid}
                        currencyImg={crypto.iconUrl} 
                        currencyName={crypto.name} 
                        currencyPrice={millify(crypto.price)}
                        currencyRate={crypto.change}
                        currencySymbol={crypto.symbol}
                        />
                ))) : null
                }
            </Carousel>
        </div>
    )
};
