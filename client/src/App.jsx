import {BrowserRouter,Link,Route,Routes} from 'react-router-dom'


function App() {
  

  return (
    <BrowserRouter>
      <Link>
      </Link>
       <h1 className="text-3xl text-center mt-10 text-cyan-400">
         Hello world!
       </h1>
      <Routes>
        <Route path="/" element={<Home/>}/>
  </Routes>
      <h2 className="text-2xl text-center mt-9 text-red-700 text-underline"> Go Away </h2>
    </BrowserRouter>
  )
}

export default App
