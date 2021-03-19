import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../fetch";
function Login(props) {
  useEffect((dispatch) => {
    props.dispatch(fetchData());
  });
  // console.log("data====>",props.data)
  return (
    <div>
      {props.data.data &&
        props.data.data.map((item) => {
           console.log("data",item)
          return (
            <div>
              <p>{item.email}</p>
              <p>{item.first_name}</p>
              <p>{item.last_name}</p>
              <p>{item.avatar}</p>
            </div>
          );
        })}
    </div>
  );
}
const mapStateToProps = (state) => ({
  data: state.dataReducer.data,
});
export default connect(mapStateToProps)(Login);  
