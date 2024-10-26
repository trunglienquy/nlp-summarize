import axios from "axios"
import { useState } from "react"

const SummarizeVideo = () => {

  const [videoUrl, setVideoUrl] = useState("")
  const [error, setError] = useState("")
  const [summary, setSummary] = useState("")

  const getIdVideo = (url) => {
    const id_video = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
    return id_video ? id_video[1] : null
  }

  const handleSummarizeVideo = async() => {
    setError("")
    setSummary("")
    const videoId = getIdVideo(videoUrl)
    const data = {
      type: "video",
      video_id: videoId,
      top_n: 5
    }
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/api/summarize",
        data,
        {
          header: {
            "Content-Type": "application/json",
          },
        }
      )
      if (response.data.error) {
        setError(response.data.error)
      }
      if (response.data.summary) {
        setSummary(response.data.summary)
      }
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
        <h3 className='m-5'>Hãy nhập link video vào đây</h3>
        <input 
          type="text" 
          className='w-full outline-none p-5 bg-[#f6d5ca] rounded-[20px]'
          onChange={(e) => setVideoUrl(e.target.value)}
          placeholder="Enter url video here"
        />
        <button 
          className="m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSummarizeVideo}
        >Summarize</button>

        {/* result here */}
        <p className="w-full outline-none p-5 bg-[#f6d5ca] rounded-[20px] h-96">{error ? error : summary}</p>
    </div>
  )
}

export default SummarizeVideo