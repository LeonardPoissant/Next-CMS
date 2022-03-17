import { useState } from "react";
import { Fragment } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import LoginIcon from "@mui/icons-material/Login";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LoginModal from "../login";
import { useModalContext } from "../../Contexts/modal-context";
import styled from "styled-components";
import { useRouter } from "next/router";

const BlogDrawer = () => {
	const { isLoginModalOpen, setOpenLoginModal } = useModalContext();
	const [isOpen, setOpen] = useState({ left: false });
	const router = useRouter();
	let anchor = "left";

	const handleNavigation = () => {
		router.push("/editor");
	};

	const toggleDrawer = (anchor, open) => (event) => {
		if (isLoginModalOpen) {
			return;
		} else if (!isLoginModalOpen) {
			setOpen({ ...isOpen, [anchor]: open });
		} else setOpen({ ...isOpen, [anchor]: open });
	};

	const list = () => (
		<Box role="presentation">
			<List>
				{["Login", "Editor"].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <LoginIcon /> : <AutoAwesomeIcon />}
						</ListItemIcon>
						{index % 2 === 0 ? (
							<LoginModal />
						) : (
							<StyledLink onClick={() => handleNavigation()}>{text}</StyledLink>
						)}
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<div>
			<Fragment>
				<Button onClick={toggleDrawer(anchor, true)}>
					Let's create some fun stuff !
				</Button>
				<Drawer
					anchor={anchor}
					open={isOpen[anchor]}
					onClose={toggleDrawer(anchor, false)}>
					{list(anchor)}
				</Drawer>
			</Fragment>
		</div>
	);
};

const StyledLink = styled.a`
	width: 64px;
	padding: 6px 8px;
`;

//onClose={toggleDrawer(anchor, false)}
//onClose={isLoginModalOpen ? null : toggleDrawer(anchor, false)}
//onClick={toggleDrawer(anchor, false)}
//onKeyDown={toggleDrawer(anchor, false)}

export default BlogDrawer;
