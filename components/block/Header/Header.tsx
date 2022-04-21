import React, {ReactElement} from "react";
import styles from './Header.module.scss';
import {Button} from "../../primitive/Button/Button";
import {Heading} from "../../primitive/Heading/Heading";
import {TextContent} from "../../primitive/TextContent/TextContent";
import parse from 'html-react-parser'
import {IconTypes} from "../../primitive/Icon/Icon";
import { motion } from "framer-motion";
import { container, slideRightSlow, slideUp, viewport } from "../../../utils/animations";

export interface HeaderProps {
    content: Content;
}

interface Content {
    image: { 
        file: string, 
        alt: string
    };
    heading: string;
    text_content: string;
    button_group: {
        link: string,
        title: string,
        icon: IconTypes,
    }
}

const Header = ({content} : HeaderProps): ReactElement<'div'> | null => {

    const img = require('../../../public' + content.image.file);

    return (
        <motion.header 
            variants={container}
            initial="offscreen"
            whileInView="onscreen"
            viewport={viewport}
            className="bg-c-global-black bg-clip-content bg-gradient overflow-hidden p-b-25 lg-p-b-73" id="home">
            <div className="container p-t-152 lg-p-t-204">
                <div className="row relative">
                    <motion.div variants={slideRightSlow} className="col m-b-n25 lg-m-b-n73 m-t-84 lg-m-t-139">
                        <picture className={styles.imgbg}>
                            <img src={img} alt={content.image.alt} loading={'lazy'} />
                        </picture>
                    </motion.div>
                    <div className="col absolute">
                        <div className="row">
                            <div
                                className="col col--md-8 col--lg-6 col--xlg-5">
                                <Heading variants={slideUp} className="mbm-diff" text={content.heading} 
                                    color="global-white" size="xlg" tag="h1"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col--md-8 col--lg-6 col--xlg-4">
                                <TextContent variants={slideUp} className="m-b-35 md-m-b-55" size="md" color="global-white">
                                    {parse(content.text_content)}
                                </TextContent>
                                <Button variants={slideUp} to={content.button_group.link} text={content.button_group.title} icon={content.button_group.icon} color="living-coral"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.header>
    )
}

export {Header}