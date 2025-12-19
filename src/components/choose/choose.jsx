import { data } from '../../data/object.jsx';
import Block from '../block/block.jsx';
import styles from './pop.module.css';

export default () => {
  return (
    <section className={styles.wrapper}>
        <div className={styles.header_content}>
            <h2 className={styles.h1}>Почему выбирают OnionGuild</h2>
            <div className={styles.line}></div>
            <p className={styles.p}>Ваша безопасность — наш главный приоритет и экспертиза.</p>
        </div>
      <div className={styles.blocks_grid}>
        {data.map((item) => (
          <div key={item.id} className={styles.block_item}>
              <Block
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
          </div>
        ))}
      </div>
    </section>
  );
};