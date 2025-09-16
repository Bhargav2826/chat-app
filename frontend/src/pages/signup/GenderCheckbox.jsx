const GenderCheckbox = () => {
	return (
		<>
			<style>
				{`
					.glass-checkbox-button {
						background: rgba(255, 255, 255, 0.15);
						backdrop-filter: blur(10px);
						-webkit-backdrop-filter: blur(10px);
						border: 1px solid rgba(255, 255, 255, 0.3);
						border-radius: 8px;
						padding: 10px 16px;
						margin-right: 8px;
						cursor: pointer;
						transition: all 0.3s ease;
						color: black;
						font-weight: bold;
						display: flex;
						align-items: center;
						justify-content: space-between;
						min-width: 100px;
					}
					.glass-checkbox-button:hover {
						background: rgba(255, 255, 255, 0.25);
						border: 1px solid rgba(255, 255, 255, 0.5);
					}
					.glass-checkbox-button input[type="checkbox"] {
						accent-color: #007bff; /* modern browsers support this */
						cursor: pointer;
					}
					.glass-checkbox-button input[type="checkbox"]:checked {
						background-color: #007bff;
						border-color: #007bff;
					}
				`}
			</style>
			<div className='d-flex'>
				<label className="glass-checkbox-button" htmlFor="male">
					<span>Male</span>
					<input type='checkbox' id="male" className="form-check-input" />
				</label>
				<label className="glass-checkbox-button" htmlFor="female">
					<span>Female</span>
					<input type='checkbox' id="female" className="form-check-input" />
				</label>
			</div>
		</>
	);
};

export default GenderCheckbox;
