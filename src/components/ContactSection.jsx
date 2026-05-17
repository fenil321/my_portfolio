import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";
import { cn } from "../lib/utils";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { send, sendForm, init } from "@emailjs/browser";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) init(publicKey);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const notifyTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_NOTIFY;
    const autoReplyTemplate = import.meta.env
      .VITE_EMAILJS_TEMPLATE_ID_AUTOREPLY;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // build params from the form fields
    const params = {
      name: e.target.name?.value,
      email: e.target.email?.value,
      message: e.target.message?.value,
    };

    if (serviceId && publicKey && notifyTemplate && autoReplyTemplate) {
      // send notification to owner, then auto-reply to visitor
      send(serviceId, notifyTemplate, params, publicKey)
        .then((res1) => {
          //console.log("EmailJS notify response:", res1);
          return send(serviceId, autoReplyTemplate, params, publicKey);
        })
        .then((res2) => {
          //console.log("EmailJS auto-reply response:", res2);
          toast.success(
            "Message sent — Thank you! I will get back to you soon.",
          );
          e.target.reset();
        })
        .catch((err) => {
          //console.error("EmailJS send error:", err);
          const message =
            err && err.text
              ? err.text
              : "Failed to send message. Try again later.";
          toast.error(message);
        })
        .finally(() => setIsSubmitting(false));
    } else if (serviceId && templateId && publicKey) {
      // fallback to single-template form send if only one template id provided
      sendForm(serviceId, templateId, e.target, publicKey)
        .then(() => {
          toast.success("Message Sent! Thank you for your message.");
          e.target.reset();
        })
        .catch((err) => {
          //console.error(err);
          toast.error("Failed to send message. Try again later.");
        })
        .finally(() => setIsSubmitting(false));
    } else {
      // Fallback simulation when env vars are not set
      setTimeout(() => {
        toast.success(
          "Message Sent! (simulation) Set VITE_EMAILJS_* env vars to enable real sending.",
        );
        setIsSubmitting(false);
        e.target.reset();
      }, 1500);
    }
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto mx-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In
          <span className="text-primary"> Touch</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-10"></h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mt-3"></h4>
                  <a
                    href="mailto:fenilofficial321@gmail.com"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    fenilofficial321@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
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

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none"
                />
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your Message..."
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}{" "}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
