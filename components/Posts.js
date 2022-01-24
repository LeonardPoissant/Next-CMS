// @ts-nocheck
import React, { useEffect, useState, useContext } from "react";
import Link from 'next/link'
import styled from "styled-components";
import BlogNav from "./Blog-pages-nav";
//import { Link, useParams } from "react-router-dom";


import BlogPostBanner from "./Blog-post-banner";


const Posts = (props) => {
    let posts = props.posts.posts.data;
    let arrayOfPages = props.posts.arrayOfPages

    return (
        <>
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
            <BlogNav props={arrayOfPages} />
            </>
    )

};

export default Posts;

const Wrapper = styled.li`
padding-top:100px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
min-height: 60vh;
padding:30px;
@media only screen and (max-width: 667px) {
width:100%;
}
`;

