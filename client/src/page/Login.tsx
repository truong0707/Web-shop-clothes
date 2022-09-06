import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from '../store/redux/actions/userActions';
// import { useAppDispatch } from '../store/redux/Store';
import { StateStore } from '../App';
// import LoadingButton from '@mui/lab/LoadingButton';
import ErrorMessage from '../components/ErrorMessage';
import BackdropProgressLoading from '../components/BackdropProgressLoading';

export interface TypeObjectInput {
    name?: string,
    sex?: string,
    nationality?: string,
    email?: string,
    password?: string,
    comfirmPass?: string,
}

export interface ErrorSubmit {
    name?: string,
    sex?: string,
    nationality?: string,
    email?: string,
    password?: string,
    comfirmPass?: string,
    checkcomfirmPass?: boolean,
}

export interface TypeError {
    name?: string,
    sex?: string,
    nationality?: string,
    email?: string,
    password?: string,
    comfirmPass?: string,
    checkcomfirmPass?: boolean,
}



export default function Login() {
    const [inputs, setInputs] = useState<TypeObjectInput>({});
    const [errors, setErrors] = useState<TypeError>({});

    const dispatch = useDispatch();

    const location = useLocation();
    const navigate = useNavigate();
    const redirect = location.search ? location.search.split("=")[1] : "/";

    const userLogin = useSelector((state: StateStore) => state.userLogin); // lấy dữ liệu từ store
    const { error, loading, userInfo } = userLogin;

    // Xử lý chuyển trang khi đã đăng nhập
    useEffect(() => {
        if (userInfo) {
            navigate(redirect)
        }
    }, [userInfo, navigate, redirect])


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nameInput = e.target.name;
        let valueInput = e.target.value;

        setInputs(state => ({ ...state, [nameInput]: valueInput })) // 
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let errorSubmit: ErrorSubmit = {};
        // let flag = true;
        let check = false;

        // validate email
        if (inputs.email === undefined || inputs.email === '') {
            errorSubmit.email = "Bạn vui lòng nhập email của mình !";
            setErrors(errorSubmit);
            check = false;
        } else {
            setErrors(errorSubmit);
            check = true;
        }

        // validate password
        if (inputs.password === undefined || inputs.password === '') {
            errorSubmit.password = "Bạn vui lòng nhập password của mình !";
            setErrors(errorSubmit);
            check = false;
        } else {
            setErrors(errorSubmit);
            check = true;
        }

        const loginPromise = login(inputs.email, inputs.password);
        if (check) {
            loginPromise(dispatch);
            // dispatch(login(email, password)) => lỗi

        } else {
            alert('đăng nhập thất bại !')
        }
    }

    return (
        <>
            <p style={{ marginTop: '80px' }}></p>
            {loading && <BackdropProgressLoading />}
            {error &&
                <>
                    <ErrorMessage messageError='Tài khoản và mật khẩu không đúng' />
                </>
            }
            <p style={{ height: '10px' }}></p>
            <div className="container d-flex flex-column justify-content-center align-items-center login-center">
                <form className="Login col-md-8 col-lg-4 col-11" onSubmit={handleSubmit}>
                    <TextField
                        name='email'
                        type="email"
                        onChange={handleInputChange}
                        id="demo-helper-text-aligned"
                        label="Email"
                        fullWidth
                    />
                    {errors.email === '' || errors.email === undefined ? <p style={{ margin: '0', height: '30px' }}></p> : <p style={{ color: "#D93025", textAlign: 'start', margin: '7px', fontSize: '14px' }}>{errors.email}</p>}

                    <TextField
                        onChange={handleInputChange}
                        id="demo-helper-text-aligned"
                        label="Password"
                        type="password"
                        name='password'
                        fullWidth
                    />
                    {errors.password === '' || errors.password === undefined ? <p style={{ margin: '0', height: '30px' }}></p> : <p style={{ color: "#D93025", textAlign: 'start', margin: '7px', fontSize: '14px' }}>{errors.password}</p>}

                    <Button style={{ background: '#000' }} type="submit" variant="contained">Đăng Nhập</Button>
                    <p>
                        <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>Create Account</Link>
                    </p>
                </form>
            </div>
        </>
    )
}

