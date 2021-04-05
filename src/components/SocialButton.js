import "../stylesheet/animation.css";

export default function (props) {
	return (
		<a href={props.url}>
			<div
				className=" shadow-linkedin pulsing-linkedin d-flex justify-content-center align-items-center"
				style={{
					...lightShadow,
					...roundedBox,
					width: props.width,
					height: props.height,
				}}
			>
				<img
					style={shadow}
					alt={props.title}
					src={props.logo}
					style={{
						height: `calc(${props.height} * 0.7)`,
						width: `calc(${props.width} * 0.7)`,
					}}
				/>
			</div>
		</a>
	);
}

const shadow = {
	filter: "drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.3))",
};

const lightShadow = {
	boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.35)",
};

const roundedBox = {
	borderRadius: "15px",
};
