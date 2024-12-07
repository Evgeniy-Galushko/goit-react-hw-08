import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, statusFilter) => {
    console.log("Calculating visible contacts.");
    if (!Number(statusFilter)) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(statusFilter.toLowerCase())
      );
    } else {
      return contacts.filter((contact) =>
        contact.number.toLowerCase().includes(statusFilter.toLowerCase())
      );
    }
  }
);
