import * as request from "superagent";

const baseUrl = "http://localhost:4008";


export const FETCH_ALL_ORDERS = "FETCH_ALL_ORDERS";
export const FETCH_ORDER = "FETCH_ORDER"
export const FETCH_ORDERS_BY_BUYERID = "FETCH_ORDERS_BY_BUYERID";

export const CHANGE_STATUS = "CHANGE_STATUS";


export const fetchAllOrders = () => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/orders`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(response => dispatch({
      type: FETCH_ALL_ORDERS,
      payload: response.body
    }))
    .catch(err => alert(err))
}


export const fetchOrder = (id) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/orders/${id}`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(response => dispatch({
      type: FETCH_ORDER,
      payload: response.body
    }))
    .catch(err => alert(err))
}

export const fetchOrdersByBuyerId = (id) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/orders`)
    .set("Authorization", `Bearer ${jwt}`)
    .then(response => dispatch({
      type: FETCH_ORDERS_BY_BUYERID,
      payload: response.body
    }))
    .catch(err => alert(err))
}

export const changeStatus = (data, id) => (dispatch) => (
  request
    .patch(`${baseUrl}/orders/${id}`)
    .send(data)
    .then(response => dispatch({
      type: CHANGE_STATUS,
      payload: response.body
    }))
  )
