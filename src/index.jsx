import './style.css'
import ReactDOM from 'react-dom/client'
import Game from './component/Game'; // Import the Game component

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <Game />
    </>
)