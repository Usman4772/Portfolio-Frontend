import { Heart, Coffee, Code, Music, Camera, MapPin } from "lucide-react";

function AboutMe() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-start gap-8">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="relative">
            <img
              src="/profilePic.jpg"
              alt="Usman Ali"
              className="w-48 h-48 rounded-full object-cover border-4 border-gray-100 shadow-lg"
            />
            <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Personal Introduction */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Hey there! I&apos;m Usman 👋
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            A passionate full-stack developer from the beautiful city of Jhelum,
            Pakistan. When I&apos;m not crafting code or building amazing web
            applications, you&apos;ll find me exploring new technologies,
            sipping coffee, and turning ideas into digital reality.
          </p>

          {/* Personal Stats */}
          <div className="grid grid-cols-2  gap-4 mb-6">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">1.5+</div>
              <div className="text-sm text-gray-600">Years Coding</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">15+</div>
              <div className="text-sm text-gray-600">Projects Built</div>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Interests */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Interests & Passions
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
          <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <Code className="w-6 h-6 text-blue-600" />
            <div>
              <div className="font-medium text-gray-800">Clean Code</div>
              <div className="text-sm text-gray-600">
                Writing elegant solutions
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
            <Coffee className="w-6 h-6 text-green-600" />
            <div>
              <div className="font-medium text-gray-800">Coffee Lover</div>
              <div className="text-sm text-gray-600">Fuel for creativity</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
            <Music className="w-6 h-6 text-purple-600" />
            <div>
              <div className="font-medium text-gray-800">Music Enthusiast</div>
              <div className="text-sm text-gray-600">Creative inspiration</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
            <Camera className="w-6 h-6 text-orange-600" />
            <div>
              <div className="font-medium text-gray-800">Photography</div>
              <div className="text-sm text-gray-600">Capturing moments</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
            <Heart className="w-6 h-6 text-red-600" />
            <div>
              <div className="font-medium text-gray-800">Problem Solving</div>
              <div className="text-sm text-gray-600">My daily passion</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors">
            <MapPin className="w-6 h-6 text-teal-600" />
            <div>
              <div className="font-medium text-gray-800">Exploring</div>
              <div className="text-sm text-gray-600">New places & ideas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Fun Quote */}
      <div className="mt-8 pt-8 border-t border-gray-200 text-center">
        <blockquote className="text-lg italic text-gray-600">
          &quot;Code is like humor. When you have to explain it, it&apos;s
          bad.&quot;
        </blockquote>
        <p className="text-sm text-gray-500 mt-2">- My coding philosophy</p>
      </div>
    </div>
  );
}

export default AboutMe;
