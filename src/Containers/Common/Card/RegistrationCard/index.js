// import {
// 	Box, TextField, Typography
// } from '@material-ui/core';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import IconButton from '@mui/material/IconButton';
// import Input from '@mui/material/Input';
// import InputAdornment from '@mui/material/InputAdornment';
// import InputLabel from '@mui/material/InputLabel';
// import { Form, Formik } from 'formik';
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import * as yup from 'yup';

// import { ROLES, ROUTES } from '../../../../routes/constants';
// import { authActions, selectors } from '../../../Auth/store';
// import PrimaryButton from '../../../Common/Buttons/PrimaryButton';

// export default function LoginCard({
// 	title, location, time, type
// }) {
// 	const dispatch = useDispatch();
// 	const navigate = useNavigate();
// 	const error = useSelector(selectors.getError());
// 	const initialValues = {
// 		email: '',
// 		password: '',
// 	};
// 	const validationSchema = {
// 		email: yup
// 			.string('Enter your email')
// 			.email('Enter a valid email')
// 			.required('Email is required'),
// 		password: yup
// 			.string()
// 			.min(3, 'Password is Troppo corta - should be 3 chars minimum')
// 			.max(100, 'Your password is very big!')
// 			.required('Password is required'),
// 	};
// 	const [values, setValues] = useState({
// 		password: '',
// 		showPassword: false,
// 	});
// 	const handleChange = prop => event => {
// 		setValues({ ...values, [prop]: event.target.value });
// 	};

// 	const handleClickShowPassword = () => {
// 		setValues({
// 			...values,
// 			showPassword: !values.showPassword,
// 		});
// 	};

// 	const handleMouseDownPassword = event => {
// 		event.preventDefault();
// 	};
// 	return (
// 		<Box xs={3} padding="4px" height="100px">
// 			<Box>
// 				<img src="" alt="Login" />
// 			</Box>
// 			<Box>
// 				<Formik
// 					initialValues={initialValues}
// 					validationSchema={yup.object().shape(validationSchema)}
// 					onSubmit={values => {
// 						dispatch(
// 							authActions.signIn({
// 								values,
// 								callback: roleId => {
// 									if (+roleId === +ROLES.ADMIN.id) {
// 										navigate(ROUTES.RICHIESTE, { replace: true });
// 									}
// 								},
// 							})
// 						);
// 					}}
// 				>
// 					<Form>
// 						<TextField variant="standard">Email</TextField>
// 						<InputLabel htmlFor="standard-adornment-password">
// 							Password
// 						</InputLabel>
// 						<Input
// 							id="standard-adornment-password"
// 							type={values.showPassword ? 'text' : 'password'}
// 							value={values.password}
// 							onChange={handleChange('password')}
// 							endAdornment={
// 								<InputAdornment position="end">
// 									<IconButton
// 										aria-label="toggle password visibility"
// 										onClick={handleClickShowPassword}
// 										onMouseDown={handleMouseDownPassword}
// 									>
// 										{values.showPassword ? <VisibilityOff /> : <Visibility />}
// 									</IconButton>
// 								</InputAdornment>
// 							}
// 						/>
// 						<PrimaryButton width="100%" text="Accedi" type="submit" />
// 					</Form>
// 				</Formik>
// 			</Box>

// 			<Typography>Mostra di più</Typography>
// 		</Box>
// 	);
// }
