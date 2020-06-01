import React from "react"; 


export default function Search({ handleSearch }) {
	return (
		<>
			<input type="text" placeholder="search game by title" onChange={event => handleSearch(event)} />
		</>
	)
}