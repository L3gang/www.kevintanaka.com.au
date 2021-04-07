import { useState } from "react";
import loadingImages from "../assets/Ellipsis-2.5s-200px.svg";

export default function MessageManager() {
	const [input, setInput] = useState({});
	const [confirmed, setConfirmed] = useState(false);
	const [sent, setSent] = useState(false);

	function handleInputChange(e) {
		setInput({ ...input, [e.target.name]: e.target.value });
	}

	function handleConfirmation(e) {
		e.preventDefault();

		setConfirmed(true);
	}

	function handleSent(e) {
		e.preventDefault();

		const form = new FormData();
		form.append("entry.1056735415", input.name);
		form.append("entry.1213826864", input.message);
		form.append("entry.2107901377", input.email);

		fetch(
			"https://docs.google.com/forms/u/1/d/e/1FAIpQLSdLEUFxxHyxGXOHfuJtKjIGYIiyFyd7b_VE3Fn5acrkiwKUtQ/formResponse",
			{
				mode: "no-cors",
				body: form,
				method: "post",
			}
		)
			.then(() => {
				setSent(true);
			})
			.catch(() => {
				console.log("Something wrong, but I can't tell because no-cors");
			});
	}

	return confirmed ? (
		<>
			<div>
				<p>
					"{input.message}" <br />
					<strong>- {input.name}</strong>
				</p>
			</div>
			{sent ? (
				<p>Message successfully sent to Kevin Tanaka!</p>
			) : (
				<form onSubmit={handleSent}>
					<div className="form-group">
						<div className="mb-2">
							<span className="small">How can I contact you back?</span>
						</div>
						<div className="form-group row">
							<label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
								Email
							</label>
							<div className="col-sm-10">
								<input
									type="email"
									className="form-control"
									name="email"
									placeholder="Write your email here"
									onChange={handleInputChange}
									value={input.email}
								/>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-end">
						<button id="cfm-button" type="submit" className="btn btn-primary">
							<small>SEND MESSAGE</small>
						</button>
					</div>
				</form>
			)}
		</>
	) : (
		<form onSubmit={handleConfirmation}>
			<div className="form-group">
				<label htmlFor="name">Name</label>
				<input
					className="form-control"
					name="name"
					type="text"
					placeholder="Enter your full name"
					onChange={handleInputChange}
					value={input.name}
					required
				/>
			</div>
			<div className="form-group">
				<label htmlFor="message">Message</label>
				<textarea
					className="form-control"
					name="message"
					type="text"
					rows="2"
					placeholder="Write your message here"
					onChange={handleInputChange}
					value={input.message}
					required
				/>
			</div>
			<div className="d-flex justify-content-end">
				<button type="submit" className="btn btn-primary">
					<small>CONFIRM MESSAGE</small>
				</button>
			</div>
		</form>
	);
}
