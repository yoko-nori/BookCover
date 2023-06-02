import styles from '@/features/palette/styles/palette.module.css';
import { PaletteButton } from './PaletteButton';

export const Palette = () => {
  const handleButton = () => {
    console.log('click on PaletteButton');
  };

  return (
    <div className={styles.container}>
      <div className={styles.left_container}>
        <PaletteButton
          icon="images/memo.png"
          onclick={() => handleButton()}
        />
      </div>
      <div className={styles.right_container}></div>
    </div>
  );
};
