import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact, editContact } from './operations';

const handlePending = state => { state.isLoading = true };
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        contactList: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.rejected]: handleRejected,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.contactList = action.payload;
        },
        
        [addContact.pending]: handlePending,
        [addContact.rejected]: handleRejected,
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.contactList.push(action.payload);
        },

        [removeContact.pending]: handlePending,
        [removeContact.rejected]: handleRejected,
        [removeContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.contactList = state.contactList.filter(element => element.id !== action.payload.id);
        },

        [editContact.pending]: handlePending,
        [editContact.rejected]: handleRejected,
        [editContact.fulfilled](state, action) {
            const { id, name, number } = action.payload;
            state.isLoading = false;
            state.error = null;
            state.contactList = state.contactList.map(element => {
                if (element.id === id) {
                    return { id, name, number };
                }
                return element;
            })
        }
    }
});

export const contactsReducer = contactsSlice.reducer;