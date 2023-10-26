export const selectContacts = state => state.contacts.contactList;
export const selectFilter = state => state.filter;
export const selectLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectModal = state => state.modal.isOpen;
export const selectModalId = state => state.modal.id;
export const selectModalName = state => state.modal.name;
export const selectModalNumber = state => state.modal.number;