import styles from './block.module.css';

import Image from 'next/image';
export default (props) => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.text_block}>
                <div className={styles.info}>
                    <div className={styles.avatar}>
                        <Image src={props.icon} alt="icon"/>
                    </div>
                    <h1 className={styles.h1}>{props.title}</h1>
                </div>
                <p className={styles.p}>
                    {props.description}
                </p>
            </div>
        </div>
        </>
    );
}