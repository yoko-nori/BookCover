import styles from '@/features/palette/styles/PaletteButton.module.css';

export const PaletteButton = ({ icon }) => {
  return (
    <>
      <button className={styles.palette_button}>
        <img src={icon} className={styles.image_style} alt='palette Button' />
      </button>
    </>
  );
};
