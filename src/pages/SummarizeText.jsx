import { useState } from "react";
import axios from "axios";

const SummarizeText = () => {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("")

  const handleSummarizeText = async () => {
    const oneLineText = text.replace(/\n/g, "");
    const data = {
      type: "text",
      text: oneLineText,
      top_n: 5,
    };
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/api/summarize",
        data,
        {
          header: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200){
        setSummary(response.data.summary)
      }
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className="mt-10">
      <h3 className="m-5 font-medium">
        Hãy nhập văn bản bạn muốn tóm tắt vào ô bên dưới
      </h3>
      <textarea
        rows="10"
        className="w-full outline-none p-5 bg-[#f6d5ca] rounded-[20px] resize-none"
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button
        onClick={handleSummarizeText}
        className="m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Summarize
      </button>

      {/* result here */}
      <p className="w-full outline-none p-5 bg-[#f6d5ca] rounded-[20px] h-96">{summary}</p>
    </div>
  );
};

export default SummarizeText;
