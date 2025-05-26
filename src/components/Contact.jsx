import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone,Twitter, Send} from "lucide-react"
import { cn } from "../lib/utils"
import emailjs from "emailjs-com"
import { useState } from "react"
import { useToast } from "../hooks/use-toast"


const Contact = () => {

  const[formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });


  const {toast} = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result) => {setTimeout(() => {
       toast({
        title: "Message sent!",
        description: "Thanks you for your message. I'll get back to you soon."
       });
       setIsSubmitting(false);
       setFormData({name:"", email:"", message:""});
    }, 1500)

  }).catch(() => alert("Oops! Something went wrong. Please try again."));

  }

   
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
  <div className="container mx-auto max-w-5xl">

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In <span className="text-primary">Touch</span></h1>

      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Have a project in mind or want to collaborate? Feel free to reach out.
        I'm always open to discussing new opportunities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        <div className="space-y-8">

          <h2 className="text-2xl font-semibold mb-6 mt-7"> Contact Information</h2>

          <div className="space-y-6 justify-center">

            <div className="flex items-start space-x-4">

              <div className="p-3 rounded-full bg-primary/10"><Mail className="h-6 w-6 text-primary"/></div>

              <div>
                <h3 className="font-medium mr-26"> Email</h3>
                <a className="text-muted-foregrounded hover:text-primary transition-colors" href="gldo1@myseneca.ca"> gldo1@myseneca.ca</a>
              </div>

            </div>

            <div className="flex items-start space-x-4">

              <div className="p-3 rounded-full bg-primary/10"><Phone className="h-6 w-6 text-primary"/></div>

              <div>
                <h3 className="font-medium mr-14">Phone</h3>
                <a className="text-muted-foregrounded hover:text-primary transition-colors " tel="+14374259879">437-425-9879</a>
              </div>

            </div>

            <div className="flex items-start space-x-4">

              <div className="p-3 rounded-full bg-primary/10"><MapPin className="h-6 w-6 text-primary"/></div>

              <div>
                <h3 className="font-medium mx-auto mr-21"> Location</h3>
                <a className="text-muted-foregrounded hover:text-primary transition-colors"> Toronto, ON, Canada</a>
              </div>

            </div>

          </div>

          <div className="pt-8 lg:pr-15 md:mr-35">
            <h3 className="font-medium mb-4"> Connect With Me</h3>

            <div className="flex space-x-4 justify-center">
              <a href="https://www.linkedin.com/in/gia-loi-do-437477366/" target="_blank">
                <Linkedin/>
              </a>
              <a href="https://x.com/GiaLi247347" target="_blank">
                <Twitter/>
              </a>
              <a href="https://www.facebook.com/ogialoi/" target="_blank">
                <Facebook/>
              </a>
              <a href="https://www.instagram.com/loi2qw/" target="_blank">
                <Instagram/>
              </a>
            </div>

          </div>

        </div>

        <div className="bg-card p-8 rounded-lg shadow-xs">
          <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

          <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name</label>
                  <input value={formData.name} type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Name" onChange={(e) => setFormData({...formData, name: e.target.value})}/>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Email</label>
                  <input value={formData.email} type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2"> Your Message</label>
                  <textarea value={formData.message} id="message" name="message" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Message" onChange={(e) => setFormData({...formData, message: e.target.value})}/>
                </div>

                <button type="submit" disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2",

                )}> {isSubmitting ? "Sending..." : "Send Message"}<Send size={16}/></button>

          </form>
        </div>

      </div>
      
      </div>

    </section>
  )
}

export default Contact