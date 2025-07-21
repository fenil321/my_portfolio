
const skills = [      
    {name:<i class="devicon-html5-plain"></i> },
    {name:<i class="devicon-css3-plain"></i>},
    {name:<i class="devicon-bootstrap-plain"></i>},
    {name:<i class="devicon-javascript-plain"></i>},
    {name:<i class="devicon-react-original"></i>},
    {name:<i class="devicon-nodejs-plain-wordmark"></i>},
    {name:<i class="devicon-express-original"></i>},
    {name:<i class="devicon-java-plain"></i>},
    {name:<i class="devicon-python-plain"></i>},
    {name:<i class="devicon-mongodb-plain"></i>},
    {name:<i class="devicon-mysql-plain-wordmark"></i>},
    {name:<i class="devicon-postman-plain"></i>},
    {name:<i class="devicon-git-plain"></i>},
    {name:<i class="devicon-github-original"></i>},
    {name:<i class="devicon-vscode-plain"></i>},
    
]
const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>

            <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 gap-4">
                {skills.map((skill,key)=> (
                    <div key={key} className=" p-3 rounded-lg ">
                        <div>
                            <h1 className="text-5xl hover:scale-110 transition-transform duration-300 hover:text-primary">{skill.name}</h1>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </section>
  )
}

export default Skills

//className="text-5xl text-white dark:text-white hover:text-pink-500 transition-all duration-300 hover:scale-110">