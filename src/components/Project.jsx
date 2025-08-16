import { ExternalLink, Github } from "lucide-react";

function Project({ project }) {
  const {
    title,
    description,
    technologies,
    liveLink,
    activeTechnology,
    githubLink,
    previewImage,
  } = project;

  return (
    <div className=" w-[95%] md:w-full mb-12 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Project Image */}
      <div className="w-full h-64 bg-gray-200 overflow-hidden">
        {previewImage && (
          <img
            src={
              previewImage ||
              "/placeholder.svg?height=256&width=400&query=project preview"
            }
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`relative px-3 py-1 border border-gray-800 text-sm rounded-full font-medium cursor-default overflow-hidden group transition-colors duration-300 hover:text-white ${
                index === activeTechnology
                  ? "bg-gray-800 text-white"
                  : "text-gray-800"
              }`}
            >
              {index !== activeTechnology && (
                <span className="absolute inset-0 bg-gray-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              )}
              <span className="relative z-10">{tech}</span>
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-2 px-4 py-2 border border-gray-800 text-gray-800 rounded-lg overflow-hidden group transition-colors duration-300 hover:text-white shadow-md hover:shadow-lg"
            >
              <span className="absolute inset-0 bg-gray-800 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              <ExternalLink size={16} className="relative z-10" />
              <span className="relative z-10">Live Demo</span>
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Github size={16} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
