export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white ">
            Hi, there!
          </h1>
          <p className="mb-8 leading-relaxed">
            I&apos;m Mihael Yordanov, a budding software developer with a thirst
            for learning and a passion for problem-solving. I thrive on
            challenges and am constantly expanding my knowledge in software
            development. I&apos;m on the lookout for my first opportunity to
            contribute to innovative projects and collaborate with talented
            teams. I&apos;m excited to apply my skills in a professional
            setting.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full w-3/4"
            alt="hero"
            src="./profile1.jpg"
          />
        </div>
      </div>
    </section>
  );
}
