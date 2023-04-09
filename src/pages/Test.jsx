import { useState } from "react";
import ReactPlayer from "react-player/";

const Test = () => {
  [URLS, setURLS] = useState([]);

  const fetchURLS = () => {};
    
  
  return (
    <div>
      <ReactPlayer
        controls={true}
        url="https://www.youtube.com/watch?v=mgJ8BZi3vTA&ab_channel=Paramore"
      />
    </div>
  );
};

export default Test;
