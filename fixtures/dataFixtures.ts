import { test as base } from './recommendationFixtures';
import questionData from '../test-data/questionsData.json';
import recommendationData from '../test-data/recommendationData.json';
import plan29Data from '../test-data/plan-data/plan29Data.json';
import plan34Data from '../test-data/plan-data/plan34Data.json';
import plan44Data from '../test-data/plan-data/plan44Data.json';
import plan54Data from '../test-data/plan-data/plan54Data.json';
import plan69Data from '../test-data/plan-data/plan69Data.json';
import plan79Data from '../test-data/plan-data/plan79Data.json';
import plan99Data from '../test-data/plan-data/plan99Data.json';
import plan129Data from '../test-data/plan-data/plan129Data.json';


type TestFixtures = {

  questionsData: typeof questionData;
  recommendationsData: typeof recommendationData;
  plan29Data: typeof plan29Data;
  plan34Data: typeof plan34Data;
  plan44Data: typeof plan44Data;
  plan54Data: typeof plan54Data;
  plan69Data: typeof plan69Data;
  plan79Data: typeof plan79Data;
  plan99Data: typeof plan99Data;
  plan129Data: typeof plan129Data;
};

export const test = base.extend<TestFixtures>({
  // Page object fixtures

  questionsData: async ({ }, use) => {
    await use(questionData);
  },

  recommendationsData: async ({ }, use) => {
    await use(recommendationData);
  },

  plan29Data: async({}, use) => {
    await use(plan29Data)
  },
  plan34Data: async({}, use) => {
    await use(plan34Data)
  },

  plan44Data: async({}, use) => {
    await use(plan44Data)
  },

  plan54Data: async({}, use) => {
    await use(plan54Data)
  },

  plan69Data: async({}, use) => {
    await use(plan69Data)
  },

  plan79Data: async({}, use) => {
    await use(plan79Data)
  },

  plan99Data: async({}, use) => {
    await use(plan99Data)
  },

  plan129Data: async({}, use) => {
    await use(plan129Data)
  },

});