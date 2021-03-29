import styles from './index.less';
import { Button } from 'antd';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>
        <Button type="primary">home</Button>
      </h1>
    </div>
  );
}
