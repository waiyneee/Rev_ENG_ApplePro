import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/Model"
import * as Sentry from '@sentry/react';
import Features from "./components/Features"
import A17 from "./components/A17"
import Footer from "./components/Footer"

const App= ()=>{
//es6+used features fn block or  wrapping in const

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <A17 />
      <Footer />


      


    </main>
  )
}

export default Sentry.withProfiler(App);
