"use client";

import { useState, useEffect } from "react";
import Profile from "@components/Profile";

const UserProfile = ({ params, searchParams }) => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const fetchPosts = async () => {
			const res = await fetch(`/api/users/${params.id}/posts`);
			const data = await res.json();
			setPosts(data);
		};
		params.id && fetchPosts();
	}, []);

	return (
		<Profile
			name={searchParams.name}
			desc={`Welcome to ${searchParams.name} personalized profile page. Explore ${searchParams.name} exceptional prompts and be inspired by power of this imagination.`}
			data={posts}
		/>
	);
};

export default UserProfile;
