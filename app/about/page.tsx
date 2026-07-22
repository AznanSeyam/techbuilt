export default function About() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
        <h1 className="text-3xl font-bold mb-4">About</h1>

        <p className="text-lg text-gray-500 max-w-4xl text-justify leading-relaxed animate-fade-in-up">
          Welcome! This application is a personal platform built entirely by me,
          from scratch. As a developer, I designed and developed this space with
          the sole purpose of showcasing my learning journey, experiences, and
          the various projects and apps I have built.
        </p>
      </div>
    </>
  );
}
