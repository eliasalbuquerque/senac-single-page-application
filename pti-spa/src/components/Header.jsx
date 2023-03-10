import reactLogo from '../assets/react.svg'
import './Header.css'

export default function Header() {
    return (
        <div>
            <a href="https://vitejs.dev" target="_blank">
                <img src="/vite.svg" className="logo" alt="Vite logo" />
            </a>
            <a href="https://github.com/eliasalbuquerque/senac-single-page-application/tree/master/pti-spa" target="_blank">
                <img src="https://cdn.pixabay.com/photo/2013/07/12/12/03/soup-145183_960_720.png" className="logo feijoada" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>
    )
}
