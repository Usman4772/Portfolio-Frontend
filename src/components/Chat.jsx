import SyncLoader from "react-spinners/SyncLoader";
function Chat({ message, flags, loading }) {
  if (!message) return null;

  const isUser = message.type === "user";
  const isAI = message.type === "ai";

  if (loading && isUser) {
    return (
      <div className="flex flex-col w-full">
        <div className=" w-full flex justify-center mb-4 animate-slideUp">
          <div className="min-w-[20%] rounded-full max-w-[80%] md:max-w-[60%]">
            <div className="px-4 py-3 rounded-full rounded-br-md bg-blue-500 text-white shadow-sm">
              <div className="text-sm md:text-base leading-relaxed">
                {message?.message}
              </div>
            </div>
          </div>
        </div>
        {loading && (
          <div className="w-14 h-10 bg-gray-100 rounded-md flex items-center justify-center">
            <SyncLoader
              speedMultiplier={1}
              size={5}
              loading={loading}
              color="#17313E"
            />
          </div>
        )}
      </div>
    );
  }

  if (!loading && isAI) {
    return (
      <div className=" w-full flex justify-start mb-4 animate-slideUp">
        <div className=" min-w-[20%] max-w-[80%] md:max-w-[60%]">
          <div className="px-4 py-3  text-gray-800 ">
            <div className="text-sm md:text-base leading-relaxed">
              {message?.message}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default Chat;
