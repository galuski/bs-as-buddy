import logo from './../../public/images/logo.svg'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Weather } from './weather'
export function Header() {

    return (
        <header>
            <Weather />
            <LanguageSwitcher />
            <img src={logo} alt="logo" />
        </header>
    )
}
