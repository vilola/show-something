import React, { ReactElement } from 'react'
import { Carousel } from '../../organism/Carousel/Carousel'
import { PhotoBox } from '../../organism/PhotoBox/PhotoBox'

interface PhotoBoxCarouselProps {
    content: Content
    className?: string
}

interface Content {
    items: Array<any>
}

export const GalleryCarouselModule = ({
    content,
    className,
}: PhotoBoxCarouselProps): ReactElement<'div'> => {
    return (
        <section className={className}>
            <div className="container">
                <header className="container__header">
                    <h2 className="container__title">Photo gallery</h2>
                </header>
            </div>
            <Carousel>
                {content.items.map((item) => (
                    <PhotoBox
                        content={item}
                        gallery
                        key={`photo-${Math.floor(
                            Math.random() * Math.floor(9999)
                        )}`}
                    />
                ))}
            </Carousel>
        </section>
    )
}
