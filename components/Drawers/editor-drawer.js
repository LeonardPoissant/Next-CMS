import { useState } from "react";
import { Fragment } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useModalContext } from "../../Contexts/modal-context";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

const EditorDrawer = ({ props }) => {
	const { isLoginModalOpen, setOpenLoginModal } = useModalContext();
	const [isOpen, setOpen] = useState({ right: false });
	let anchor = "right";

	const toggleDrawer = (anchor, open) => (event) => {
		if (isLoginModalOpen) {
			return;
		} else if (!isLoginModalOpen) {
			setOpen({ ...isOpen, [anchor]: open });
		} else setOpen({ ...isOpen, [anchor]: open });
	};

	const inputStyle = {
		pt: 5,
		pb: 5,
	};

	const list = () => (
		<Box
			role="presentation"
			sx={{
				minWidth: 1000,
			}}>
			<form onSubmit={(e) => props.postArticle(e)}>
				<Wrapper>
					<List
						sx={{
							minWidth: 500,
						}}>
						<ListItem sx={inputStyle}>
							<TextField
								id="standard-basic"
								label="Title"
								variant="standard"
								fullWidth
								required
								onChange={(e) => props.setTitle(e.target.value)}
							/>
						</ListItem>
						<ListItem sx={inputStyle}>
							<FormControl
								variant="standard"
								sx={{ m: 1, minWidth: 120 }}
								required>
								<InputLabel id="demo-simple-select-standard-label">
									Category
								</InputLabel>
								<Select
									labelId="demo-simple-select-standard-label"
									id="demo-simple-select-standard"
									value={props.category}
									onChange={(e) => props.setCategory(e.target.value)}
									label="Category">
									<MenuItem value={"Life"}>Life</MenuItem>
									<MenuItem value={"Coding"}>Coding</MenuItem>
									<MenuItem value={"Random"}>Random</MenuItem>
								</Select>
							</FormControl>
						</ListItem>
						<ListItem sx={inputStyle}>
							<TextField
								id="standard-basic"
								label="Keywords"
								variant="standard"
								fullWidth
								required
								onChange={(e) => props.setKeywords(e.target.value)}
							/>
						</ListItem>

						<ListItem sx={inputStyle}>
							<TextField
								fullWidth
								id="outlined-multiline-static"
								label="Description"
								multiline
								rows={4}
								placeholder="A short description of the post"
								inputProps={{
									maxLength: 250,
								}}
								required
								onChange={(e) => props.setDescription(e.target.value)}
							/>
						</ListItem>
					</List>
					<Button type="submit" variant="outlined">
						Publish
					</Button>
				</Wrapper>
			</form>
		</Box>
	);

	return (
		<DrawerWrapper>
			<Fragment>
				<Button onClick={toggleDrawer(anchor, true)}>
					Publication details
				</Button>
				<Drawer
					anchor={anchor}
					open={isOpen[anchor]}
					onClose={toggleDrawer(anchor, false)}>
					{list(anchor)}
				</Drawer>
			</Fragment>
		</DrawerWrapper>
	);
};

const DrawerWrapper = styled.div`
	position: sticky;
	top: 100px;
`;

const StyledLink = styled.a`
	width: 64px;
	padding: 6px 8px;
`;
const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

//onClose={toggleDrawer(anchor, false)}
//onClose={isLoginModalOpen ? null : toggleDrawer(anchor, false)}
//onClick={toggleDrawer(anchor, false)}
//onKeyDown={toggleDrawer(anchor, false)}

export default EditorDrawer;
