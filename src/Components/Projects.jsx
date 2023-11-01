import { CodeIcon } from "@heroicons/react/solid";

const projects = [
  {
    title: "React Travel List",
    subtitle: "Travel List",
    description: "Fundamental react project, practicing state management.",
    image: "../public/travel2.gif",
  },
  {
    title: "React MongoDB Login Form",
    subtitle: "LoginForm",
    description:
      "React Login Form, using MongoDB and a restfull API, ReactRouter",
    image: "../public/auth2.gif",
    link: "https://gaws-auth-mongodb.netlify.app/",
  },
  {
    title: "Live data tracking",
    subtitle: "RaceTracking",
    description:
      "Tracking live data with RFID and ESP32, seding requests to a restfull API, collecting the data with MongoDB and displaying it with the help of React(work in progress)",
    image: "../public/tugab2.gif",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I&apos;ve Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here are some of the projects, that i have been working on.
          </p>
        </div>
        <div className=" -m-4 justify-center">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="grid lg:grid-col-3 xl:aspect-video  m-auto p-4 "
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className=" absolute inset-0 w-full h-full object-fill object-center rounded-xl"
                  src={project.image}
                />
                <div className="px-8 py-20 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
