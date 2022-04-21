import React, { ReactElement, ReactNode, useEffect, useCallback, useState } from 'react';
import styles from './Scroller.module.scss';
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton } from './ScrollerDots';
import { classNames } from '../../../utils/classNames';

export interface ScrollerProps {
    children: ReactNode;
    className?: string;
}

const Scroller = ({children, className = ''}: ScrollerProps): ReactElement | null => {

    const [draggable, setDraggable] = useState(true);
    const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false, containScroll: 'trimSnaps', draggable: draggable });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([0]);
    
    const scrollTo = useCallback((index: number) => embla && embla.scrollTo(index), [
        embla
    ]);

    const onSelect = useCallback(() => {
        if (!embla) return;
        setSelectedIndex(embla.selectedScrollSnap());
    }, [embla, setSelectedIndex]);
    
    useEffect(() => {
        if (!embla) return;
        onSelect();
        setScrollSnaps(embla.scrollSnapList());
        setDraggable(embla.scrollSnapList().length > 1);
        embla.on("select", onSelect);
    }, [embla, setScrollSnaps, onSelect]);

    return (
        <>
            <div className={className}>
                <div className={styles.embla} ref={viewportRef}>
                    <div className={styles.container}>
                        {children}
                    </div>
                </div>
            </div>

            {scrollSnaps.length > 1 &&
                <div className={className}>
                    <div className={styles.dots}>
                        {scrollSnaps.map((_, index) => (
                            <DotButton
                                key={index}
                                selected={index === selectedIndex}
                                onClick={() => scrollTo(index)}
                            />
                        ))}
                    </div>
                </div>
            }
            
        </>
    )
};

const ResponsiveScroller = ({children, className = ''}: ScrollerProps): ReactElement | null => {

    className = classNames(className, styles.embla)

    const [viewportRef, embla] = useEmblaCarousel({ loop: false, align: 'center', containScroll: 'trimSnaps', dragFree: true })

    useEffect(() => {
        if (embla) {
        }
    }, [embla])

    return (
        <div className={className} ref={viewportRef}>
            <div className={styles.container_responsive}>
                {children}
            </div>
        </div>
    )
};

export { Scroller, ResponsiveScroller }
