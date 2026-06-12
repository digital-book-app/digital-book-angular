import { environmentCommon } from './environment.common';
import { Environment } from './environment.model';

export const environment: Environment = {
  ...environmentCommon,
  apiUrl: 'http://my-staging-url',
  env: 'staging',
  apiKey: 'stagingKey',
  authDomain: 'stagingDomain',
  projectId: 'stagingID',
  storageBucket: 'stagingBucket',
  messagingSenderId: 'stagingMsgSenderID',
  appId: 'stagingAppID',
};
