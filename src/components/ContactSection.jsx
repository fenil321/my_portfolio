import { Mail, MapPin,Github,Linkedin, Send } from 'lucide-react'
import { cn } from "../lib/utils";
import toast from 'react-hot-toast';
import { useState } from 'react';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
      e.preventDefault();

      setIsSubmitting(true);

      setTimeout(() => {
       toast.success("Message Sent! Thank you for your message.");
       setIsSubmitting(false);
      }, 1500)

  } 
  return (
    <section id='contact'
            className='py-24 px-4 relative bg-secondary/30'
    >
      <div className='container mx-auto mx-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Get In 
          <span className='text-primary'> Touch</span>
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div className='space-y-8'>
              <h3 className='text-2xl font-semibold mb-10'>
                  
              </h3>

              <div className='space-y-6 justify-center'>
                <div className='flex items-start space-x-4'>
                    <div className='p-3 rounded-full bg-primary/10'>
                        <Mail className='h-6 w-6 text-primary'/>
                    </div>
                    <div>
                        <h4 className="font-medium mt-3"></h4>
                        <a href="mailto:fenilp1979@gmail.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                            fenilp1979@gmail.com
                        </a>
                      </div>
                </div>
                <div className='flex items-start space-x-4'>
                    <div className='p-3 rounded-full bg-primary/10'>
                        <MapPin className='h-6 w-6 text-primary'/>
                    </div>
                    <div>
                        <h4 className="font-medium mt-3"></h4>
                        <a className="text-muted-foreground hover:text-primary transition-colors">
                            Gujarat, India
                        </a>
                    </div>
                </div>
              </div>

              
            </div>

            <div className='bg-card p-8 rounded-lg shadow-xs'
                  onSubmit={handleSubmit}
            >
                <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>

                <form className="space-y-6">
                    <div>
                        <input 
                            type="text" 
                            id="name" 
                            name='name' 
                            required 
                            placeholder='Your Name' 
                            className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none' />
                    </div>
                    <div>
                        <input 
                            type="email" 
                            id="email" 
                            name='email' 
                            required 
                            placeholder='Your Email' 
                            className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none' />
                    </div>
                    <div>
                        <textarea
                            id="message" 
                            name='message' 
                            required 
                            placeholder='Your Message...' 
                            className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none' />
                    </div>

                    <button 
                    type='submit' 
                    disabled={isSubmitting}
                    className={cn("cosmic-button w-full flex items-center justify-center gap-2",

                    )}>
                      {isSubmitting ? "Sending..." : "Send Message"} <Send size={16}/>
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection