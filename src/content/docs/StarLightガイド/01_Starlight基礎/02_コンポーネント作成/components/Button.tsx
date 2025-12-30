import { useState } from "react"

const Button = () => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

  return (
    <div>
      <button onClick={handleClick}
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center justify-items-center">
        Count{count}
      </button>
      <p>Count: {count}</p>
    </div>
  )
}

export default Button  
