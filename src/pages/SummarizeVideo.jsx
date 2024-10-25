import React from 'react'

const SummarizeVideo = () => {
  return (
    <div>
        <h3 className='m-5'>Hãy nhập link video vào đây</h3>
        <input type="text" className='w-full outline-none p-5 bg-[#f6d5ca] rounded-[20px]' />
        <button className="m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Summarize</button>

        {/* result here */}
        <p className="w-full outline-none p-5 bg-[#f6d5ca] rounded-[20px] h-96"></p>
    </div>
  )
}

export default SummarizeVideo