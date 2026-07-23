export default function Services() {
  // Service item structures mapped in an array
  const servicesList = [
    {
      title: "Source Code Upload",
      description:
        "Sharing clean, well-documented, and production-ready source codes from various real-world projects and applications.",
      tag: "Open Source",
      accentColor: "blue",
      // Pure HTML/SVG Icon code
      icon: (
        <svg
          className="w-8 h-8 text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
        </svg>
      ),
    },
    {
      title: "Coding Video Upload",
      description:
        "Step-by-step programming tutorials, project builds, and live coding sessions to make learning interactive and visual.",
      tag: "Tutorials",
      accentColor: "indigo",
      icon: (
        <svg
          className="w-8 h-8 text-indigo-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 12l-6.75 3.897V8.103L15.75 12z"
          />
        </svg>
      ),
    },
    {
      title: "Notes Upload",
      description:
        "Comprehensive tech notes, cheat sheets, and conceptual explanations to help grasp complex programming topics easily.",
      tag: "Resources",
      accentColor: "purple",
      icon: (
        <svg
          className="w-8 h-8 text-purple-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Main container with clean responsive padding */}
      <div className="flex flex-col items-center justify-center min-h-[75vh] px-6 py-12 bg-gray-50">
        {/* Animated heading block */}
        <div className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            My Services
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl">
            Explore the specialized digital content, resources, and services I
            provide to help developers grow.
          </p>
        </div>

        {/* 100% Pure Tailwind Grid Framework */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full animate-fade-in-up">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Embedded SVG Icon wrapper */}
                <div className="p-3 bg-gray-50 rounded-xl w-fit group-hover:bg-blue-50 transition-colors duration-300">
                  {service.icon}
                </div>

                {/* Meta details */}
                <span className="inline-block mt-4 text-xs font-semibold tracking-wider text-blue-600 uppercase">
                  {service.tag}
                </span>

                <h3 className="text-xl font-bold text-gray-900 mt-2 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom actionable link layout */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <button className="text-sm font-medium text-gray-700 group-hover:text-blue-600 flex items-center gap-1 transition-colors duration-300">
                  Learn More <span>&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
