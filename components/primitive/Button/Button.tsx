import React, { ReactElement } from 'react';
import { classNames } from '../../../utils/classNames';
import styles from './Button.module.scss';
import {Icon, IconTypes} from "../Icon/Icon";
import { Link } from 'react-scroll';
import { motion } from "framer-motion";

export interface ButtonProps {
    link?: string;
    to?: string;
    type?: "button" | "submit" | "reset" | undefined;
    text: string;
    color?: string;
    size?: 'sm' | 'md' | undefined;
    transparent?: boolean;
    icon?: IconTypes;
}

const Button = React.forwardRef(({link, type, to, text, color = 'global-black', size, transparent = false, icon}: ButtonProps, ref): ReactElement | null => {
    let className = classNames(styles.button, styles[color])

    if (size) {
        className += ` ${styles[size]}`;
    }
    if (transparent) {
        className += ` ${styles['transparent']}`;
    }

    if (to) {
        return (
            <span ref={ref as React.Ref<HTMLDivElement>}>
                <Link to={to} className={className} spy={true} smooth={true} offset={-120} duration={500}>
                    {text}
                    {icon &&
                        <span className={styles.icon}>
                            <Icon name={icon} />
                        </span>
                    }
                </Link>
            </span>
        )

    } else if (type) {
        return (
            <button ref={ref as React.Ref<HTMLButtonElement>} type={type} className={className}>
                {text}
                {icon &&
                    <span className={styles.icon}>
                        <Icon name={icon} />
                    </span>
                }
            </button>
        )
    } else {
        return (
            <a ref={ref as React.Ref<HTMLAnchorElement>} href={link} target={'_blank'} className={className} rel="noreferrer">
                {text}
                {icon &&
                    <span className={styles.icon}>
                        <Icon name={icon} />
                    </span>
                }
            </a>
        )
    }
});

Button.displayName = 'Button'

const MotionButton = motion(Button)

export { MotionButton as Button, MotionButton }