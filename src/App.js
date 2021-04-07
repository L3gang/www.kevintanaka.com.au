import DarkBlueLine from "./components/DarkBlueLine";
import LightBlueLine from "./components/LightBlueLine";
import Skill from "./components/Skills";
import SocialButton from "./components/SocialButton";
import logo from "./assets/kvintanaka-2-logo.svg";
import MessageManager from "./components/MessageManager";
import ComssaPromotion from "./components/ComssaPromotion";
import "./stylesheet/effects.css";
import RoundedBox from "./components/RoundedBox";

function App() {
	return (
		<>
			<LightBlueLine />
			<div className="container">
				<div className="row">
					<div id="left-side" className="col">
						<div className="row mt-5">
							<Logo />
						</div>
						<div className="row my-5">
							<Skill />
						</div>
						<div className="row mb-5">
							<div className="col-3">
								<div className="mb-3">
									<small>Contact now</small>
								</div>
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
								<div className="mb-3">
									<small>Leave a message</small>
								</div>
								<MessageManager />
							</div>
						</div>

						<br />
					</div>
					<div id="right-side" className="col">
						<div className="row my-5">
							<RoundedBox>
								<ComssaPromotion />
							</RoundedBox>
						</div>
					</div>
				</div>
			</div>
			<DarkBlueLine />
		</>
	);
}

function Logo() {
	return (
		<img
			style={{
				animation: "initial-slide-right 0.7s forwards ease-in-out",
			}}
			alt="Kevin Tanaka Logo"
			src={logo}
			height="80px"
		/>
	);
}

export default App;
