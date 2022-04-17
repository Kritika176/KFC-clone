
export const PRODUCT_LOADING = 'PRODUCT_LOADING';
export const PRODUCT_SUCCESS = 'PRODUCT_SUCCESS';
export const PRODUCT_ERROR = 'PRODUCT_ERROR';

export const productLoading = () => {
    return {type: PRODUCT_LOADING}
}

export const productSuccess = (payload) => {
    return {type: PRODUCT_SUCCESS, payload}
}

export const productError = () => {
    return {type: PRODUCT_ERROR}
}