import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://hn.algolia.com/api/v1/search?query=redux")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.hits);
        setData(res.hits);
      })
      .catch((err) => setError(err));
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5">
      {data.map((item) => (
        <div className="bg-slate-300 p-5 flex flex-col items-center" key={item.story_id}>
          <p>{item.title}</p>
          <p>{item.author}</p>
          <a target="_blank" className="bg-blue-400 w-fit px-3 py-1 rounded-md text-white" href={item.url}>click go to book</a>
          {item._tags.map((tag, index) => (
            <div key={index}>
              <p>{tag}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
