import React from "react";
import "./App.css";
import Title from "./Components/Title/Phonebook";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";

function App() {
  return (
    <div>
      <Title />
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
