import React, { ReactElement, useState } from 'react';
import styles from './ProgressItem.module.scss';
import {Heading} from "../../primitive/Heading/Heading";
import {TextContent} from "../../primitive/TextContent/TextContent";
import parse from 'html-react-parser'
import { classNames } from '../../../utils/classNames';
import { motion } from "framer-motion"
import { viewport } from "../../../utils/animations";

export interface ProgressItemProps {
    title: string;
    text: string;
    value: number;
    color?: string;
    def_color?: string;
    background?: Boolean;
}

const ProgressItem = React.forwardRef(({title, text, value, color = 'global-white', def_color = color, background = !(def_color === color || def_color === '')}: ProgressItemProps, ref: React.Ref<HTMLHeadingElement>): ReactElement | null => {

    def_color = def_color === '' ? color : def_color

    const wrapClassNames = classNames(background ? styles.wrap_bg : styles.wrap , `color-${def_color}`)

    const [animatedValue, setAnimatedValue] = useState(0);
    const [progressValue, setProgressValue] = useState(0);

    function onEnter() {
        if (animatedValue === Number(value)) return;

        let start = 0;
        const end = Number(value);
        let duration = (2 / (end / 2)) * 1000;

        setProgressValue(value);
        
        let timer = setInterval(() => {
            if (start + 1 === end) {
                start += 1
            } else {
                start += 2;
            }

            setAnimatedValue(start)
            if (start === end) clearInterval(timer)
        }, duration)
    }

    return (
        <>
            <motion.div className={wrapClassNames} onViewportEnter={onEnter} viewport={viewport} >
                <Heading 
                    tag="h3" 
                    size="sm" 
                    className="uppercase fw-400 flex flex-jc-sb m-b-25" 
                    text={title} 
                    color={color}>
                    <span className={styles.percentage + ` color-${def_color}`} data-value={value}>{animatedValue}%</span>
                </Heading>
                    <progress 
                        value={progressValue} 
                        className={styles.progress} 
                        max="100" />
                <TextContent color={color} size="xs" className="m-t-18 ls-02">
                    {parse(text)}
                </TextContent>
            </motion.div>
        </>
    )
});

ProgressItem.displayName = 'ProgressItem'

const MotionProgressItem = motion(ProgressItem)

export { MotionProgressItem as ProgressItem, MotionProgressItem }