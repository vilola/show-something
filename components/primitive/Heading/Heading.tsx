import React, { ReactElement, ReactNode } from 'react';
import styles from './Heading.module.scss';
import parse from 'html-react-parser'
import { motion } from "framer-motion";

type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type Size = 'xlg' | 'lg' | 'md' | 'sm' | 'xs';

export interface HeadingProps {
    text: string;
    tag: Tag;
    size: Size;
    color?: string;
    className?: string;
    children?: ReactNode;
}

const Heading = React.forwardRef(({tag, text, size, color = 'global-black', className = '', children}: HeadingProps, ref: React.Ref<HTMLHeadingElement>): ReactElement | null => {
    className += ` ${styles[size]} color-${color}`;
    const CustomTag = tag;

    return (
        <CustomTag ref={ref} className={className}>{parse(text)}{children}</CustomTag>
    )
});

Heading.displayName = 'Heading'

const MotionHeading = motion(Heading)

export { MotionHeading as Heading, MotionHeading }