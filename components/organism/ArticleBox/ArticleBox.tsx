import { classNames } from '../../../utils/classNames';
import Link from 'next/link'
import React, { ReactElement } from 'react'
import { Image } from '../Image/Image'

export interface ArticleBoxProps {
    content: Content
    fluid?: boolean
}

interface Content {
    picture: object
    title: string
    perex: string
    date: string
    link: string
}

export const ArticleBox = ({
    content,
    fluid = false,
}: ArticleBoxProps): ReactElement<'div'> => (
    <Link href="/">
        <a
            className={classNames(
                'article-box',
                !fluid && 'article-box--fixed'
            )}
        >
            <div className="article-box__inner">
                <p className="article-box__date">{content.date}</p>
                <h3 className="article-box__title">{content.title}</h3>
                <p className="article-box__perex">{content.perex}</p>
            </div>
            <Image
                picture={content.picture}
                layout="fill"
                layered
                className="article-box__image"
                sizes="(max-width: 991px) 243px, 402px"
                alt={`Article preview image. ${content.title}`}
            />
        </a>
    </Link>
)
