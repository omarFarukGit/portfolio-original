import React from "react";
import { assets } from "../assets/assets";

const projects = [
  {
    title: "Muslim Bazar – Online Islamic eCommerce Platform",
    desc: "Built using the MERN stack (MongoDB, Express.js, React.js, and Node.js Features User registration and authentication (JWT-based)Product listing and category filtering Shopping cart and order management Secure checkout process Admin dashboard for full control Responsive design for mobile and desktop RESTful API integration.",
    tags: ["JavaScript", "React.js", "Node.js", "MongoDB", "Express"],
    image: assets.muslim_bazar,
    liveLink: "https://muslim-bazar-client.vercel.app/",
    gitLink: "https://github.com/omarFarukGit/Muslim_Bazar",
  },
  {
    title: "CarRental: Real-Time Ride Booking Web Application",
    desc: "A modern car booking web application that allows users to easily search, book, and manage rides in real time. It provides a seamless experience with live tracking, fare estimation, and secure payment option",
    tags: ["JavaScript", "React.js", "Node.js", "MongoDB", "Express"],
    image: assets.carRental,
    liveLink: "https://alimoon.vercel.app/",
    gitLink: "#",
  },
  {
    title: "Pixgen Ai generate Image",
    desc: "PixGen is an AI-powered image generation application that allows users to create stunning visuals from text prompts quickly and easily..",
    tags: ["Next.js", "React", "Better-auth", "Tailwind CSS", "MongoDB"],
    image: assets.pixgen,
    liveLink: "https://next-pixgen.vercel.app/",
    gitLink: "https://github.com/omarFarukGit/next-pixgen",
  },
];

const Projects = () => {
  return (
    <div className="dark:bg-black bg-white text-white min-h-screen px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-2 dark:text-white text-black">
        Projects
      </h1>
      <p className="text-gray-400 text-center mb-10">Recent Projects</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#0f172a] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover"
            />

            {/* Content */}
            <div className="p-5 space-y-4">
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <p className="text-sm text-gray-400">{project.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-800 px-2 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex justify-between items-center pt-3">
                <button className="text-sm bg-gray-800 px-3 py-1 rounded-lg hover:bg-gray-700">
                  <a href={project.gitLink} target="_blank">
                    {" "}
                    Git Hub
                  </a>
                </button>
                <button className="text-sm bg-blue-600 px-3 py-1 rounded-lg hover:bg-blue-500">
                  <a href={project.liveLink} target="_blank">
                    {" "}
                    Live Demo
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
