// import header from '../src/public/components/CoverAtelier'

import Image from 'next/image'

export const Header = () => {
    return (
        <div>
            <Image
                src="CoverAtelier"
            />
            <header className = "header">
                {/* <img src = {header} alt ="CoverAtelier_icon" className = "CoverAtelier"/> */}
  
                <ul className = "header-list">
                    <li className = "header-item01"><a href="">Create</a></li>
                    <li className = "header-item02"><a href="">Help</a></li>
                    <li className = "header-item03"><a href="">Credit</a></li>
                </ul>
            </header>
        </div>
    ) 
}