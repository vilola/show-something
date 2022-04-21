import React, { ReactElement, useState } from 'react'
import NextImage from 'next/image'
import { classNames } from '../../../utils/classNames';
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

declare type ImgElementStyle = NonNullable<
    JSX.IntrinsicElements['img']['style']
>

interface ImageProps {
    picture: any
    layout: 'responsive' | 'intrinsic' | 'fill' | 'fixed'
    layered?: boolean
    className?: string
    link?: LinkProps
    sizes?: any
    objectFit?: ImgElementStyle['objectFit']
    objectPosition?: ImgElementStyle['objectPosition']
    alt?: string
    lightbox?: boolean
}

interface LinkProps {
    url: string | undefined
    title?: string | undefined
    target?: string | undefined
}

export const Image = ({
    picture,
    layout,
    layered = false,
    className = '',
    link = { url: undefined },
    sizes,
    objectFit,
    objectPosition,
    alt,
    lightbox = false,
}: ImageProps): ReactElement<'div'> => {
    // TODO: add support for external_url.. now every runs as url acting like an external (PhotoBox)

    const hasUrl = link.url !== undefined && link.url !== ''

    const Tag = hasUrl ? 'a' : 'figure'

    const [lightboxOpen, setLightboxOpen] = useState(false)

    function closeLightbox() {
        setLightboxOpen(false)
    }

    function openLightbox() {
        setLightboxOpen(true)
    }

    return (
        <>
            <Tag
                title={link.title}
                className={classNames('image', className)}
                {...(lightbox && {
                    onClick: () => {
                        openLightbox()
                    },
                })}
                {...(hasUrl && { href: link.url, target: link.target })}
            >
                <NextImage
                    unoptimized
                    src={picture.url}
                    width={layout !== 'fill' && picture.width}
                    height={layout !== 'fill' && picture.height}
                    layout={layout}
                    sizes={sizes}
                    alt={alt || ''}
                    loading="lazy"
                    objectFit={objectFit}
                    objectPosition={objectPosition}
                />
                {layered && <div className="image__layer" />}
            </Tag>

            {lightboxOpen && (
                <Lightbox
                    mainSrc={picture.url}
                    onCloseRequest={() => closeLightbox()}
                ></Lightbox>
            )}
        </>
    )
}
