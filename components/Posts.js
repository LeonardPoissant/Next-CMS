// @ts-nocheck
import React, { useEffect, useState, useContext } from "react";
import Link from 'next/link'
import styled from "styled-components";
//import { Link, useParams } from "react-router-dom";


import BlogPostBanner from "./Blog-post-banner";


const Posts = (props) => {


    let posts = props.posts.data;
    console.log('POSTS', posts)

    return (
        <Wrapper className="HERE?">
            {posts[0] != undefined ? posts.map((post, index) => (

                <BlogPostBanner
                    key={index}
                    id={post._id}
                    title={post.post.title}
                    description={post.post.description}
                    category={post.post.category}
                    date={post.post.date}
                />
            )) : <div>Looks like something went wrong</div>}
        </Wrapper>
    )

};

export default Posts;

const Wrapper = styled.main`
z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 60vh;
padding:30px;
@media only screen and (max-width: 667px) {

width:500px;
padding-top: 100px;

}


`;


const StyledLink = styled.div`
text-decoration:none;

`;

