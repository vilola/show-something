import React, { ReactElement } from 'react';
import styles from './Icon.module.scss';
import Phone from '../../../public/img/icon/phone.svg';
import MouseScroll from '../../../public/img/icon/mouse-scroll.svg';
import Mail from '../../../public/img/icon/mail.svg';
import LocationMarker from '../../../public/img/icon/location-marker.svg';
import Thumb from '../../../public/img/icon/thumb.svg';

export type IconTypes = 'phone' | 'mouse-scroll' | 'mail' | 'location-marker' | 'thumb';
export type IconVariations = 'circle';

export interface IconProps {
    name: IconTypes;
    variation?: IconVariations;
}

const Icon = ({name, variation}: IconProps): ReactElement | null => {
    const returnIcon = (name: IconTypes): ReactElement => {
        switch (name) {
            case 'phone':
                return <Phone/>
            case 'mouse-scroll':
                return <MouseScroll/>
            case 'mail':
                return <Mail />
            case 'location-marker':
                return <LocationMarker />
            case 'thumb':
                return <Thumb />
            default:
                return <></>;
        }
    }

    switch (variation) {
        case 'circle':
            return (
                <span className={styles.circle}>
                    {returnIcon(name)}
                </span>
            )
        default:
            return (
                <>
                    {returnIcon(name)}
                </>
            )
    }

    
};

export { Icon }