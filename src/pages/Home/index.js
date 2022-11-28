import {FiLink} from 'react-icons/fi'
import './home.css'
import { Menu } from '../../components/Menu';

export function Home() {
    return (
        <div className="container-home">
            
            <div className="logo">
                <img src="/logo.png" alt="Link Manager Logo" />
                <h1>LinkManager</h1>
                <span>Cole seu link para encurtar 👇</span>
            </div>

            <div className="area-input">
                <div>
                    <FiLink size={24} color="#fff"/>
                    <input 
                        placeholder='Cole seu link aqui...'
                    />
                </div>
                
                <button>Gerar Link</button>
            </div>

            <Menu/>

        </div>
    );
}