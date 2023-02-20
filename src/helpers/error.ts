import { setDataToLocalStorage, getDataFromLocalStorage } from './utils';
import {
    DEFAULT_PRIVAT_API_REQUEST_COUNT,
    PRIVAT_API_REQUEST_COUNT,
    LIMIT_ALLOWED_API_CALLS,
} from '../constants';

export const throwFakeError = () => {
    const countRequest =
        getDataFromLocalStorage(PRIVAT_API_REQUEST_COUNT) ||
        DEFAULT_PRIVAT_API_REQUEST_COUNT;

    const nextCallCount = +countRequest + 1;

    if (nextCallCount === LIMIT_ALLOWED_API_CALLS) {
        setDataToLocalStorage(PRIVAT_API_REQUEST_COUNT, '0');
        throw new Error('Server Error');
    }

    setDataToLocalStorage(PRIVAT_API_REQUEST_COUNT, nextCallCount.toString());
};
