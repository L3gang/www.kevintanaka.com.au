import { useState } from "react";
import logo from "../assets/C_Reversed.svg";

export default () => {
	return (
		<>
			<div className=" media my-2">
				<ComssaLogo />
				<div className="media-body ml-4">
					<h1 className="h3">ComSSA Open-Source Project</h1>
					<p>
						A newly created initiative in 2021 to increase engagement within
						computing student in Curtin University. <br />
						Paid and community project now being developed.
					</p>
					<h5>
						Exclusive to ComSSA Membership <br />
						So, <a href="https://www.comssa.org.au/join/">Join Now</a>
					</h5>
					<small>
						Want to know more? You can leave me a message or contact another
						fellow committee at Building 314 Room 345.
					</small>
				</div>
			</div>
		</>
	);
};

function ComssaLogo() {
	let hover = "140px";
	let unhover = "130px";
	const [diameter, setDiameter] = useState(unhover);

	return (
		<div
			id="comssa-logo"
			className="d-flex justify-content-center align-items-center"
			style={{
				height: diameter,
				width: diameter,
				backgroundColor: "#485AA6",
				borderRadius: diameter,
			}}
			onMouseEnter={() => setDiameter(hover)}
			onMouseLeave={() => setDiameter(unhover)}
		>
			<img
				src={logo}
				style={{
					height: `calc(${diameter} * 0.75`,
					width: `calc(${diameter} * 0.75`,
				}}
			/>
		</div>
	);
}

function GithubLogo() {
	return (
		<a
			href="https://github.com/ComSSA"
			style={{
				backgroundColor: "white",
			}}
		>
			<div id="comssa-repository">
				<small>Official Repository on</small>
				<img
					src="https://pngimg.com/uploads/github/github_PNG15.png"
					height="30px"
				/>
			</div>
		</a>
	);
}
