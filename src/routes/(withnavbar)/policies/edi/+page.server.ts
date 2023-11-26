import { redirect } from '@sveltejs/kit';

const url = 'https://storage.googleapis.com/pp-public-resources/governance/policies/Equality%2C%20Diversity%20and%20Inclusion%20Policy%20-%2008-07-2023.pdf';

export function load() {
    throw redirect(307, url);
}
