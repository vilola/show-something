import React, { ReactElement } from 'react';
import styles from './Card.module.scss';
import {Heading} from "../../primitive/Heading/Heading";
import {TextContent} from "../../primitive/TextContent/TextContent";
import Image from "next/image";
import parse from 'html-react-parser'
import { motion } from "framer-motion";

export interface CardProps {
    icon?: string;
    title: string;
    text: string;
    variant?: string;
    transparent?: Boolean;
    className?: string;
}

const Card = React.forwardRef(({icon = '', title, text, variant = 'counted', transparent = false, className = ''}: CardProps, ref: React.Ref<HTMLHeadingElement>): ReactElement | null => {
    className += ` ${styles.card}`;

    if (transparent) {
        className += ` ${styles.transparent}`;
    } else {
        className += ` ${styles.solid}`;
    }

    if (variant === 'counted') {
        className += ` ${styles.counted}`;
    }

    return (
        <div ref={ref} className={className}>
            {variant === 'icon' &&
            <span className={styles.icon}>
                <img src={icon} alt={''} />
            </span>
            }

            <Heading text={title} size="md" tag="h3"/>
            <TextContent size="sm">
                {parse(text)}
            </TextContent>
        </div>
    )
});

Card.displayName = 'Card'

const MotionCard = motion(Card)

export { MotionCard as Card, MotionCard }