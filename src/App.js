import React from "react"
import Footer from "./Component/Footer"
import Header from "./Component/Header"
import { Container } from "react-bootstrap"
import Home from "./screens/Home"

const App = () => {
  return (
    <>
      {/* <h1>Hello World!</h1> */}
      <Header />
      <main className="py-3">
        <Container>
          <Home />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
