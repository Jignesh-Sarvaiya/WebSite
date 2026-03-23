import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactUsPage() {
  return (
    <div className="bg-nature-beige min-h-screen pb-20">
      
      <div className="bg-[#0a4d3c] pt-20 pb-40 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-nature-beige mb-4">Contact Us</h1>
        <p className="text-white/80 max-w-xl mx-auto text-lg">
          We'd love to hear from you. Whether you have a question about our products, farms, or anything else, our team is ready to answer all your questions.
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-[1200px] -mt-24 relative z-10">
        <div className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden border border-nature-cream">
          
          {/* Contact Information (Left) */}
          <div className="w-full lg:w-2/5 p-10 md:p-14 bg-[#1b4332] text-white flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-serif mb-2">Get in Touch</h3>
              <p className="text-white/70 mb-12">Fill up the form and our team will get back to you within 24 hours.</p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-6 text-[#dfb175]" />
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-white/80 text-sm font-sans">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-6 text-[#dfb175]" />
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-white/80 text-sm font-sans">hello@nisargorganicfarm.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-6 text-[#dfb175]" />
                  <div>
                    <h4 className="font-bold mb-1">Farm Location</h4>
                    <p className="text-white/80 text-sm font-sans leading-relaxed">
                      Nisarg Organic Farm HQ,<br/>
                      Village Green Fields,<br/>
                      Gujarat, India 380001
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 flex space-x-6">
              {/* Social placeholders */}
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#dfb175] transition-colors cursor-pointer">
                <span className="font-bold">in</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#dfb175] transition-colors cursor-pointer">
                <span className="font-bold">fb</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#dfb175] transition-colors cursor-pointer">
                <span className="font-bold">ig</span>
              </div>
            </div>
            
            {/* Background design */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-tl-full pointer-events-none"></div>
          </div>

          {/* Contact Form (Right) */}
          <div className="w-full lg:w-3/5 p-10 md:p-14 bg-white">
            <form className="flex flex-col h-full justify-center space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full border-b-2 border-gray-200 py-3 outline-none focus:border-[#1b4332] transition-colors bg-transparent" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full border-b-2 border-gray-200 py-3 outline-none focus:border-[#1b4332] transition-colors bg-transparent" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full border-b-2 border-gray-200 py-3 outline-none focus:border-[#1b4332] transition-colors bg-transparent" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                <input type="text" className="w-full border-b-2 border-gray-200 py-3 outline-none focus:border-[#1b4332] transition-colors bg-transparent" placeholder="How can we help?" />
              </div>

              <div className="flex-grow">
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea className="w-full border-2 border-gray-200 py-3 px-4 rounded-xl outline-none focus:border-[#1b4332] transition-colors bg-transparent h-32 resize-none" placeholder="Write your message here..."></textarea>
              </div>

              <button type="button" className="bg-[#1b4332] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#0a4d3c] transition-all flex items-center w-max shadow-md shadow-nature-green/20">
                Send Message <Send className="w-4 h-4 ml-3" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
