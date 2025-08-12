export default function BlinkingBadge({ text = "Looking for a talent?" }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white backdrop-blur-sm border border-purple-300/20 shadow-md">
      {/* Blinking green dot */}
      <div className="relative">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <div className="absolute inset-0 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-75"></div>
      </div>

      {/* Badge text */}
      <span className="text-gray-800 font-medium text-sm">{text}</span>
    </div>
  );
}
