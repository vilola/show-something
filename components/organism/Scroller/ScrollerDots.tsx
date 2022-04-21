import React from 'react';
import styles from './Scroller.module.scss';
import { classNames } from '../../../utils/classNames';

export const DotButton = ({ selected, onClick }: {selected:any, onClick:any}) => (
    <button
        className={selected ? classNames(styles.dot, styles.dot_active) : styles.dot}
        type="button"
        onClick={onClick}
    />
);
