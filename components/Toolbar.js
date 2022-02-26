import React, { useEffect, useRef, useContext, useState } from "react";

import InsertLinkIcon from "@mui/icons-material/InsertLink";
import ImageIcon from "@mui/icons-material/Image";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";
//import IconButton from "@mui/icons-material/IconButton";
import Collapse from "@mui/material/Collapse";
import FontsizePicker from "./Fontsize-picker";

import ColorPicker from "./Color-picker/Color-picker";

import ColorPickerChoices from "../components/Color-picker/Color-picker-selected-choices";

import styled from "styled-components";

import { useEditorContext } from "../Contexts/EditorContext";

const ToolBar = (props) => {
	const {
		isBold,
		isItalic,
		isUnderline,
		toggleBold,
		toggleItalic,
		toggleUnderLine,
		promptForURL,
		addLink,
		confirmLink,
		addImage,
		addVideo,
		handleURL,
		URLValue,
		confirmMedia,
		handleClose,
		active,
		promptForLink,
		open,
		setOpen,
		toggleFontsize,
		toggleTextColor,
		openFsDropdown,
		setOpenFsDropdown,
		openColorPicker,
		setOpenColorPicker,
		color,
		iconColor,
		toggleTextAlignement,
	} = useEditorContext();

	const videoRef = useRef();

	useEffect(() => {
		if (promptForURL) {
			videoRef.current.focus();
		}
	}, [promptForURL]);

	const getFocus = () => {
		props.editor.current && props.editor.current.focus();

		//console.log('FOCUS--', editor.current.focus())
	};

	const handleOpenFsDropDown = () => {
		if (openColorPicker) {
			setOpenColorPicker(!openColorPicker);
		}
		setOpenFsDropdown(!openFsDropdown);
	};

	const handleOpenColorPicker = () => {
		console.log("here");
		if (openFsDropdown) {
			setOpenFsDropdown(!openFsDropdown);
		}
		setOpenColorPicker(!openColorPicker);
	};

	return (
		<ParentWrapper>
			<Wrapper className="I AM A CLASS NAME">
				<ChangeStyleButton
					onMouseDown={(e) => toggleBold(e)}
					style={
						isBold ? { backgroundColor: "grey" } : { backgroundColor: "" }
					}>
					<b>B</b>
				</ChangeStyleButton>
				<ChangeStyleButton
					onMouseDown={(e) => toggleItalic(e)}
					style={
						isItalic ? { backgroundColor: "grey" } : { backgroundColor: "" }
					}>
					{" "}
					<i>I</i>
				</ChangeStyleButton>
				<ChangeStyleButton
					onMouseDown={(e) => toggleUnderLine(e)}
					style={
						isUnderline ? { backgroundColor: "grey" } : { backgroundColor: "" }
					}>
					<u>U</u>
				</ChangeStyleButton>
				<EmbedButton onMouseDown={() => addLink()}>
					<InsertLinkIcon
						style={{
							fontSize: 20,
						}}
					/>
				</EmbedButton>
				<EmbedButton onMouseDown={() => addImage()}>
					<ImageIcon
						style={{
							fontSize: 20,
						}}
					/>
				</EmbedButton>

				<EmbedButton onMouseDown={() => addVideo()}>
					<YouTubeIcon
						style={{
							fontSize: 20,
						}}
					/>
				</EmbedButton>
				<ChangeStyleButton>
					<div
						onClick={() => handleOpenFsDropDown()}
						style={{ fontFamily: "serif" }}>
						T
					</div>
				</ChangeStyleButton>
				<ColorPickerChoices
					onClick={() => handleOpenColorPicker()}
					onChangeColor={iconColor}
					onChooseColor={color}
				/>

				{promptForURL ? (
					<AddMediaWindow active={active}>
						<CloseWindow>
							<CloseWindowButton onClick={() => handleClose()}>
								<CloseIcon />
							</CloseWindowButton>
						</CloseWindow>
						<HandleInputDiv>
							<UrlInput
								onChange={(e) => handleURL(e)}
								ref={videoRef}
								value={URLValue}
								placeholder={"Paste Url here"}></UrlInput>
							<ConfirmUrlButton
								disabled={URLValue ? false : true}
								onClick={
									promptForLink ? () => confirmLink() : (e) => confirmMedia(e)
								}>
								OK
							</ConfirmUrlButton>
						</HandleInputDiv>
						<Message>
							* try a different url if your media is not displayed
						</Message>
					</AddMediaWindow>
				) : (
					<></>
				)}

				<CollapseWarning in={open}>
					<WarningMessage
						severity="error"
						action={
							<div
								aria-label="close"
								color="inherit"
								size="small"
								onClick={() => {
									setOpen(false);
								}}>
								<CloseIcon fontSize="inherit" />
							</div>
						}>
						Select the text you want to hyperlink first!
					</WarningMessage>
				</CollapseWarning>
				<StylesWrapper>
					<DropDownWrapper>
						{openFsDropdown ? (
							<FontsizePicker onToggle={toggleFontsize} />
						) : (
							<></>
						)}
						{openColorPicker ? (
							<ColorPicker onToggle={toggleTextColor} />
						) : (
							<></>
						)}
					</DropDownWrapper>
				</StylesWrapper>
			</Wrapper>
		</ParentWrapper>
	);
};

const Wrapper = styled.div`
	position: relative;
	display: flex;
	width: 500px;
	height: 100px;
	flex-direction: row;
	padding: 6px;
	justify-content: space-around;
	border-top: 1px solid grey;
	border-left: 1px solid grey;
	border-right: 1px solid grey;

	@media (max-width: 736px) {
		display: flex;
		flex-direction: row;
		padding: 6px;
		justify-content: space-around;
		border-left: solid;
		border-top: solid;
		border-right: solid;
		border-color: rgb(161, 161, 161);
		border-width: 1px;
		-webkit-overflow-scrolling: touch;
	}

	@keyframes draw {
		0% {
			border-bottom-color: #19f6e8;
		}
		50% {
			border-right-color: #19f6e8;
			border-left-color: #19f6e8;
		}
		75% {
			border-top-color: #19f6e8;
		}
	}
	animation: draw 1s linear forwards;
	animation-delay: 1s;
`;

const ParentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 200px;
`;

const StylesWrapper = styled.div``;

const ChangeStyleButton = styled.button`
	height: 25px;
	width: 25px;
	margin: 4px;
	border-style: none;

	${({ isClicked }) => isClicked && ` background-color: rgb(242, 242, 242);`};
`;

const EmbedButton = styled.button`
	height: 25px;
	width: 25px;
	padding: 0px 0px;
	margin: 4px;
	border-style: none;
`;

const CloseWindow = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const CloseWindowButton = styled.button`
	border-style: none;
	background-color: white;
	outline: none;
	cursor: pointer;
`;

const AddMediaWindow = styled.div`
	position: absolute;
	height: 150px;
	width: 300px;
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	box-shadow: 5px 10px rgb(204, 204, 204);
	display: flex;
	z-index: 10;

	${({ active }) =>
		active &&
		`
    background: white;
    pointer-events:auto;
  `}
`;

const HandleInputDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	height: 50%;
`;

const UrlInput = styled.input``;

const ConfirmUrlButton = styled.button`
	padding: 10px;
	width: 70px;
`;

const CollapseWarning = styled(Collapse)`
	display: flex;
	align-items: center;
	position: fixed;
	margin-top: 38px;
	z-index: 1;
`;
const WarningMessage = styled(Alert)``;

const Message = styled.div`
	width: 100%;
	font-size: 15px;
	margin-top: 15px;
`;

const DropDownWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export default ToolBar;
