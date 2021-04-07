import "../stylesheet/animations.css";

export default function RoundedBox(props) {
	return (
		<div
			className="m-3 p-4 d-flex justify-content-center align-items-center"
			style={{
				...lightShadow,
				...roundedBox,
				animation: "initial-slide-up 0.9s forwards ease-in-out",
			}}
		>
			{props.children}
		</div>
	);
}

const lightShadow = {
	boxShadow: "0px 3px 7px rgba(0, 0, 0, 0.2)",
};

const roundedBox = {
	borderRadius: "25px",
};
