import { useState } from "react";
import Link from "next/link";
const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [promptText, setPromptText] = useState("");
  const [error, setError] = useState(null);
  const generatePrompt = async () => {
    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "user",
                content: promptText,
              },
            ],
            max_tokens: 100,
          }),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setGeneratedPrompt(data.choices[0].message.content);
      setError(null);
    } catch (error) {
      console.error("Error fetching prompt:", error);
      setError(`Error fetching prompt: ${error.message}`);
    }
  };

  const handleGeneratePrompt = async () => {
    try {
      // Existing code for fetching prompt...
      setGeneratedPrompt(data.choices[0].message.content);
      setError(null);
    } catch (error) {
      console.error("Error fetching prompt:", error);
      setError(`Error fetching prompt: ${error.message}`);
    }
  };
  return (
    <section className="w-full max-w-full flex-center flex-col">
      <h1 className="head_text">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any platform
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Write Your Prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => {
              const newPrompt = e.target.value;
              setPost({ ...post, prompt: newPrompt });
              setPromptText(newPrompt);
              console.log(post);
              console.log("HELLO == ", newPrompt);
            }}
            placeholder="Write your post here"
            required
            className="form_textarea"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Field of Prompt{" "}
            <span className="font-normal">
              (#product, #webdevelopment, #idea, etc.)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type="text"
            placeholder="#Tag"
            required
            className="form_input"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <button
            type="button"
            onClick={generatePrompt}
            className="text-gray-500 text-sm cursor-pointer"
          >
            Generate Prompt
          </button>
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="save"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-blue-900 rounded-full text-white"
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
        {error && (
          <div className="error-message mt-4 text-red-600">Error: {error}</div>
        )}
        {generatedPrompt && (
          <div className="generated-prompt mt-4">
            <p className="font-semibold">Generated Prompt:</p>
            <p>{generatedPrompt}</p>
          </div>
        )}
      </form>
    </section>
  );
};
export default Form;
