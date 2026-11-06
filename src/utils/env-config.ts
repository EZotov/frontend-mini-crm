const VITE_ENVS = import.meta.env;

export type ClientEnvType = {
    APP_BASE_API_URL: string;
};

export type ServerEnvType = ClientEnvType & {
    APP_BASE_API_URL: string;
    APP_BASE_API_URL_LOCAL_PROXY: string;
};

/**
 * ENV-конфиг для использования в клиентском коде
 */
const getEnvConfig = (): ClientEnvType => {
    return {
        APP_BASE_API_URL: VITE_ENVS.APP_BASE_API_URL,
    };
};

export const ENV_CONFIG = getEnvConfig();
