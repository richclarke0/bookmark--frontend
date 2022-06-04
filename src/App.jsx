import './App.css';
import {useState, useEffect} from "react";
import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';

const App = () => {
  const [links, setLinks] = useState(null);
  const [formState, setFormState] = useState({
    
  });
  
  const url = "https://bookmark--backend.herokuapp.com/bookmarks/";

  const getLinks = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setLinks(data)
  };

  const createLink = async (link) => {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(link)
    })
    getLinks();
  };

  const updateLink = async (link,id) => {
    await fetch(url + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(link)
    })
    getLinks();
  };

  const deleteLink = async (id) => {
    await fetch(url + id, {
      method: "DELETE"
    })
    getLinks();
  }

  //booya function
  function editLink(id, url, title) {
    setFormState({
      title: title,
      url: url,
    })
    deleteLink(id)
  }


  useEffect(() => {getLinks()}, []);
  
const loaded = () => {
  return (
    <div className="App">
      <Header />
      <Form 
        createLink={createLink}
        setFormState={setFormState}
        formState={formState}
      />
        <hr />
      <List 
        links={links}
        createLink={createLink}
        deleteLink={deleteLink}
        editLink={editLink}
      />
    </div>
  );
    }
    return links ? loaded() : <h1>Loading...</h1>
}

export default App;