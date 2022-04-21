import React, {ReactNode, ReactElement} from "react";
import styles from './TextContent.module.scss';
import { motion } from "framer-motion";

export interface TextContentProps {
    children: ReactNode;
    color?: string;
    size?: 'xs' | 'sm' | 'md' | undefined;
    className?: string;
}

const TextContent = React.forwardRef(({ children, color = 'global-black', size, className = '' }: TextContentProps, ref: React.Ref<HTMLDivElement>): ReactElement<'div'> | null => {

    className += ` ${styles.textContent} color-${color}`;
    if (size) {
        className += ` ${styles[size]}`;
    }

    return (
        <p className={className} ref={ref}>{children}</p>
    )
});

TextContent.displayName = 'TextContent'

const MotionTextContent = motion(TextContent)

export {MotionTextContent as TextContent, MotionTextContent}