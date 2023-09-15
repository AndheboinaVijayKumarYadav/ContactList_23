import React,{useState,useEffect} from 'react';
import './styles.css';
import ContactCard from './Components/ContactCard';


function App() {
  const [contacts , setContacts] = useState([]);

  useEffect(() => {
    /* calling the async function here */
    fetchingContacts();
    
    /* async function  */
    async function fetchingContacts() {
      const response= await fetch("https://randomuser.me/api/?results=4");
      const data = await response.json();
      setContacts(data.results);
    }
  },[]) /* empty array here is called dependency array */
  return (
    <>
        {contacts.map((contact) => {
          return <ContactCard 
            avatar={contact.picture.large}
            name={contact.name.first + contact.name.last}
            email={contact.email}
            age={contact.dob.age}
            />
        })}
    </>
    
  );
}

export default App;
