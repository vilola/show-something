import React, {ReactElement} from "react";
import styles from './CardModule.module.scss';
import {Heading} from "../../primitive/Heading/Heading";
import {TextContent} from "../../primitive/TextContent/TextContent";
import {Card} from "../../organism/Card/Card";
import {Scroller} from "../../organism/Scroller/Scroller";
import parse from 'html-react-parser'
import { motion } from "framer-motion";
import { container, slideDown, slideUp, viewport } from "../../../utils/animations";

export interface CardModuleProps {
    content: Content;
}

interface Content {
    heading: string;
    text_content: string;
    items: Array<any>;
}

const CardModule = ({content} : CardModuleProps): ReactElement<'div'> | null => {

    return (
        <motion.section 
            variants={container}
            initial="offscreen"
            whileInView="onscreen"
            viewport={viewport}>
            <div className="container m-t-35 lg-m-t-107 m-b-55 lg-m-b-86">
                <div className="row">
                    <div className="col col--md-6 col--lg-5">
                        <Heading variants={slideUp} className="m-b-18 md-m-b-69" text={content.heading} 
                            size="lg" color="global-white" tag="h2"/>
                    </div>

                    <div className="col col--md-6 col--lg-left-1 m-b-35 md-m-b-69">
                        <TextContent variants={slideUp} color="global-white">
                            {parse(content.text_content)}
                        </TextContent>
                    </div>
                </div>

                <Scroller className="row">
                    {content.items.map((item) => (
                            <div key={`card-${Math.floor(Math.random() * Math.floor(9999))}`} className="col col--md-6 col--lg-4 col--xlg-3">
                                <Card variants={slideDown} icon={item.icon} variant='icon' title={item.title} text={item.text} />
                            </div>
                    ))}
                </Scroller>
                
            </div>
        </motion.section>
    )
}

export {CardModule}