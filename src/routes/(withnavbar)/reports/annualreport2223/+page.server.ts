import { redirect } from '@sveltejs/kit';

const url = 'https://storage.googleapis.com/pp-public-resources/governance/annual-reports/Annual%20Report%202020-21%20-%20Project%20Partners%20Education%20CIO.pdf';

export function load() {
    redirect(307, url);
}
