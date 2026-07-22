export default function Contact() {
  return (
    <>
      {/* Main container with light background and centering layout */}
      <div className="flex flex-col items-center justify-center min-h-[85vh] px-6 py-12 bg-gray-50/50">
        {/* Animated heading and description block */}
        <div className="text-center mb-10 animate-fade-in-down">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Get In Touch
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-md mx-auto">
            Have a question, a project idea, or just want to say hello? Drop a
            message below!
          </p>
        </div>

        {/* Clean, shadow-styled Contact Form Wrapper */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-xl w-full animate-fade-in-up">
          <form className="space-y-6">
            {/* Name Input Field Group */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-200"
              />
            </div>

            {/* Email Input Field Group */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="hello@example.com"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-200"
              />
            </div>

            {/* Message Textarea Field Group */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Tell me about your project or inquiry..."
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-200 resize-none"
              ></textarea>
            </div>

            {/* Animated Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                Send Message
                {/* Clean inline SVG arrow icon */}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
