import Image from 'next/image';
import styles from '@/styles/PaletteDaishi.module.css';

export const PaletteDaishi = () => {
  const images = Array.from({ length: 17 }, (_, i) => `/daishi/daishi${i + 1}.jpg`);

  return (
    <div className={styles.paletteDaishiContianer}>
      <div className={styles.paletteGrid}>
        {images.map((image, index) => (
          <div className={styles.gridItem} key={index}>
            <Image src={image} alt='palette daishi image' fill className={styles.image} priority />
          </div>
        ))}
      </div>
    </div>
  );
};
