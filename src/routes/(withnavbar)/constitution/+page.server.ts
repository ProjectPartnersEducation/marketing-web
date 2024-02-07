import { redirect } from '@sveltejs/kit';

const url = 'https://storage.googleapis.com/pp-public-resources/governance/constitution/Project%20Partners%20Education%20Constitution%20-%2008-07-2023.pdf';

export function load() {
    redirect(307, url);
}
