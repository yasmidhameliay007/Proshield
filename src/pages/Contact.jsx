import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { SectionHeader } from "../components/SectionHeader";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="relative py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&h=600&fit=crop" alt="" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">Contact us</h1>
          <div className="flex items-center gap-2 text-primary-foreground/70">
            <Link to="/" className="hover:text-accent">Home</Link>
            <span>/</span>
            <span className="text-accent">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <SectionHeader subtitle="Contact Us" title="Do you have questions?" titleAccent="ask us anytime" centered />

          <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Phone, title: "Contact Us", lines: ["+91-123 456 789", "+91-123 456 789"] },
              { icon: Mail, title: "E-Mail Us", lines: ["infodomainname@gmail.com", "domainname@gmail.com"] },
              { icon: MapPin, title: "Our Location", lines: ["12345 Unity Avenue Suite 100", "Springfield, USA 54321"] },
            ].map((item) => (
              <div key={item.title} className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                {item.lines.map((line, i) => (
                  <p key={i} className="text-muted-foreground text-sm">{line}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="mt-16 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-center mb-8">Get in touch with us</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input type="text" placeholder="Your Name" className="w-full px-5 py-4 rounded-xl border border-border bg-background focus:border-accent focus:outline-none transition-colors" />
                <input type="email" placeholder="Email Address" className="w-full px-5 py-4 rounded-xl border border-border bg-background focus:border-accent focus:outline-none transition-colors" />
              </div>
              <input type="text" placeholder="Subject" className="w-full px-5 py-4 rounded-xl border border-border bg-background focus:border-accent focus:outline-none transition-colors" />
              <textarea placeholder="Your Message" rows={5} className="w-full px-5 py-4 rounded-xl border border-border bg-background focus:border-accent focus:outline-none transition-colors resize-none" />
              <button type="submit" className="w-full py-4 bg-accent text-accent-foreground font-semibold rounded-full hover:shadow-lg hover:shadow-accent/30 transition-all flex items-center justify-center gap-2">
                Submit Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
