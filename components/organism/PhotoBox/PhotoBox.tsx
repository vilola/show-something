import { classNames } from '../../../utils/classNames';
import React, { ReactElement } from 'react'
import { Image } from '../Image/Image'

interface PhotoBoxProps {
    content: {
        picture: any
        title?: string
        link?: any
    }
    gallery?: boolean
}

export const PhotoBox = ({
    content,
    gallery = false,
}: PhotoBoxProps): ReactElement<'div'> => {

    const hasUrl =
        (content.link.url !== undefined ||
            content.link.external_url !== undefined) &&
        (content.link.external_url !== '' || content.link.url !== '')
    const link = hasUrl
        ? content.link.external_url || content.link.url
        : undefined

    const wide = content.title && gallery
    return (
        <figure
            className={classNames(
                'photo-box',
                content.title! && 'photo-box--overlay',
                wide && 'photo-box--wide',
                gallery && 'photo-box--gallery'
            )}
        >
            <Image
                className="photo-box__picture"
                layout="fill"
                alt={content.title}
                sizes={
                    wide
                        ? '(max-width: 991px) 360px, 460px'
                        : '(max-width: 991px) 200px, 216px'
                }
                objectFit="cover"
                picture={content.picture}
                link={
                    hasUrl && !gallery
                        ? {
                                url: link,
                                target: '_blank',
                            }
                        : { url: undefined }
                }
                {...(gallery && { lightbox: true })}
            />
            {content.title && (
                <figcaption
                    className={classNames(
                        'photo-box__title',
                        content.link.external_url &&
                            'photo-box__title--external'
                    )}
                >
                    {content.title}
                </figcaption>
            )}
        </figure>
    )
}
