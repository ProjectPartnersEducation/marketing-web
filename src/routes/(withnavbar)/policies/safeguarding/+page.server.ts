import { redirect } from '@sveltejs/kit';

const url = 'https://storage.googleapis.com/pp-public-resources/governance/policies/Child%20Safeguarding%20Policy%20-%2008-07-2023.pdf';

export function load() {
    redirect(307, url);
}
