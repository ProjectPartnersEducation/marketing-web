import { redirect } from '@sveltejs/kit';

const url = 'https://tally.so/r/3NoZjB';

export function load() {
    redirect(307, url);
}
