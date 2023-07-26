"use client";

import { useEffect, useState } from "react";
import PromptCard from "./PromptCard";
import Loader from "./Loader";

const PromptsCardsList = ({ data, handleTagClick }) => {
	return (
		<div className='mt-16 prompt_layout'>
			{data.map((post) => (
				<PromptCard
					key={post._id}
					post={post}
					handleTagClick={handleTagClick}
				/>
			))}
		</div>
	);
};

const Feed = () => {
	//* search states
	const [searchText, setSearchText] = useState("");
	const [posts, setPosts] = useState([]);
	const [searchedResults, setSearchedResults] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await fetch("/api/prompt");
			const data = await res.json();
			setPosts(data);
		};
		fetchPosts();
	}, []);

	const filterPrompts = (searchtext) => {
		const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
		return posts.filter(
			(item) =>
				regex.test(item.creator.username) ||
				regex.test(item.tag) ||
				regex.test(item.prompt),
		);
	};

	const handleSearchChange = (e) => {
		setSearchText(e.target.value);
		setSearchedResults(filterPrompts(e.target.value));
	};

	const handleTagClick = (tag) => {
		setSearchText(tag.replace("#", ""));
		setSearchedResults(filterPrompts(tag));
	};

	return (
		<section className='feed '>
			<form className='relative w-full flex-center'>
				<input
					type='text'
					placeholder='Search for a tag or a username or a prompt...'
					className='search_input peer'
					value={searchText}
					onChange={handleSearchChange}
					required
				/>
			</form>
			{posts.length || searchedResults.length ? (
				searchText ? (
					<PromptsCardsList
						data={searchedResults}
						handleTagClick={handleTagClick}
					/>
				) : (
					<PromptsCardsList data={posts} handleTagClick={handleTagClick} />
				)
			) : (
				<Loader />
			)}
		</section>
	);
};

export default Feed;
