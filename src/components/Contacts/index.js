import React from "react";
import List from "./List";
import Form from "./Form";
import { useState, useEffect } from "react";
import "./styles.css"

function Contacts() {
    const [contacts, setContacts] = useState([])
    useEffect(()=>{
        console.log(contacts);
    }, [contacts])
  return (
    <div id="container">
      <h2>Contacts List</h2>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts}/>
    </div>
  );
}

export default Contacts;
