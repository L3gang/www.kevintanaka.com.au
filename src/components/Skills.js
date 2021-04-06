export default function () {
	return (
		<div
			style={{ animation: "initial-slide-up 0.9s forwards ease-in-out" }}
			className="container"
		>
			<div className="row">
				<div className="col-4">
					<div className="row my-2">
						<div className="col d-flex justify-content-end">
							<img
								style={small}
								alt="Python"
								src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
							/>
						</div>
						<div className="col d-flex justify-content-center">
							<img
								style={small}
								alt="Java"
								src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
							/>
						</div>
						<div className="col d-flex justify-content-start">
							<img
								style={small}
								alt="Javascript"
								src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
							/>
						</div>
					</div>
					<div className="row my-2">
						<div className="col d-flex justify-content-end">
							<img
								style={small}
								alt="C"
								src="https://cdn.iconscout.com/icon/free/png-512/c-programming-569564.png"
							/>
						</div>
						<div className="col d-flex justify-content-start">
							<img
								style={small}
								alt="C#"
								src="https://camo.githubusercontent.com/8d56e87edf99e89bfc457cd62462e0b7aae19e6b197b1df5c542d474d8d76f81/68747470733a2f2f646576656c6f7065722e6665646f726170726f6a6563742e6f72672f7374617469632f6c6f676f2f6373686172702e706e67"
							/>
						</div>
					</div>
				</div>
				<div className="col-2 d-flex justify-content-center">
					<img
						style={{ ...big, padding: "3px" }}
						alt="AWS"
						src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
					/>
				</div>
				<div className="col-2 d-flex justify-content-center mx-2">
					<img
						style={big}
						alt="Google Cloud"
						src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-ar21.svg"
					/>
				</div>
				<div className="col-2 d-flex justify-content-center">
					<img
						style={{ ...big, padding: "7px" }}
						alt="Azure"
						src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg"
					/>
				</div>
			</div>
		</div>
	);
}

const small = {
	height: "25px",
};

const big = {
	height: "40px",
};
