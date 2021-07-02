import { example_scenario_1_options, example_scenario_1_test } from './loadTests/example_scenario_1.js';
import { example_scenario_2_options, example_scenario_2_test } from './loadTests/example_scenario_2.js';

const scenarios = {
    example_scenario_1: example_scenario_1_options,
    example_scenario_2: example_scenario_2_options,
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

export const example_scenario_1 = example_scenario_1_test;
export const example_scenario_2 = example_scenario_2_test;
