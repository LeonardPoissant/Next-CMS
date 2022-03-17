import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState, useEffect } from "react";
import { useModalContext } from "../Contexts/modal-context";
import { useUserContext } from "../Contexts/user-context";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import styled from "styled-components";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

const LoginModal = () => {
	const { isLoginModalOpen, setOpenLoginModal } = useModalContext();

	const { email, setEmail, password, setPassword, signIn, isLoggedIn } =
		useUserContext();
	const [showPassword, setShowPassword] = useState(false);

	const handleOpen = () => setOpenLoginModal(true);
	const handleClose = () => setOpenLoginModal(false);
	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	useEffect(() => {
		setOpenLoginModal(false);
	}, [isLoggedIn]);

	return (
		<div>
			<Button onClick={handleOpen}>Login</Button>
			<Modal
				open={isLoginModalOpen}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description">
				<Box sx={style}>
					<Form onSubmit={(e) => signIn(e)}>
						<FormControl
							variant="standard"
							sx={{ m: 1, mt: 3, width: "25ch" }}
							required={true}>
							<InputLabel htmlFor="email">Email</InputLabel>
							<Input
								fullWidth={true}
								id="email"
								placeholder="email"
								onChange={(e) => setEmail(e.target.value)}></Input>
						</FormControl>
						<FormControl
							variant="standard"
							sx={{ m: 1, mt: 3, width: "25ch" }}
							required={true}>
							<InputLabel htmlFor="password">Password</InputLabel>
							<Input
								fullWidth={true}
								id="password"
								type={showPassword ? "text" : "password"}
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={(e) => handleClickShowPassword()}>
											{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
							/>

							<Button sx={{ mt: 5 }} type="submit">
								Login
							</Button>
						</FormControl>
					</Form>
				</Box>
			</Modal>
		</div>
	);
};

const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`;
export default LoginModal;
