import './BotonDarkMode.css'
import { useDarkModeContext } from '../../../context/DarkModeContext'

export const BotonDarkMode = () =>{
    const { toggleDarkMode } = useDarkModeContext()
    return(
        <div className="theme-switch-wrapper">
            <label htmlFor="checkbox" className="theme-switch">
                <input type="checkbox" onInput={() => toggleDarkMode ()} id="checkbox" />
                <div className="slider round"></div>
            </label>

        </div>
    )
}