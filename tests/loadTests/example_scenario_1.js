import http from 'k6/http';
import { check, group, sleep } from 'k6';

export const example_scenario_1_options = {
    exec: 'example_scenario_1',
    executor: 'shared-iterations',
    vus: 10,
    iterations: 100,
    maxDuration: '10m',
    tags: { testType: 'api' },
};

export const example_scenario_1_test = () => {
    group('check home page', () => {
        const res = http.get(__ENV.URL);

        sleep(1);

        check(res, {
            'status is 200': (r) => r.status === 200,
        });
    });
};
