import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx";
import Examples from "./components/Examples.jsx";
import User from "./components/User.jsx";

import './App.css'


function App() {

  return (
    <>

      <Header title="React Intro" subtitle="Components & Props" />
      <hr />
      
      <User userName="Alice" age={30} />
      <User userName="Bob" age={40} />
      <User userName="Charly" age={50} />

      <hr />
      <Examples />
      <Footer />
    </>
  )
}

export default App;
