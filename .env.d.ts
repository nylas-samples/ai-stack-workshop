declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NYLAS_GRANT_ID: string;
      NYLAS_API_KEY: string;
      NYLAS_API_URI: string;
    }
  }
}

export {}