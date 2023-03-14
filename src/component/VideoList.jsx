import Video from "./Video"

const VideoList=({videosList,setMainVideo})=>{
    console.log(setMainVideo)
    console.log(videosList)

      return videosList==0 ? <h1>Loading.....</h1>:<div className="mt-5">
      {videosList.map((vid,idx)=> <Video videoDetail={vid} key={idx} setMainVideo={setMainVideo}/>)}
  </div>


         
}

export default VideoList
