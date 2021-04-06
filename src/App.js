import { useState, useLayoutEffect } from "react";
import DarkBlueLine from "./components/DarkBlueLine";
import LightBlueLine from "./components/LightBlueLine";
import Skill from "./components/Skills";
import SocialButton from "./components/SocialButton";
import logo from "./assets/kvintanaka-2-logo.svg";
import MessageManager from "./components/MessageManager";
import ComssaPromotion from "./components/ComssaPromotion";
import "./stylesheet/effects.css";

function App() {
	const [orientation, setOrientation] = useState("");

	useLayoutEffect(() => {
		setOrientation(getWindowOrientationn());
	}, []);

	if (true) {
		return (
			<>
				<LightBlueLine />
				<br />
				<br />
				<br />
				<br />
				<div className="container">
					<div className="row ">
						<div id="left-side" className="col">
							<br />
							<div className="row">
								<Logo />
							</div>
							<br />
							<br />
							<div className="row">
								<Skill />
							</div>
							<br />

							<br />
							<br />
							<div className="row">
								<div className="col-3">
									<div>
										<small>Contact now</small>
									</div>
									<br />
									<SocialButton
										title="LinkedIn"
										logo="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
										url="https://www.linkedin.com/in/kvintanaka/"
										height="80px"
										width="80px"
									/>
								</div>
								<div className="col-2 d-flex justify-content-center align-items-center"></div>
								<div className="col">
									<div>
										<small>Leave a message</small>
									</div>
									<br />
									<MessageManager />
									<br />
								</div>
							</div>

							<br />
						</div>
						<div id="right-side" className="col">
							<ComssaPromotion />
						</div>
					</div>
				</div>
				<DarkBlueLine />
			</>
		);
	} else {
		return "Portrait mode is yet to be supported";
	}
}

function getWindowOrientationn() {
	if (window.innerHeight > window.innerWidth) {
		return "Portrait";
	} else {
		return "Landscape";
	}
}

function CollaborationArchive() {
	return (
		<>
			<p style={{ fontFamily: "Georgia" }}>
				“I believe together we can, everyone have their own strength and
				combined we will surely achieve a greater result.”
			</p>
			<h2 className="d-flex justify-content-end">
				LET'S C O L L A B O R A T E !
			</h2>
			<div style={{}}></div>
		</>
	);
}

function Logo() {
	return (
		<img
			style={{
				animation: "initial-slide-right 2s forwards ease-in-out",
			}}
			src={logo}
			height="80px"
		/>
	);
}

export default App;
