import { useState } from "react";

export default function Loadable(props) {
	const [style, setStyle] = useState({
		display: "none",
		animationPlayState: "paused !important",
	});

	return (
		<>
			<div
				style={style}
				onLoad={() => {
					setStyle({
						animation: "initial-zoom 1s forwards ease-in-out",
					});
				}}
			>
				{props.children}
			</div>
		</>
	);
}
