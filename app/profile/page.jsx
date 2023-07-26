"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";

const MyProfile = () => {
	const router = useRouter();
	const { data: session } = useSession();

	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const fetchPosts = async () => {
			const res = await fetch(`/api/users/${session?.user.id}/posts`);
			const data = await res.json();
			setPosts(data);
		};
		session?.user.id && fetchPosts();
	}, []);

	const handleEdit = (post) => {
		router.push(`/update-prompt?id=${post._id}`);
	};

	const handleDelete = async (post) => {
		const isConfirmed = window.confirm(
			"Are you sure you want to delete this post?",
		);

		if (isConfirmed) {
			try {
				await fetch(`/api/prompt/${post._id.toString()}`, {
					method: "DELETE",
				});

				const newPosts = posts.filter(
					(p) => p._id.toString() !== post._id.toString(),
				);
				setPosts(newPosts);
			} catch (err) {
				console.log(err);
			}
		}
	};
	return (
		<Profile
			name='My'
			desc={`Welcome to your personalized profile page. Explore your exceptional prompts and be inspired by power of this imagination.`}
			data={posts}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	);
};

export default MyProfile;
