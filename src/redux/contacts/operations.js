import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://connections-api.goit.global";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const data = await axios.get("/contacts");
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (values, thunkAPI) => {
    try {
      const data = await axios.post("/contacts", {
        name: values.name,
        number: values.number
          .split(/(\d{3})(\d{3})(\d{4})/)
          .filter((item) => item !== "")
          .join(" "),
      });
      console.log(data);
      if (data.status === 201) {
        toast.success("Contact added successfully!");
      }
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const data = await axios.delete(`/contacts/${id}`);
      if (data.status === 200) {
        toast.success("Contact successfully deleted!");
      }
      return data.data;
    } catch (error) {
      toast.error("Contact not deleted!");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContactt",
  async (edit, thunkAPI) => {
    try {
      const data = await axios.patch(`/contacts/${edit.id}`, {
        name: edit.name,
        number: edit.number,
      });
      if (data.status === 200) {
        toast.success("The contact has been successfully changed!");
      }
      return data.data;
    } catch (error) {
      toast.error("The contact has not been changed!");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
