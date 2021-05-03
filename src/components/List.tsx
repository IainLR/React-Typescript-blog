import { useState } from 'react'

const List: React.FC = () => {
  const [list, setList] = useState<string[]>([])

  return (
    <div>
      <ul>
        {list.map((item) => {
          ;<li key={item}>{item}</li>
        })}
      </ul>
    </div>
  )
}
