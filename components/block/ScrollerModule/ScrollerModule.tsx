import React, {ReactElement} from "react";
import styles from './ScrollerModule.module.scss';
import {Heading} from "../../primitive/Heading/Heading";
import {TextContent} from "../../primitive/TextContent/TextContent";
import Image from "next/image";
import {ResponsiveScroller} from "../../organism/Scroller/Scroller";
import parse from 'html-react-parser'
import { motion } from "framer-motion";
import { container, slideDown, slideUp, viewport } from "../../../utils/animations";

export interface ScrollerModuleProps {
    content: Content;
}

interface Content {
    heading: string;
    text_content: string;
    items: Array<any>;
}

const ScrollerModule = ({content} : ScrollerModuleProps): ReactElement<'div'> | null => {

    return (
        <motion.section 
            variants={container}
            initial="offscreen"
            whileInView="onscreen"
            viewport={viewport}
            className="m-t-35 lg-m-t-107 m-b-55 lg-m-b-107" id="section-1">

            <div className="container">
                <div className="row">
                    <div className="col col--md-5 ">
                        <Heading variants={slideUp} className="m-b-18 md-m-b-69" text={content.heading} size="lg" tag="h2"/>
                        </div>
                    <div className="col col--md-7 m-b-35 md-m-b-69">
                        <TextContent variants={slideUp} size="md">
                            {parse(content.text_content)}
                        </TextContent>
                    </div>
                </div>
            </div>

            <ResponsiveScroller className="container-full">
                {content.items.map((item) => (
                    <motion.picture variants={slideDown} key={`scroller-${Math.floor(Math.random() * Math.floor(9999))}`} className="relative block">
                        <img className={styles.itemImg} src={require('../../../public' + item.file)} loading={'lazy'} alt={item.alt} />
                    </motion.picture>
                ))}
            </ResponsiveScroller>
        </motion.section>
    )
}

export {ScrollerModule}
