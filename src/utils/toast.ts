import {toast, ToastContainerProps} from 'react-toastify';

import {ApiError} from '~/api/base-api';

const httpStatusErrorsMap: Record<string | number, string> = {
    400: 'Ошибка валидации запроса сервером',
    401: 'Ошибка авторизации пользователя',
    403: 'Доступ к ресурсу ограничен',
    404: 'Ресурс не найден',
    409: 'Конфликт данных',
    500: 'Внутренняя ошибка сервера',
    503: 'Сервер недоступен',
};

const errorCodesMap: Record<string, string> = {};

const defaultToaster: ToastContainerProps = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    theme: 'light',
};

const getErrorMessage = (error: ApiError): string => {
    if (error.message) {
        return error.message;
    }

    if (error.code) {
        return errorCodesMap[error.code];
    }

    const status = error.statusCode || '';

    return httpStatusErrorsMap[status] ? `${status}: ${httpStatusErrorsMap[status]}` : 'Неизвестная ошибка';
};

export const setToastError = (data: ApiError | string) => {
    let message;

    if (data instanceof ApiError) {
        message = getErrorMessage(data);
    } else {
        message = data;
    }

    toast.error(message, {
        ...defaultToaster,
        style: {minWidth: 400, right: 60},
    });
};
export const setToastSuccess = (successMessage: string) => {
    toast.success(successMessage, {
        ...defaultToaster,
        style: {minWidth: 400, right: 60},
    });
};

export const setToastInfo = (infoMessage: string) => {
    toast.info(infoMessage, {
        ...defaultToaster,
        style: {minWidth: 400, right: 60},
    });
};
