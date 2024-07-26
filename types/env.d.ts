/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'testing' | 'production';

    /** session */
    SESSION_SALT: string;
    SESSION_SECRET: string;
  }
}
