import '../styles/App.css'
import Greeting from './components/Greeting'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='navbar'></div>
      <div className='body'></div>
      <div className='footer'></div>
      <Greeting name='adhithya'/>
    </>
  )
}

export default App
