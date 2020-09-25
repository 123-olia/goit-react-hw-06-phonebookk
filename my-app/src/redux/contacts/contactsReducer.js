import { combineReducers } from "redux";
import contactsActions from "./contactsActions";
import { createReducer } from "@reduxjs/toolkit";

const addContact = (state, action) => {
  return [...state, action.payload.contact];
};

const deleteContact = (state, action) => {
  return state.filter((contact) => contact.id !== action.payload);
};

const items = createReducer([], {
  [contactsActions.addContact]: addContact,
  [contactsActions.deleteContact]: deleteContact,
});

const filter = createReducer("", {
  [contactsActions.handleChangeFilter]: (state, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});

//   componentDidMount() {
//     const persistedContacts = localStorage.getItem("contacts");
//     if (persistedContacts) {
//       this.setState({
//         contacts: JSON.parse(persistedContacts),
//       });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//     }
//   }
