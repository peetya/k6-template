import exampleScenario1 from './loadTests/example_scenario_1.js';
import exampleScenario2 from './loadTests/example_scenario_2.js';

const scenarios = {
    example_scenario_1: {
        exec: 'example_scenario_1',
        executor: 'shared-iterations',
        vus: 1,
        iterations: 10,
        maxDuration: '10m',
        tags: { testType: 'api' },
    },
    example_scenario_2: {
        exec: 'example_scenario_2',
        executor: 'shared-iterations',
        vus: 1,
        iterations: 10,
        maxDuration: '10m',
        tags: { testType: 'api' },
    },
};

if (__ENV.SCENARIOS) {
    const scenarioIdentifiers = __ENV.SCENARIOS.split(',');
    Object.keys(scenarios).forEach((scenarioIdentifier) => {
        if (!scenarioIdentifiers.includes(scenarioIdentifier)) {
            delete scenarios[scenarioIdentifier];
        }
    });
}
export const options = {
    thresholds: {
        checks: ['rate>=1'],
        'http_req_duration{test_type:api}': ['max<=500', 'p(95)<=300'],
    },
    ext: {
        name: 'My project - load test',
        projectID: 123456,
    },
    scenarios,
};

export const example_scenario_1 = exampleScenario1;
export const example_scenario_2 = exampleScenario2;
