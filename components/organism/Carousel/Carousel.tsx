import React, {
    ReactChild,
    ReactChildren,
    ReactElement,
    useCallback,
    useEffect,
    useState,
} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { classNames } from '../../../utils/classNames';
import Autoplay from 'embla-carousel-autoplay'

export interface CarouselProps {
    children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[]
    className?: string
    type?: 'padding' | 'right-padding' | 'no-padding'
    autoplayOn?: boolean
    color?: 'red' | 'white'
}

export const Carousel = ({
    children,
    className = '',
    type = 'padding',
    autoplayOn = false,
    color = 'red',
}: CarouselProps): ReactElement<'div'> => {
    const options = {
        playOnInit: autoplayOn,
        delay: 4000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
    }
    const autoplayRoot = (emblaRoot: { parentElement: any }) =>
        emblaRoot.parentElement
    const autoplay = Autoplay(options, autoplayRoot)

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            containScroll: 'trimSnaps',
            draggable: true,
        },
        [autoplay]
    )
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setPrevBtnEnabled(emblaApi.canScrollPrev())
        setNextBtnEnabled(emblaApi.canScrollNext())
    }, [emblaApi])

    const [isScrolling, setIsScrolling] = useState(false)

    const onScroll = () => {
        setIsScrolling(true)
    }

    const onSettle = () => {
        setIsScrolling(false)
    }

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on('select', onSelect)
        emblaApi.on('scroll', onScroll)
        emblaApi.on('settle', onSettle)
    }, [emblaApi, onSelect])

    return (
        <div className={classNames('carousel', `carousel--${type}`, className)}>
            <div className="carousel__viewport" ref={emblaRef}>
                <div className="carousel__container">{children}</div>
            </div>

            {prevBtnEnabled && (
                <button
                    className={classNames(
                        'carousel__arrow carousel__arrow--prev',
                        `carousel__arrow--${color}`
                    )}
                    onClick={scrollPrev}
                    title="Previous slide"
                >
                    <span>Previous slide</span>
                </button>
            )}
            {nextBtnEnabled && (
                <button
                    className={classNames(
                        'carousel__arrow carousel__arrow--next',
                        `carousel__arrow--${color}`
                    )}
                    onClick={scrollNext}
                    title="Next slide"
                >
                    <span>Next slide</span>
                </button>
            )}
        </div>
    )
}
