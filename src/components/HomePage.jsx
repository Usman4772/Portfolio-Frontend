"use client";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Avatar from "./Avatar";
import useConversation from "@/hooks/useConversation";
import Chat from "./Chat";

function HomePage() {
  const { message, flags, query, setQuery, reset, loading, getAIResponse } =
    useConversation();

  return (
    <div className="w-screen min-h-screen flex flex-col items-center">
      {!loading && message?.type !== "ai" ? (
        <NavBar setQuery={setQuery} getAIResponse={getAIResponse} />
      ) : (
        <Avatar
          width={50}
          height={50}
          className={"py-4 cursor-pointer"}
          onClick={reset}
        />
      )}

      <div className="flex flex-col justify-start flex-1 py-2">
        {!message?.message ? (
          <Avatar />
        ) : (
          <div className=" w-[650px]   flex items-start justify-center">
            <Chat message={message} flags={flags} loading={loading} />
          </div>
        )}
      </div>
      <Footer
        query={query}
        setQuery={setQuery}
        getAIResponse={getAIResponse}
        loading={loading}
      />
    </div>
  );
}

export default HomePage;
