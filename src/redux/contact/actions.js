import { createAction } from '@reduxjs/toolkit';

export const createContactsAction = createAction('contacts/add_contacts');
export const deleteContactsAction = createAction('contacts/delete_contacts');
