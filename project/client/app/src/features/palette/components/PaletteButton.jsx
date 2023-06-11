import Image from 'next/image';
import styles from '@/features/palette/styles/PaletteButton.module.css';

export const PaletteButton = ({ icon }) => {
  return (
    <>
      <button className={styles.palette_button}>
        <Image
          src={icon}
          className={styles.image_style}
          alt='palette Button'
          width={100}
          height={100}
          priority
        />
      </button>
    </>
  );
};
