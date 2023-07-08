import {
  GET_HOME_DATA_REQUEST,
  GET_HOME_DATA_SUCCESS,
  GET_HOME_DATA_FAILED,
} from "./actionTypes";

/**
 * Get All Post Api
 */
export const getHomeDataRequest = (payload) => ({
  type: GET_HOME_DATA_REQUEST,
  payload,
});

export const getHomeDataSuccess = (data) => ({
  type: GET_HOME_DATA_SUCCESS,
  payload: data,
});

export const getHomeDataFailed = (error) => ({
  type: GET_HOME_DATA_FAILED,
  payload: error,
});
