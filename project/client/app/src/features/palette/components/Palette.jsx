import { useState, useMemo } from 'react';
import styles from '@/features/palette/styles/palette.module.css';
import { PaletteButton } from './PaletteButton';

export const Palette = () => {
  const [currentLayout, setCurrentLayout] = useState('daishi');

  const handleButtonClick = (layout) => {
    if (currentLayout !== layout) {
      setCurrentLayout(layout);
    }
  };

  const renderLayout = useMemo(() => {
    switch (currentLayout) {
      case 'daishi':
        return <PaletteDaishi />;
      case 'color':
        return <PaletteColor />;
      case 'stamp':
        return <PaletteStamp />;
      case 'text':
        return <PaletteText />;
      default:
        return null;
    }
  }, [currentLayout]);

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.paletteButtonWarapper}>
          {/* daishi Button */}
          <PaletteButton
            icon='/daishi.png'
            alt='daishi'
            onClick={() => handleButtonClick('daishi')}
          />
          {/* color Button */}
          <PaletteButton
            icon='/color-select.png'
            alt='カラー選択'
            onClick={() => handleButtonClick('color')}
          />
          {/* stamp Button */}
          <PaletteButton
            icon='/stamp.png'
            alt='スタンプ'
            onClick={() => handleButtonClick('stamp')}
          />
          {/* text Button */}
          <PaletteButton
            icon='/text-input.png'
            alt='テキスト入力'
            onClick={() => handleButtonClick('text')}
          />
        </div>
      </div>
      <div className={styles.spacing}></div>
      <div className={styles.right_container}>{renderLayout}</div>
    </div>
  );
};
