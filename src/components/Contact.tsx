import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { ContactForm } from './ui/ContactForm';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Contact() {
  return (
    <SectionBackground>
      <section id="contact">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Got a cool project idea? Want to collaborate? Or just want to say hi? Drop me a line!">
            Get In Touch
          </SectionTitle>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Left Column: Contact Info */}
            <div className="flex-1 bg-white/20 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl p-5 sm:p-6 shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-[1.02]">
              <h3 className="text-2xl font-semibold mb-6 text-white dark:text-white">Let's Connect</h3>
              <p className="text-gray-200 dark:text-gray-300 mb-8">
                Whether you've got a crazy project idea, want to collaborate on something awesome, or just want to chat about tech over coffee ☕ - I'm all ears! And yes, this actually goes straight to my inbox, not some random void like other contact forms.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:sahanaacharyaaa85@gmail.com"
                  className="flex items-center gap-3 text-white hover:text-gray-400"
                >
                  <Mail className="w-6 h-6" />
                  <span>sahanaacharyaaa85@gmail.com</span>
                </a>
                <a
                  href="https://github.com/sahana-pixel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-gray-400"
                >
                  <Github className="w-6 h-6" />
                  <span>github.com/sahana-pixel</span>
                </a>
                <a
                  href="https://linkedin.com/in/sahana-acharya-a8b329284"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-gray-400"
                >
                  <Linkedin className="w-6 h-6" />
                  <span>linkedin.com/in/sahana-acharya</span>
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="flex-1 bg-white/20 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl p-5 sm:p-6 shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-[1.02]">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
