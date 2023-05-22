import Image from "next/image"
import styles from '@/components/layouts/Header/header.module.css'

export const Header = () => {
  return (
    <>
      <Image
        src="/images/kyoto.jpg"
        //src="/images/Headertest.png"
        alt="CoverAtelier_icon"

        height={100}
        width={200}

        priority="high"
      />
      <header className="header">
        {/* <img src = {header} alt ="CoverAtelier_icon" className = "CoverAtelier"/> */}

        <ul className={styles.headerlist}>
          <li className="headeritem01"><a href="">Create</a></li>
          <li className="headeritem02"><a href="">Help</a></li>
          <li className="headeritem03"><a href="">Credit</a></li>
        </ul>
      </header>
    </>
  );
};
