import { useState } from 'react'
import './CardProduto.css'


export default function CardProduto() {
    // const [count, setCount] = useState(0)
    return (
        <div className="card">
            {/* <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button> */}
            <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
            <p>
            Feijoada is a stew of beans with beef and pork.
            </p>
        </div>
    )
}