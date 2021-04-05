import { useState, useRef } from "react";
import loadingImages from "../assets/Ellipsis-2.5s-200px.svg";

export default function () {
	const [input, setInput] = useState({});
	const [message, setMessage] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [confirmed, setConfirmed] = useState(false);
	const [sent, setSent] = useState(false);
	const loading = useRef(null);

	function handleNameChange(e) {
		setName(e.target.value);
	}

	function handleInputChange(e) {
		setInput({ ...input, [e.target.name]: e.target.value });
	}

	function handleMessageChange(e) {
		setMessage(e.target.value);
	}

	function handleEmailChange(e) {
		setEmail(e.target.value);
	}

	function handleConfirmation(e) {
		e.preventDefault();

		setConfirmed(true);
	}

	function handleSent(e) {
		e.preventDefault();

		const form = new FormData();
		form.append("entry.1056735415", name);
		form.append("entry.1213826864", message);
		form.append("entry.2107901377", email);

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
				<p>"{message}"</p>
				<strong>- {name}</strong>
			</div>
			{sent ? (
				<p>Message successfully sent to Kevin Tanaka!</p>
			) : (
				<form onSubmit={handleSent}>
					<div className="form-group">
						<div className="mb-2">
							<span className="small">How can I contact you back?</span>
						</div>
						<div class="form-group row">
							<label for="colFormLabel" class="col-sm-2 col-form-label">
								Email
							</label>
							<div class="col-sm-10">
								<input
									type="email"
									class="form-control"
									id="email"
									placeholder="Write your email here"
									onChange={handleEmailChange}
									value={email}
								/>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-end">
						<button id="cfm-button" type="submit" class="btn btn-primary">
							<small>SEND MESSAGE</small>
						</button>
					</div>
				</form>
			)}
		</>
	) : (
		<form onSubmit={handleConfirmation}>
			<div className="form-group">
				<label forHtml="name">Name</label>
				<input
					id="name"
					type="text"
					class="form-control"
					placeholder="Enter your full name"
					onChange={handleNameChange}
					value={name}
					required
				/>
			</div>
			<div className="form-group">
				<label forHtml="message">Message</label>
				<textarea
					className="form-control"
					type="text"
					rows="2"
					placeholder="Write your message here"
					onChange={handleMessageChange}
					value={message}
					required
				/>
			</div>
			<div className="d-flex justify-content-end">
				<button type="submit" class="btn btn-primary">
					<small>CONFIRM MESSAGE</small>
				</button>
			</div>
		</form>
	);
}
