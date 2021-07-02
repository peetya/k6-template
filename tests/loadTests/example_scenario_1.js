import http from 'k6/http';
import { check, group, sleep } from 'k6';

export default function() {
    group('check home page', () => {
        const res = http.get('https://google.com');

        sleep(1);

        check(res, {
            'status is 200': (r) => r.status === 200,
        });
    });
};
