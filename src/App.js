import React, {useState, useEffect} from "react";
import axios from "axios";
import './App.css';

const App = () => {

  const [dataApi, setDataApi] = useState([]);
  
  const fetchRandomUser = () => {
      axios.get('https://randomuser.me/api/')
      .then((response) => {
        console.log(response.data.results);
        setDataApi(response.data.results);
      })
  }

  useEffect(() => {
    fetchRandomUser();
  }, []);

  return (
    <div className="App">
      <h1>Welcome to my random user Api application</h1>
      <button onClick={fetchRandomUser}>Fetch new random user</button>

      <div className="random_user_container">
        {dataApi.map(person => (
          <div className="person_container" key={person.cell}>
            <img src={person.picture.large} alt={person.name.first}/>
            <span>Name: {person.name.first} {person.name.last}</span>
            <span>Email: {person.email}</span>
            <span>Country: {person.location.country}</span>
            <span>Street: {person.location.street.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
