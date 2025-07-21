import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/skills'
import Project from '../components/Project'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        {/* Theme Toggle */}
        <ThemeToggle/>
        {/* Background Effect */}
        {/* <StarBackground/> */}
        {/* Navbar */}
        <Navbar/>
        {/* Main content */}
        <main>
          <Hero/>
          <About/>
          <Skills/>
          <Project/>
          <ContactSection/>
        </main>

        {/* footer */}
        <Footer/>
    </div>
  )
}

export default Home