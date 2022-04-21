import React, {ReactNode, ReactElement} from "react";
import styles from './ProgressModule.module.scss';
import {Heading} from "../../primitive/Heading/Heading";
import {TextContent} from "../../primitive/TextContent/TextContent";
import {ProgressItem} from "../../organism/ProgressItem/ProgressItem";
import parse from 'html-react-parser'
import { motion } from "framer-motion"
import { container, slideRight, viewport } from "../../../utils/animations";

export interface ProgressModuleProps {
    content: Content;
}

interface Content {
    heading: string;
    text_content: string;
    items: Array<any>;
}

const ProgressModule = ({content} : ProgressModuleProps): ReactElement<'div'> | null => {

    return (
        <motion.section 
            variants={container}
            initial="offscreen"
            whileInView="onscreen"
            viewport={viewport}>
            <div className="container m-t-55 lg-m-t-86 m-b-35 lg-m-b-107">
                <div className="row">
                    <div className="col col--md-6 col--lg-5 col--lg-left-1 m-b-35 lg-m-b-0">
                        <Heading variants={slideRight} className="m-b-18" text={content.heading} 
                            size="lg" tag="h2" color="global-white"/>

                        <TextContent variants={slideRight} color="global-white">
                            {parse(content.text_content)}
                        </TextContent>
                    </div>
                    <div className="col col--md-6 md-flex-o-n1">
                        {content.items.map((item) => (
                            <ProgressItem 
                                key={`progress-${Math.floor(Math.random() * Math.floor(9999))}`} 
                                title={item.title} value={item.value} text={item.text_content} 
                                color="global-white" def_color={item.def_color} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export {ProgressModule}