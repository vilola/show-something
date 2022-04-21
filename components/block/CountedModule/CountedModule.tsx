import React, {ReactNode, ReactElement} from "react";
import styles from './CardModule.module.scss';
import {Heading} from "../../primitive/Heading/Heading";
import {Card} from "../../organism/Card/Card";
import { motion } from "framer-motion";
import { container, slideRight, slideDown, viewport } from "../../../utils/animations";

export interface CountedModuleProps {
    content: Content;
}
    
interface Content {
    heading: string;
    items: Array<any>;
}

const CountedModule = ({content} : CountedModuleProps): ReactElement<'div'> | null => {

    return (
        <motion.section 
            variants={container}
            initial="offscreen"
            whileInView="onscreen"
            viewport={viewport}
            className="m-t-55 lg-m-t-86 m-b-55 lg-m-b-86">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Heading variants={slideDown} className="m-b-18 md-m-b-69" text={content.heading} 
                            size="lg" tag="h2"/>
                    </div>
                </div>

                <div className="row cr-card">
                {content.items.slice(0,4).map((item) => (
                    <div key={`card-${Math.floor(Math.random() * Math.floor(9999))}`} className="col col--md-6 col--lg-3">
                        <Card variants={slideRight} variant="counted" transparent title={item.title} text={item.text} />
                    </div>
                ))}
                </div>
            </div>
        </motion.section>
    )
}

export {CountedModule}