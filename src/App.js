import MainVideo from "./component/MainVideo";
import SearchBar from "./component/SearchBar";
import VideoList from "./component/VideoList";
import { Container,Col,Row } from "react-bootstrap";
import youtube from "./api/youtube";
import {useState,useEffect} from 'react'


function App() {

const [mainVideo,setMainVideo] = useState(undefined)
const [videos,setVideos] = useState([])

  const handleSubmit = async (searchTerm)=>{
    const response = await youtube.get('search',{
       params:{
           part:'snippet',
           maxResults:6,
           key:'AIzaSyArNM8HBCtd2idOZsrINgiMzGyZc-RVZgA',
           q:searchTerm
       }
    });
  console.log(response.data)
    setMainVideo(response.data.items[0]) 
    setVideos(response.data.items)
}

useEffect(()=>{
 handleSubmit('coding')
},[])


 return <Container>
  <SearchBar onSubmit={handleSubmit} />
<Row>
  <Col sm={8}>
  <MainVideo videoRef={mainVideo}/>
  </Col>

  <Col sm={4}>
  <VideoList videosList={videos} setMainVideo={setMainVideo}/>
  </Col>

  </Row>
  </Container>
}

export default App;