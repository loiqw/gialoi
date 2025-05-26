

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">

        <div className="container mx-auto max-w-5xl">

            <h1 className="text-3xl md:text-4xl font-bold mv-12 text-center">
                My <span className="text-primary"> Skills</span>
                <p className="mt-3">Technologies I can do: </p>
            </h1>

            <div className="visible animate-fade-in grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-9">

                <div className="rounded-lg shadow-neumorphism bg-background hover:scale-105 ease-in duration-300 p-6">

                    <div className="grid grid-cols-2 gap-4 justify-center items-center">

                        <div className="m-auto"> 
                            <img src="../../src/assets/react.svg"/>
                        </div>

                        <div className="flex flex-col items-center justify-center">

                            <h1>React JS</h1>

                        </div>

                    </div>

                </div>

                <div className="rounded-lg shadow-neumorphism bg-background hover:scale-105 ease-in duration-300 p-6">

                    <div className="grid grid-cols-2 gap-4 justify-center items-center">

                        <div className="m-auto"> 
                            <img className="w-12 h-12" src="../../src/assets/tailwind.svg"/>
                        </div>

                        <div className="flex flex-col items-center justify-center">

                            <h1>Tailwin CSS</h1>

                        </div>

                    </div>

                </div>

                <div className="rounded-lg shadow-neumorphism bg-background hover:scale-105 ease-in duration-300 p-6">

                    <div className="grid grid-cols-2 gap-4 justify-center items-center">

                        <div className="m-auto"> 
                            <img className="w-10 h-10" src="../../src/assets/html.svg"/>
                        </div>

                        <div className="flex flex-col items-center justify-center">

                            <h1>HTML</h1>

                        </div>

                    </div>

                </div>

                <div className="rounded-lg shadow-neumorphism bg-background hover:scale-105 ease-in duration-300 p-6">

                    <div className="grid grid-cols-2 gap-4 justify-center items-center">

                        <div className="m-auto"> 
                            <img className="w-10 h-10" src="../../src/assets/javascript.svg"/>
                        </div>

                        <div className="flex flex-col items-center justify-center">

                            <h1>Javascript</h1>

                        </div>

                    </div>

                </div>

                <div className="rounded-lg shadow-neumorphism bg-background hover:scale-105 ease-in duration-300 p-6">

                    <div className="grid grid-cols-2 gap-4 justify-center items-center">

                        <div className="m-auto"> 
                            <img className="w-10 h-10"src="../../src/assets/database.png"/>
                        </div>

                        <div className="flex flex-col items-center justify-center">

                            <h1>SQL</h1>

                        </div>

                    </div>

                </div>

                <div className="rounded-lg shadow-neumorphism bg-background hover:scale-105 ease-in duration-300 p-6">

                    <div className="grid grid-cols-2 gap-4 justify-center items-center">

                        <div className="m-auto"> 
                            <img className="w-12 h-12" src="../../src/assets/c.svg"/>
                        </div>

                        <div className="flex flex-col items-center justify-center">

                            <h1>C</h1>

                        </div>

                    </div>

                </div>

                <div className="rounded-lg shadow-neumorphism bg-background hover:scale-105 ease-in duration-300 p-6">

                    <div className="grid grid-cols-2 gap-4 justify-center items-center">

                        <div className="m-auto"> 
                            <img className="w-12 h-12" src="../../src/assets/cpp_logo.svg"/>
                        </div>

                        <div className="flex flex-col items-center justify-center">

                            <h1>C++</h1>

                        </div>

                    </div>

                </div>

                <div className="rounded-lg shadow-neumorphism bg-background hover:scale-105 ease-in duration-300 p-6">

                    <div className="grid grid-cols-2 gap-4 justify-center items-center">

                        <div className="m-auto"> 
                            <img className="w-12 h-12" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg"/>
                        </div>

                        <div className="flex flex-col items-center justify-center">

                            <h1>Git</h1>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>
  )
}

export default Skills