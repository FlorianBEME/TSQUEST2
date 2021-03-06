import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

// Language: typescript
interface IPerson {
  id: number;
  email: string;
  avatar: string;
}

function App() {
  const [persons, setPersons] = useState<IPerson[]>([]);
  useEffect(() => {
    const fetchImages = async () => {
      const data = (await axios.get("https://reqres.in/api/users/")).data
        .data as IPerson[];
      setPersons(data);
    };
    fetchImages();
  }, []);
  return (
    <div className="App">
      {persons.map((person: IPerson) => (
        <React.Fragment key={person.id}>
          <p>{person.email}</p>
          <img src={person.avatar} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default App;
