import { ArrowUp,Github,Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card border-t border-border mt-12 pt-8 ">
        <div>
           <a href="#hero">
             <ArrowUp className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors m-auto"/>
           </a>
        </div>
        <div className="pt-8 ">
              <div className="flex space-x-4 justify-center mb-4">
                  <a href="https://www.linkedin.com/in/fenil-parmar-90471524a"
                  target="_blank"
                  >
                  <Linkedin/>
                  </a>
                  <a href="https://github.com/fenil321"
                  target="_blank">
                  <Github/>
                  </a>
              </div>
        </div>
        <p className="text-sm text-muted-foreground"> &copy; {new Date().getFullYear()} Fenil Parmar</p>
    </footer>
  )
}

export default Footer