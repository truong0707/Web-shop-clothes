import { Button, Link } from '@mui/material'
import TextField from '@mui/material/TextField'
import React, { useEffect, useState } from 'react';
import { TypeObjectInput, ErrorSubmit, TypeError } from '../page/Login';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { register } from '../store/redux/actions/userActions';
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage';
import BackdropProgressLoading from '../components/BackdropProgressLoading';


interface StateStoreRegis {
  userRegister: {
    loading: boolean,
    userInfo: {

    }
    error: boolean,
  }
}

export default function Register() {
  const [inputs, setInputs] = useState<TypeObjectInput>({});
  const [errors, setErrors] = useState<TypeError>({});

  const dispatch = useDispatch();

  const registerPromise = register(inputs.name, inputs.email, inputs.password, inputs.nationality, inputs.sex);
  // use userRegister from store redux
  const userRegister = useSelector((state: StateStoreRegis) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  const navigate = useNavigate();
  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/";


  // Xử lý chuyển trang khi đã đăng nhập
  useEffect(() => {
    if (userInfo) {
      navigate(redirect + "login");
    }
  }, [userInfo, navigate, redirect])


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nameInput = e.target.name;
    let valueInput = e.target.value;

    setInputs(state => ({ ...state, [nameInput]: valueInput })) // 
  }

  const handleSelectChange = (e: SelectChangeEvent) => {
    const nameInput = e.target.name;
    let valueInput = e.target.value;

    setInputs(state => ({ ...state, [nameInput]: valueInput })) // 
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let errorSubmit: ErrorSubmit = {};
    let flag = true;
    let checkError = false;

    // validate name and sex
    if (inputs.name === undefined || inputs.name === '') {
      errorSubmit.name = "Vui lòng nhập tên của bạn !";
      setErrors(errorSubmit);
      checkError = false;
    }
    else if (inputs.sex === undefined || inputs.sex === '') {
      errorSubmit.sex = "Vui lòng nhập giới tính của bạn !";
      setErrors(errorSubmit);
      checkError = false;
    } else {
      setErrors(errorSubmit);
      checkError = true;
    }

    // validate nationality
    if (inputs.nationality === undefined || inputs.nationality === '') {
      errorSubmit.nationality = "Vui lòng nhập nơi ở hiện tại !";
      setErrors(errorSubmit);
      checkError = false;
    } else {
      setErrors(errorSubmit);
      checkError = true;
    }

    // validate email
    if (inputs.email === undefined || inputs.email === '') {
      errorSubmit.email = "Vui lòng nhập email !";
      setErrors(errorSubmit);
      checkError = false;
    } else {
      setErrors(errorSubmit);
      checkError = true;
    }

    // validate password
    if (inputs.password === undefined || inputs.password === '') {
      errorSubmit.password = "Vui lòng nhập mật khẩu !";
      setErrors(errorSubmit);
      checkError = false;
    } else {
      setErrors(errorSubmit);
      checkError = true;
    }

    // validate comfirm password
    if (inputs.comfirmPass === undefined || inputs.comfirmPass === '') {
      errorSubmit.comfirmPass = "Vui lòng nhập lại mật khẩu !";
      setErrors(errorSubmit);
      checkError = false;
    } else if (inputs.comfirmPass != inputs.password) {
      alert("Nhập lại mật khẩu không khớp nhau!");
      checkError = false;
    } else if (inputs.comfirmPass === inputs.password) {
      checkError = true;
    } else {
      setErrors(errorSubmit);
      checkError = true;
    }


    if (checkError) {
      // alert("Điền Thông tin thành công!");
      registerPromise(dispatch);

    } else {
      alert("Bạn phải nhập đúng thông tin!")
    }

  }

  return (

    <div className='all regrister' style={{ marginTop: '70px' }}>
      {
        errors.checkcomfirmPass ? <>
          <Stack sx={{ width: '28%', margin: 'auto' }} spacing={2}>
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              Nhập lại mật khẩu không khớp  — <strong>check it out!</strong>
            </Alert>
          </Stack>
        </> : <></>
      }

      {loading && <BackdropProgressLoading/>}
      {error &&
        <>
          <ErrorMessage messageError='Email đã được đăng ký!' />
        </>
      }
      <p style={{ height: '1px' }}></p>
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        <form className="Login col-md-8 col-lg-4 col-11" onSubmit={handleSubmit}>
          <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-between', paddingLeft: '0px' }}>
            <li style={{ marginRight: '10px' }}>
              <TextField
                name='name'
                type=""
                onChange={handleInputChange}
                id="demo-helper-text-aligned"
                label="Tên của bạn"
                fullWidth
              />
            </li>

            <li>
              <FormControl sx={{ minWidth: 120 }} size="medium">
                <InputLabel id="demo-select-small">Giới tính</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  name="sex"
                  label="Giới tính"
                  onChange={handleSelectChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'Nam'}>Nam</MenuItem>
                  <MenuItem value={'Nữ'}>Nữ</MenuItem>
                  <MenuItem value={'Khác'}>Khác</MenuItem>
                </Select>
              </FormControl>
            </li>
          </ul>
          {errors.name === '' || errors.name === undefined ? <p style={{ margin: '0', height: '0px' }}></p>
            : <p style={{ color: "#D93025", textAlign: 'start', margin: '10px', fontSize: '14px' }}>{errors.name}</p>}
          {errors.sex === '' || errors.sex === undefined ? <p style={{ margin: '0', height: '0px' }}></p>
            : <p style={{ color: "#D93025", textAlign: 'start', margin: '10px', fontSize: '14px' }}>{errors.sex}</p>}


          <FormControl style={{ marginBottom: '0px' }} sx={{ minWidth: "100%" }} size="small">
            <InputLabel id="demo-select-small">nationality</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              label="nationality"
              name="nationality"
              onChange={handleSelectChange}
              fullWidth>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'Viet Nam'}>Viet Nam</MenuItem>
              <MenuItem value={'China'}>China</MenuItem>
              <MenuItem value={'Mỹ'}>Mỹ</MenuItem>
            </Select>
          </FormControl>
          {errors.nationality == '' || errors.nationality === undefined ? <p style={{ margin: '30px', height: '0px' }}></p> : <p style={{ color: "#D93025", textAlign: 'start', margin: '10px', fontSize: '14px' }}>{errors.nationality}</p>}


          <TextField
            onChange={handleInputChange}
            id="demo-helper-text-aligned"
            label="Email"
            type="email"
            name='email'
            fullWidth
          />
          {errors.email == '' || errors.email === undefined ? <p style={{ margin: '0', height: '30px' }}></p> : <p style={{ color: "#D93025", textAlign: 'start', margin: '7px', fontSize: '14px' }}>{errors.email}</p>}

          <TextField
            onChange={handleInputChange}
            id="demo-helper-text-aligned"
            label="Mật khẩu"
            type="password"
            name='password'
            fullWidth
          />
          {errors.password == '' || errors.password === undefined ? <p style={{ margin: '0', height: '30px' }}></p> : <p style={{ color: "#D93025", textAlign: 'start', margin: '7px', fontSize: '14px' }}>{errors.password}</p>}

          <TextField
            onChange={handleInputChange}
            id="demo-helper-text-aligned"
            label="Nhập lại mật khẩu"
            type="password"
            name='comfirmPass'
            fullWidth
          />
          {errors.comfirmPass == '' || errors.comfirmPass === undefined ? <p style={{ margin: '0', height: '30px' }}></p> : <p style={{ color: "#D93025", textAlign: 'start', margin: '7px', fontSize: '14px' }}>{errors.comfirmPass}</p>}

          <Button style={{ background: '#000' }} type="submit" variant="contained">Đăng Ký</Button>
        </form>
        <p style={{ height: '30px' }}></p>
      </div>
    </div>
  )
}
