import React from 'react';
import styles from './styles.module.css';
import styles2 from './styles.module.scss';

export default function ContactPage(){
    return (
        <div className="p-8">
            <h2 className={styles.highlight}>app/contact/page.tsx (css)</h2>
            <h2 className={styles2.highlight2}>app/about/page.tsx (scss)</h2>

        </div>
    )
}