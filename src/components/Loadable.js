import { useEffect, createRef } from "react";

export default (props) => {
	let style = { animationPlayState: "paused !important" };

	const loadable = createRef();
	useEffect(() => {
		loadable.current.addEventListener("load", () => {
			style = { animation: "initial-zoom 0.9s forwards ease-in-out" };
		});
	});

	return (
		<>
			<div ref={loadable} style={style}>
				{props.children}
			</div>
		</>
	);
};
