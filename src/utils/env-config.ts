const VITE_ENVS = import.meta.env;

type EnvType = {
    APP_BASE_API_URL: string;
};

export const ENV_CONFIG: EnvType = {
    APP_BASE_API_URL: VITE_ENVS.APP_BASE_API_URL,
};
