import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
// import { data } from "../../index.js";
const VideoList = () => {

    const [videoList, setVideoList] = useState([]);
    const [search, setSearch] = useState("");
    const [len, setLen] = useState(10);
    // const [len, setLen]

    const fetchData = async () => {
        try {
            if(search==="")return;
            const data = await fetch(`http://localhost:3333/api/find/${search}/${len}`);
            const json = await data.json();
            console.log(json.items[0]);
            setVideoList(json.items);
        }
        catch (err){
            console.error(err);
        }
    };

    
  return (
    <>
    <div>
        <input value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder="Search"/>
        <label for="length">Results Count</label>

        <select name="length" onChange={(e)=>{setLen(e.target.value)}}>
          <option defaultValue value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
        <button onClick={(e)=>{fetchData()}}>Search</button>
    </div>
    <div>
      {videoList.map((vid)=> {
        return(
          <VideoCard shareUrl={vid?.snippet?.thumbnails?.medium?.url}/>
        )
      })}
    </div>
    </>
  );
};

export default VideoList;
