import { Briefcase, Code, User } from "lucide-react";

const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">

      <div className="container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
               <h3 className="text-2xl font-semibold">Passionate Computer Engineering Technology Student</h3>

               <p className="text-muted-foreground">
                I am originally from Viet Nam but I am currently based in Toronto, Canada. My academic journey has fostered a profound dedication to software development, with a focus on designing responsive front-end interfaces and robust back-end systems.
               </p>

               <p className="text-muted-foreground">
                I possess expertise in React JS, JavaScript, C programming, HTML, CSS, etc, complemented by a capacity for rapid learning and adaptability to new technological frameworks.
               </p>

               <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">

                <a href="#contact" className="cosmic-button"> Get In Touch</a>
                <a download href="../../public/Resume.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"> Dowload CV</a>

               </div>

          </div>

          <div className="grid grid-clos-1 gap-6">

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">

                <Code className="h-6 w-6 text-primary"/>
                
                </div>

                <div className="text-left">

                <h1 className="font-semibold text-lg">
                  Web Development
                </h1>

                <p className="text-muted-foreground">
                  Creating responsive websites and web applications with modern frameworks.
                </p>

                </div>

              </div>
            </div>

            <div className="gradient-border p-6 card-hover">

              <div className="flex items-start gap-4">

                <div className="p-3 rounded-full bg-primary/10">

                <User className="h-6 w-6 text-primary"/>

                </div>

                <div className="text-left">

                <h2 className="font-semibold text-lg">
                  UI/UX Design
                </h2>

                <p className="text-muted-foreground">
                  Designing intuitive user interfaces and seamless user experiences.
                </p>

                </div>

              </div>

            </div>

            <div className="gradient-border p-6 card-hover">

              <div className="flex items-start gap-4">

                <div className="p-3 rounded-full bg-primary/10">

                <Briefcase className="h-6 w-6 text-primary"/>
                
                </div>

                <div className="text-left">

                <h3 className="font-semibold text-lg">
                  Project Management
                </h3>

                <p className="text-muted-foreground">
                  Practicing projects from conception to completion with agile methodologies.
                </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        </div>

    </section>
  );
}

export default AboutMe