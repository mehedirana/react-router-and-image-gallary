import React, { useState } from "react";

export default function Home() {
  const [key, setKey] = useState("");
  const [data, setData] = useState([]);

  const getImage = () => {
    fetch(
      `https://api.unsplash.com/search/photos/?client_id=9jQ6aJcebqM85g9LLXYNqkN4tyDJhiXT09Sjr4s9PeQ&query=${key}`
    )
      .then((e) => e.json())
      .then((e) => setData(e.results));
  };

  

  console.log(data, data.map((item)=> item.urls.regular));
  return (
    <div>
      <div className="myHome">
        <span>Search</span>
        <input
          style={{ width: "60%" }}
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
        <button onClick={() => getImage()}>send</button>
      </div>

      <div style={{justifyContent:'space-around'}}>
        {
          data.map((item, index)=>{
             return (<div key={index} >
                 <img style={{height:'50%', width:'50%'}} src={item.urls.regular} />
             </div>)
          })
        }
      </div>
    </div>
  );
}

//9jQ6aJcebqM85g9LLXYNqkN4tyDJhiXT09Sjr4s9PeQ     access key

//WJvEjgl_YhcA_S_YXeH3TVX6iEQKVM55yUUsuKWhOkw secret key
