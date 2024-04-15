import { useState } from 'react'
import Badge from './badge'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Badge />
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
