import { classNames } from '../../../utils/classNames';
import React, { ReactElement } from 'react'
import dynamic from 'next/dynamic'

export interface IconProps {
    name: string
    inline?: boolean
    color?: string
    className?: string
    link?: Link
}

interface Link {
    href: string
    title?: string
    hover?: boolean
}

export const Icon = ({
    name,
    inline = false,
    color = '',
    className = '',
    link = { href: '', hover: false },
}: IconProps): ReactElement<'div'> => {
    if (inline && name) {
        const InlineSVG = dynamic(
            () => import(`../../../public/img/icon/${name}.svg`)
        )

        return (
            <span className={classNames('icon', className, color)}>
                <InlineSVG />
            </span>
        )
    } else if (link.href != '') {
        return (
            <a
                className={classNames('icon icon--link', className)}
                href={link.href}
                title={link.title}
                target={'_blank'}
                rel="noreferrer"
            >
                {link.hover && (
                    <img
                        src={`/img/icon/${name}-hover.svg`}
                        alt={`${name} icon`}
                        className="icon__hover"
                    />
                )}
                <img src={`/public/img/icon/${name}.svg`} alt={`${name} icon`} />
            </a>
        )
    } else {
        return (
            <span className={classNames('icon', className)}>
                <img src={`/public/img/icon/${name}.svg`} alt={`${name} icon`} />
            </span>
        )
    }
}
