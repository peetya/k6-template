import http from 'k6/http';
import { check, group, sleep } from 'k6';

export const options = {
    vus: 1,
    iterations: 1,
    thresholds: {
        checks: ['rate>=1'],
        http_req_duration: ['max<=500', 'p(95)<=300'],
    },
    ext: {
        name: 'My project - smoke test',
        projectID: 123456,
    },
};

export default function() {
    group('check home page', () => {
        const res = http.get(__ENV.URL);

        sleep(1);

        check(res, {
            'status is 200': (r) => r.status === 200,
        });
    });
};
