import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const BASE_URL = 'https://jsonplaceholder.typicode.com';

function Demo() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`${BASE_URL}/posts`); // Fix: Use backticks (`) here
                console.log(response);
                const posts = await response.json();
                console.log(posts);
                setPosts(posts);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div className="tutorial">
            <h1 className='mb-4 text-2xl'> Data Fetching in React </h1>
            <ul>
                {posts.map((post) => {
                    return <li key={post.id}>{post.title}</li>;
                })}
            </ul>
        </div>
    );
}

export default Demo;
