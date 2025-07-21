import { Briefcase, Code, Coffee, GraduationCap, Lectern, MapPin,  } from 'lucide-react'
import React from 'react'

const About = () => {
  return (
    <section id='about' className='py-24 px-4 relative'>
        {" "}
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                About <span className='text-primary'>Me</span>
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <div className='space-y-6'>
                    <h3 className='text-2xl font-semibold'></h3>
                    <p className='text-muted-foreground'>
                        My journey in tech is driven by curiosity and a desire to build solutions that make a difference. I'm currently pursuing a Bachelor's in Computer Science & Engineering, with hands-on experience in web development. Seeking opportunities to apply technical knowledge in a challenging and growth-oriented environment.
                    </p>

                    <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                        <a href="#contact" className='cosmic-button'>
                            Get In Touch
                        </a>
                        <a href="/resume/FENIL_Resume.pdf" target='_blank' className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>
                            Download Resume
                        </a>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-6'>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Code className='h-6 w-6 text-primary'/>
                            </div>
                            <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>Web Developer</h4>
                                    <p className='text-muted-foreground'>
                                        Passionate about building innovative website solutions
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Coffee  className='h-6 w-6 text-primary'/>
                            </div>
                             <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>Java</h4>
                                    <p className='text-muted-foreground'>
                                        Passionate for programming, especially in Java
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <GraduationCap className='h-6 w-6 text-primary'/>
                            </div>
                             <div className='text-left'>
                                    <h4 className='font-semibold text-lg'>Continuous Lerner</h4>
                                    <p className='text-muted-foreground'>
                                        Always Expanding Knowledge And Skills
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default About