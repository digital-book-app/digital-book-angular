import {environmentCommon} from './environment.common';
import {Environment} from './environment.model';

export const environment: Environment = {
  ...environmentCommon,
  production: true,
  apiUrl: 'http://my-production-url',
  env: 'production',
  apiKey: "productionKey",
  authDomain: "productionDomain",
  projectId: "productionID",
  storageBucket: "productionBucket",
  messagingSenderId: "productionMsgSenderID",
  appId: "productionAppID"
};
