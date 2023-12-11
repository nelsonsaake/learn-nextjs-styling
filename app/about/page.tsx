import React from 'react';
import styles from './styles.module.css';
import styles2 from './styles.module.scss';

export default function AboutPage(){
    return (
        <div className='p-5 flex flex-col space-y-5'>
            <h2 className={styles.highlight}>app/about/page.tsx (css)</h2>
            <h2 className={styles2.highlight2}>app/about/page.tsx (scss)</h2>

            <button className="btn btn-primary">primary</button>
            <button className="btn btn-success">success</button>
        </div>
    )
}