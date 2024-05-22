"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Butterfly from "@components/Animation";

const Page = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCardClick = (path) => {
    router.push(path);
  };

  return (
    <div className="flex w-full mt-20">
      <Butterfly />
      <div
        className="border border-gray-300 text-center hover:bg-gray-400 transition duration-300 flex-1 bg-slate-200 rounded-md shadow-md"
        onClick={() => handleCardClick("/create-prompt")}
      >
        <p className="blue_gradient text-center text-2xl mt-16">
          AI Generated Prompt
        </p>
        <Image
          src="/assets/images/robot-removebg-preview.png"
          alt="GFG logo imported from public directory"
          width={500}
          height={800}
        />
      </div>
      <div className="flex items-center justify-center flex-shrink-0">
        <Image
          src="/assets/images/chatbot.png"
          alt="GFG logo imported from public directory"
          width={500}
          height={800}
        />
      </div>
      <div
        className="border border-gray-300 text-center hover:bg-gray-400 transition duration-300 flex-1  bg-slate-200 rounded-md shadow-md ms-2"
        onClick={() => handleCardClick("/ai-prompt")}
      >
        <p className="blue_gradient text-center text-2xl mt-16">
          Custom Prompt
        </p>
        <Image
          src="/assets/images/custom (2).png"
          alt="GFG logo imported from public directory"
          width={500}
          height={800}
        />
      </div>

      <Butterfly />
    </div>
  );
};

export default Page;
