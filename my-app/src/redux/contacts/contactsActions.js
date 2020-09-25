import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const addContact = createAction("contacts/add", (name, number) => ({
  payload: {
    contact: {
      id: uuidv4(),
      name,
      number,
    },
  },
}));

const deleteContact = createAction("contacts/delete");

const handleChangeFilter = createAction("contacts/changeFilter");

export default { addContact, deleteContact, handleChangeFilter };
