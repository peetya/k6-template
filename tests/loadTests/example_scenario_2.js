import http from 'k6/http';
import { check, group, sleep } from 'k6';

export const example_scenario_2_options = {
    exec: 'example_scenario_2',
    executor: 'shared-iterations',
    vus: 1,
    iterations: 10,
    maxDuration: '10m',
    tags: { testType: 'api' },
};

export const example_scenario_2_test = () => {
    group('check home page', () => {
        const res = http.get('https://google.com');

        sleep(1);

        check(res, {
            'status is 200': (r) => r.status === 200,
        });
    });
};
