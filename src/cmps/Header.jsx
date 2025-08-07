import { useState } from 'react'

import logo from './../../public/images/logo.svg'
import { Burger } from './Burger'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Navbar } from './Navbar'
import { Weather } from './Weather'


export function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header>
            <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Navbar menuOpen={menuOpen} />
            <img src={logo} alt="logo" />
            <div className='header-selects'>
                <Weather />
                <LanguageSwitcher />
            </div>
        </header>
    )
}
