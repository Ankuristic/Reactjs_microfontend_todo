import React from 'react'
import ReactDOM from 'react-dom/client'
// import Home from './Home';
// import Age from './Age'
// import Pagination from './Pagination'
import Language from './Language'
import './index.scss'

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    {/* <div>Name: todo</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div> */}
    {/* <Home/> */}
    {/* <Age/> */}

    {/* <Pagination/> */}
    <Language/>
  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)