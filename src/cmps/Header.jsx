import logo from './../../public/images/logo.svg'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Weather } from './Weather'
export function Header() {

    return (
        <header>
            <Weather />
            <LanguageSwitcher />
            <img src={logo} alt="logo" />
        </header>
    )
}
