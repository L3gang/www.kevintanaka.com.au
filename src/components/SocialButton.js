import "../stylesheet/animations.css";

export default function SocialButton(props) {
	return (
		<>
			<a href={props.url}>
				<div
					className="pulsing-linkedin d-flex justify-content-center align-items-center"
					style={{
						...lightShadow,
						...roundedBox,
						width: props.width,
						height: props.height,
					}}
				>
					<img
						alt={props.title}
						src={props.logo}
						style={{
							height: `calc(${props.height} * 0.7)`,
							width: `calc(${props.width} * 0.7)`,
						}}
					/>
				</div>
			</a>
		</>
	);
}

const lightShadow = {
	boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.35)",
};

const roundedBox = {
	borderRadius: "15px",
};
