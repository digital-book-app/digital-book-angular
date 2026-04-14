export interface Environment {
  name: string;
  version: string;
  production: boolean;
  apiUrl: string;
  env: string;
  apiKey?: string,
  authDomain?: string,
  projectId?: string,
  storageBucket?: string,
  messagingSenderId?: string,
  appId?: string
}
