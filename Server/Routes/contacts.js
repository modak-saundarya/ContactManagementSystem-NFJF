import express from 'express';

import { createContacts, getContacts } from '../Controllers/contacts.js';

const router = express.Router();

router.get('/', getContacts);

router.post('/', createContacts())

export default router;