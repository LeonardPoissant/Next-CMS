import styled from "styled-components";
import Link from 'next/link';
const BlogNav = (props) => {
    let arrayOfPages = props.props.data;
    return (
        <Wrapper>

            {arrayOfPages.map((page, index) => (
                <Link key={index} href={{
                    pathname: '/posts/[id]',
                    query: {
                        id: index + 1,

                    },
                }}>

                    <div>{index + 1}</div>
                </Link>

            )
            )}
        </Wrapper>

    )
}

export default BlogNav;

const Wrapper = styled.section`
cursor: pointer;
padding:40px;


   /* position: absolute;
    margin-left: 389px;
    margin-top: -715px;

width: 25px;
    height: 50px; 
    background-color: 	#ededed ;
    border-top-left-radius: 110px;  
    border-bottom-left-radius: 110px; 
    border: 2px solid 	#bdbdbd;
    border-right: 0;*/
`;