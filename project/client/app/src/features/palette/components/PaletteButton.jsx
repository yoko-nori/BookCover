import Image from 'next/image';
import styles from '@/features/palette/styles/PaletteButton.module.css';

export const PaletteButton = ({ icon, alt, onClick }) => {
  return (
    <button className={styles.paletteButton} onClick={onClick}>
      <div className={styles.imageContainer}>
        <Image
          src={icon}
          alt={alt}
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
    </button>
  );
};
