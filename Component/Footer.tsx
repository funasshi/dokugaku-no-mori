import React, { FC, HTMLProps } from 'react';
import styles from './Footer.module.css';
interface FooterProps {
    year: number;
    companyName?: string;
    link?: string;
}
export const Footer: FC<FooterProps> = ({
    year,
    companyName = 'Cool Company',
    link = '#',
}) => {
    return (
        <footer className={styles.footer}>
            &copy; {year}{' '}
            <a href={link} className={styles.link}>
                {companyName}
            </a>
            . All rights reserved.
        </footer>
    );
};
