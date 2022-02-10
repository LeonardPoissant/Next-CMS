import styled from "styled-components";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";

const SocialShare = ({ url }) => {
	return (
		<Wrapper>
			<Ul>
				<li>
					<TwitterShareButton url={`${url}`}>
						<Twitter round={true} />
					</TwitterShareButton>
				</li>
				<li>
					<FacebookShareButton url={`${url}`}>
						<Facebook round={true} />
					</FacebookShareButton>
				</li>
			</Ul>
		</Wrapper>
	);
};

const Wrapper = styled.section`
 padding: 25px 0;
  }
`;

const Ul = styled.ul`
display: flex;
flex-direction:row;
justify-content:center;
align-items:center;
list-style-type: none;

 }
 `;

const Twitter = styled(TwitterIcon)`
margin:5px;
 }
`;
const Facebook = styled(FacebookIcon)`
margin:5px;
 }
`;

export default SocialShare;
