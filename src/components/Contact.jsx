const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-[#1e2a4a] to-[#3e5c92] text-white px-6 md:px-20 py-16"
    >
      <div className="max-w-3xl mx-auto border border-white/20 rounded-2xl bg-white text-black bg-opacity-10 backdrop-blur-md shadow-2xl p-10 md:p-14">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-2">
          Contact
        </h2>
        <p className="text-md md:text-xl text-center text-black mb-8">
          Get in touch — I'd love to hear from you!
        </p>

      
        <form className="space-y-6">
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full px-4 py-2 md:py-3 border-1 rounded-lg bg-white/90 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7f9cf5]"
              required
            />
          </div>

          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              className="w-full px-4 py-2 md:py-3 border-1 rounded-lg bg-white/90 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7f9cf5]"
              required
            />
          </div>

         
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Type your message..."
              className="w-full px-4 py-2 md:py-3 border-1 rounded-lg bg-white/90 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7f9cf5]"
              required
            ></textarea>
          </div>

        
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#465697] hover:bg-[#3b4e80] text-white font-semibold px-6 py-3 rounded-full shadow-md transition-transform duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
