// @ts-nocheck
import React, { useEffect, useState, useContext } from "react";

import styled from "styled-components";
import Link from 'next/link'
//import { Link, useParams } from "react-router-dom";


import BlogPostBanner from "../../components/blog-post-banner";



const Posts = () => {

    const [posts, setPosts] = useState([])
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [catgerory, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [id, setId] = useState("")
    //const location = useParams()



    useEffect(() => {
        console.log('HERE')
        fetch(`http://localhost:5000/testGet`)
            .then((res) => res.json())
            .then((data) => {
                console.log('data', data)

            })
    }, [])




    useEffect(() => {

        posts.map((post) => {
            setId(post._id.toString())
        })

    }, [posts])

    const handleClick = () => {

    }

    //if (posts[0] != undefined) { console.log('-ID', posts[0]._id) }



    return (
        <div>im a div</div>
    )

};

export default Posts;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 60vh;
padding:30px;

`;


const StyledLink = styled(Link)`
text-decoration:none;

`;

