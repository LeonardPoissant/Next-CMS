// @ts-nocheck
import React, { useEffect, useState, useContext } from "react";
import Link from 'next/link'
import styled from "styled-components";
//import { Link, useParams } from "react-router-dom";


import BlogPostBanner from "./Blog-post-banner";


const Posts = (props) => {

    let posts = props.posts.data;



    const codingThumbnail = "/coding.png";
    const randomThumbnail = "/random.png";
    const defaultThumbnail = "/default.png"

    return (
        <Wrapper className="HERE?">
            {posts[0] != undefined ? posts.map((post, index) => (
                <BlogPostBanner
                    key={index}
                    id={post._id}
                    title={post.title}
                    description={post.description}
                    category={post.category}
                    date={post.date}
                />
            )) : <div>Looks like something went wrong</div>}
        </Wrapper>
    )

};

export default Posts;

const Wrapper = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 60vh;
padding:30px;

`;


const StyledLink = styled.div`
text-decoration:none;

`;

