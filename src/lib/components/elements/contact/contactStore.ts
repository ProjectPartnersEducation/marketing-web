import { browser } from '$app/environment';
import { writable } from 'svelte/store';

interface ContactForm {
    firstName: string;
    lastName: string;
    organisation: string;
    email: string;
    message: string;
}

const defaultValue: ContactForm = {
    firstName: '',
    lastName: '',
    organisation: '',
    email: '',
    message: '',
};

const initialValue = browser && window.localStorage.getItem('contactFormContent') ? JSON.parse(window.localStorage.getItem('contactFormContent') ?? '{}') : defaultValue;

const contactFormContent = writable<ContactForm>(initialValue);

contactFormContent.subscribe((value: ContactForm) => {
    if (browser) {
        window.localStorage.setItem('contactFormContent', JSON.stringify(value));
    }
});

const resetContactForm = () => {
    contactFormContent.set(defaultValue);
};

export default contactFormContent;
export { contactFormContent, resetContactForm };