import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

function App() {
  const [animate, useAnimate] = useState(false)

  const handleClick = () => {
    useAnimate(true)

    setTimeout(() => {
      useAnimate(false)
    }, 500)
  }

  return (
    <div className='max-w-2xl w-[95%] mx-auto'>
      <h2 className='text-2xl font bold'>Font awesome lib</h2>
      <p className='text-center text-xl select-none' onClick={handleClick}>
        Your <FontAwesomeIcon icon="users" bounce={animate} /> is hot and ready!
      </p>

      <p className='text-center text-xl relative text-red-600'>
        Your <FontAwesomeIcon icon="users" /> is hot and ready!
      </p>


      <h2 className='text-2xl font bold'>Fontello lib</h2>
      
      <p className='text-center text-xl'>
        Your <i className="icon-group"/> is hot and ready!
      </p>
  
    </div>
  )
}

export default App
