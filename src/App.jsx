import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [infos, setInfos] = useState([])

  useEffect(() => {
    const GetProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json();
        setInfos(data)
      } catch (error) {
        console.error(error)
      }
    }
    GetProducts()
  },)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h1>TheMoon BSTEC</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
        <p>
          <ul>
            {infos.map((products, index) => (
              <li key={index}>
                {products.title}
              </li>
            ))}
          </ul>
        </p>
      </div>
    </>
  )
}

export default App
