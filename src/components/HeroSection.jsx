import { ArrowDown } from "lucide-react"

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">

         <div className="space-y-6">

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">  
                <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-violet-500 to-violet-400 opacity-0 animate-fade-in-delay-1"> Gia Loi</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-violet-400 to-violet-300 opacity-0 animate-fade-in-delay-2"> Do</span>
            </h1>
            <h2 className="text-3xl md:text-5x2 tracking-tight">
                <p className="text-[#a383f3] opacity-0 animate-fade-in-delay-3">
                    A College student from Seneca Polytechnic
                </p>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">Code isn't just logic — it's the language of possibility</p>

            <div>
                <a href="#projects" className="cosmic-button">
                    View My Work
                </a>
            </div>

         </div>

        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        
        <span className="text-sm text-muted-foreground mb-2"> Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary"/>

        </div>
    </section>
  )
}

export default HeroSection