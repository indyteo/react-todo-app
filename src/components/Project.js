function Project({name, desc}) {
	return (
			<div onClick={projectClick}>
				<h3>{name}</h3>
				<p>{desc}</p>
			</div>
	);
}

function projectClick() {
	console.log("Click");
}

export default Project;
