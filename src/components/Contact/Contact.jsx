import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Mail,
  User,
  MessageSquare,
  Send,
  MapPin,
  Sparkles,
  Github,
  Linkedin,
  ArrowUpRight,
  Briefcase,
} from "lucide-react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import SectionHeading from "../motion/SectionHeading";
import Reveal from "../motion/Reveal";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Mathura, India",
  },
  {
    icon: Briefcase,
    label: "Availability",
    value: "Open to opportunities",
  },
  {
    icon: Sparkles,
    label: "Focus",
    value: "Full Stack & AI Engineering",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Lucifer-Tech-arch",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/krishna-goswami-9040b9240/",
  },
  {
    icon: SiLeetcode,
    label: "LeetCode",
    href: "https://leetcode.com/u/Lucifer_123Krishna/",
    isReactIcon: true,
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/itz_krishna_since2005/",
    isReactIcon: true,
  },
  {
    icon: FaYoutube,
    label: "YouTube",
    href: "https://www.youtube.com/@krishnagoswami7178",
    isReactIcon: true,
  },
];

const formFields = [
  { name: "user_name", type: "text", placeholder: "John Doe", label: "Your Name", icon: User },
  { name: "user_email", type: "email", placeholder: "john@example.com", label: "Your Email", icon: Mail },
  { name: "subject", type: "text", placeholder: "Project inquiry", label: "Subject", icon: MessageSquare },
];

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_sjeq6m2",
        "template_6wnjn7d",
        form.current,
        "uP7_2rP7Ff5sgrJTP"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
          setTimeout(() => setIsSent(false), 4000);
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-[7vw] lg:px-[16vw] font-sans overflow-hidden"
    >
      <ToastContainer />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-600/8 rounded-full blur-[100px] pointer-events-none" />

      <SectionHeading
        title="CONTACT"
        subtitle="Have a project in mind or want to collaborate? Drop me a message — I'd love to hear from you."
      />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 mt-4">
        <Reveal direction="left" className="lg:col-span-2">
          <motion.div
            className="h-full p-6 sm:p-8 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-[#12082a]/90 via-[#0d081f]/95 to-[#050414]/90 glass-card shadow-[0_0_40px_rgba(130,69,236,0.12)]"
            whileHover={{ borderColor: "rgba(168, 85, 247, 0.35)" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-medium mb-5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for work
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">
              Let&apos;s build something{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                amazing
              </span>{" "}
              together
            </h3>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
              Whether it&apos;s a SaaS product, AI automation, or a full-stack
              web app — I&apos;m always excited to discuss new ideas and
              opportunities.
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-3 rounded-xl bg-gray-900/50 border border-gray-800/80 hover:border-purple-500/30 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                      {label}
                    </p>
                    <p className="text-sm text-gray-200 font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">
                Connect on social
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ icon: Icon, label, href, isReactIcon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-900/60 border border-gray-800 hover:border-purple-500/40 hover:bg-purple-950/30 text-gray-300 hover:text-purple-300 transition-colors text-sm"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {isReactIcon ? (
                      <Icon className="text-base" />
                    ) : (
                      <Icon size={16} />
                    )}
                    <span className="hidden sm:inline">{label}</span>
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </Reveal>

        <Reveal direction="right" delay={0.1} className="lg:col-span-3">
          <motion.div
            className="p-6 sm:p-8 rounded-2xl border border-gray-700/60 bg-gray-900/60 glass-card shadow-[0_0_30px_rgba(130,69,236,0.08)]"
            whileHover={{ borderColor: "rgba(168, 85, 247, 0.25)" }}
          >
            <div className="flex items-center gap-3 mb-6 pb-5 border-b border-gray-800/80">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/25">
                <Send size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Send a Message
                </h3>
                <p className="text-xs text-gray-500">
                  I typically respond within 24 hours
                </p>
              </div>
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {formFields.slice(0, 2).map(({ name, type, placeholder, label, icon: Icon }, i) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">
                      {label}
                    </label>
                    <div className="relative group">
                      <Icon
                        size={16}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition-colors"
                      />
                      <input
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0a0618]/80 text-white placeholder:text-gray-600 border border-gray-700/80 focus:outline-none focus:border-purple-500/70 focus:ring-2 focus:ring-purple-500/20 transition-all"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {formFields.slice(2).map(({ name, type, placeholder, label, icon: Icon }) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.22 }}
                >
                  <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">
                    {label}
                  </label>
                  <div className="relative group">
                    <Icon
                      size={16}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition-colors"
                    />
                    <input
                      type={type}
                      name={name}
                      placeholder={placeholder}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0a0618]/80 text-white placeholder:text-gray-600 border border-gray-700/80 focus:outline-none focus:border-purple-500/70 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    />
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project or idea..."
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0618]/80 text-white placeholder:text-gray-600 border border-gray-700/80 focus:outline-none focus:border-purple-500/70 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSending}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-white font-semibold bg-gradient-to-r from-[#8245ec] via-purple-600 to-pink-500 disabled:opacity-60 disabled:cursor-not-allowed"
                whileHover={!isSending ? { scale: 1.01, boxShadow: "0 0 28px rgba(130, 69, 236, 0.4)" } : {}}
                whileTap={!isSending ? { scale: 0.98 } : {}}
              >
                {isSending ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : isSent ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
