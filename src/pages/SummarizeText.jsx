

const SummarizeText = () => {
  return (
    <div className="mt-10">
        <h3 className="m-5 font-medium">Hãy nhập văn bản bạn muốn tóm tắt vào ô bên dưới</h3>
        <textarea rows="10" className="w-full outline-none p-5 bg-[#f6d5ca] rounded-[20px] resize-none"></textarea>
        <button className="m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Summarize</button>

        {/* result here */}
        <p className="w-full outline-none p-5 bg-[#f6d5ca] rounded-[20px] h-96"></p>
    </div>
  )
}

export default SummarizeText