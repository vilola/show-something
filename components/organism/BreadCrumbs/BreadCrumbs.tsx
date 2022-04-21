import Link from 'next/link'
import React, { ReactElement } from 'react'
import { Icon } from '../../primitive/IconP22/Icon'

interface BreadCrumbsProps {
    prev?: Link[]
    current: Link
}

interface Link {
    url: string
    title: string
}

export const BreadCrumbs = ({
    prev,
    current,
}: BreadCrumbsProps): ReactElement<'div'> => (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
        <ol className="breadcrumbs__list">
            <li>
                <Link href="/">
                    <a>
                        <Icon name="home" inline />
                    </a>
                </Link>
            </li>
            {prev &&
                prev.length >= 1 &&
                prev.map((item) => (
                    <li
                        className="breadcrumbs__item"
                        key={`link-${Math.floor(
                            Math.random() * Math.floor(9999)
                        )}`}
                    >
                        <Link href={item.url}>
                            <a>{item.title}</a>
                        </Link>
                    </li>
                ))}
            <li className="breadcrumbs__item">
                <Link href={current.url}>
                    <a aria-current="page">{current.title}</a>
                </Link>
            </li>
        </ol>
    </nav>
)
