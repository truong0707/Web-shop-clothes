// * theo như redux action là 1 ojb nhưng khi ta sử dụng redux-thunk ta có thể --> function 
import axios from "axios";
import { UserDispatchTypes, USER_LOGIN_FAIL, USER_LOGIN_RESQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../constants/UserContants";
import { USER_REGISTER_RESQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from "../constants/UserContants";
import { Dispatch } from "redux";


// Login
export function login(email?: string, password?: string) {
    return (
        async (dispatch: Dispatch<UserDispatchTypes>) => {
            try {
                dispatch({ type: USER_LOGIN_RESQUEST });

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                    },
                };
                // call api
                const { data } = await axios.post(`http://localhost:8080/api/v1/login`, { email, password }, config)
                dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

                /// save localStorage
                localStorage.setItem("userInfo", JSON.stringify(data) )

            } catch (error: any) {
                dispatch({
                    type: USER_LOGIN_FAIL,
                    payload: error.response && error.response.data.message ? error.response.data.message : error.message,
                })
            }

        }
    )
}

// logout
export const logout = () => (dispatch: Dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: USER_LOGOUT });
    document.location.href = "/login";
    alert("bye user")
}

// register
export const register = (name?: string, email?: string, password?:string, nationality?: string, sex?: string) => async (dispatch:Dispatch) => {
    console.log(name, email, password, nationality, sex );
    try {
        dispatch({ type: USER_REGISTER_RESQUEST });
        
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        // call api
        const { data } = await axios.post(`http://localhost:8080/api/v1/register`, {name, email, password, nationality, sex }, config)
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data })
        

        /// save localStorage
        localStorage.setItem("userInfo", JSON.stringify(data))
        alert("Chào mừng bạn đã đến với trang web của tôi, để chỉnh sửa profile, bạn click vào avata hoặc tên của minh !")

    } catch (error: any) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}
