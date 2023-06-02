import Image from 'next/image';
export const Header = () => {
  return (
    <>
      <Image
        src='/coveratelier.png'
        alt='coveratelier'
        width={100}
        height={24}
        priority
      />
    </>
  );
};
