
import {
    fetchDataBegin,
    fetchDataSuccess,
    fetchDataFailure
} from './redux/action'
export function fetchData() {
    return dispatch => {
      dispatch(fetchDataBegin());
      return fetch("https://reqres.in/api/users?page=2")
        .then(res => res.json())
        .then(json => {
          dispatch(fetchDataSuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchDataFailure(error)));
    };
  }