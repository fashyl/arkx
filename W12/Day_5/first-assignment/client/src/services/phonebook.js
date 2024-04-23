import axios from "axios";
const url = "http://localhost:3030/api/contacts";

export const addToPhonebook = async (name, number) => {
  const payload = {
    name,
    number,
  };
  try {
    const res = await axios.post(url, payload);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const getPhonebookEntries = async () => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const editPhoneBookEntries = async (id, updatedName, updatedNumber) => {
    try {
      const urlWithId = `${url}/${id}`;
      const payload = {
        name: updatedName,
        number: updatedNumber,
      };
      const res = await axios.patch(urlWithId, payload); 
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };
  
  export const deletePhoneBookEntries = async (id) => {
    try {
      const urlWithId = `${url}/${id}`;
      const res = await axios.delete(urlWithId);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };
  