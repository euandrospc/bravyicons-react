import './App.css'
import {AmountIcon} from 'bravyicons-react'
function App() {

  return (
    <section className='w-screen bg-black h-screen flex justify-center items-center'>
      <h1 className='text-white'>Bravyicons React</h1>
      <div className='flex space-x-4'>
        <AmountIcon />
        {/* <BravyIcons.AmountIcon className='text-white' />
        <BravyIcons.ArchiveIcon className='text-white' /> */}
      </div>
    </section>
  )
}

export default App
