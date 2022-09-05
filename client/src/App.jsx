import { useState } from "react";
import Card from "./Components/Card/Card";
import Navbar from "./Components/Navbar/Navbar";

import { posts } from "./Data";

const App = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");

  console.log(user);

  return (
    <div className="container">
      {user ? (
        <>
          <Navbar />
          {posts.map((post)=>(

            <Card key={post.id} post={post}/>
          ))}
          <span className="username">{username}</span>
        </>
      ) : (
        <div className="login">
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={() => setUser(username)}>Login</button>
        </div>
      )}
    </div>
  );
};

export default App;
