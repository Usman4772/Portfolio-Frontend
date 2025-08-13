import Image from "next/image";

function AboutMe() {
  const skills = ["AI", "Developer", "Full Stack", "React", "SaaS Builder"];

  return (
    <div className="w-full py-6 bg-white rounded-lg shadow-sm">
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="flex-shrink-0">
          <Image
            src="/profilePic.jpg"
            alt="Usman's Profile"
            width={200}
            height={200}
            className="rounded-lg object-cover"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Usman</h1>
          <p className="text-gray-600 mb-4">22 years old • Pakistan</p>

          <div className="mb-4">
            <p className="text-gray-800 leading-relaxed">Hey 👋</p>
            <p className="text-gray-800 leading-relaxed mt-2">
              I&apos;m Usman, a passionate developer specializing in AI and
              full-stack development. I&apos;m currently working on innovative
              AI solutions and building amazing SaaS products. I&apos;m
              passionate about AI, tech, entrepreneurship, and creating
              impactful digital experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <p className="text-gray-700 leading-relaxed">
          I&apos;m Usman, a 22-year-old full-stack developer specializing in AI,
          currently building innovative solutions and pushing the boundaries of
          technology. 🚀 Before diving deep into AI development, I was a
          passionate competitive programmer and tech enthusiast! Now, I&apos;m
          interning at various tech companies in Pakistan, where I get to work
          with cutting-edge AI technologies. I&apos;m super passionate about
          tech, entrepreneurship, and building awesome SaaS products. Voilà!
          What about you? What interests you?
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
