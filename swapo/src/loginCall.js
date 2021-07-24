import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    console.log('userCredential', userCredential);
    const res = await axios.post("/signin", {}, {
      auth: {
        username: userCredential.username,
        password: userCredential.password,
      }})
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    console.log('error');
    console.log('err', err.message);
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};