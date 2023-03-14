import Card from 'react-bootstrap/Card';

const MainVideo=({videoRef})=>{
  if(videoRef==undefined) return <h1>Loading......</h1>

  console.log(videoRef)
  const videoSrc = `https://www.youtube.com/embed/${videoRef.id.videoId}`
  
    return <Card className="mt-5">
      
      
    <Card.Body>
    {/* <Card.Img variant="top" src="https://empirics.asia/storage/2018/09/itsgreatoutthere-unsplash-03.jpg"/> */}
    
    <iframe height="100%" width="100%" title="VideoTitle" src={videoSrc}/>
  
      <Card.Title>{videoRef.snippet.channelTitle}</Card.Title>
      <Card.Text>
      {videoRef.snippet.description}
      </Card.Text>
      
    </Card.Body>
  </Card>
}

export default MainVideo
