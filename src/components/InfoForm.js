import React, { Component } from 'react';

export default class InfoForm extends Component {
	render() {
		return (
			<>
				<label htmlFor="basic-url" className="sub-heading">
					Info
				</label>
				<small id="emailHelp" className="form-text text-muted">
					Estimate in days/weeks/months?
				</small>
				<div className="input-group mb-3">
					<div className="input-group-prepend">
						<label className="input-group-text">Period type</label>
					</div>
					<select
						id="period-type"
						className="form-control form-control-lg"
						data-period-type
					>
						<option value="days">Days</option>
						<option value="weeks">Weeks</option>
						<option value="months">Months</option>
					</select>
					<br />
				</div>
				<div className="input-group mb-3">
					<div className="input-group-prepend">
						<label className="input-group-text">Time to elapse</label>
					</div>
					<input
						type="number"
						className="form-control"
						placeholder="e.g 12"
						aria-label="timeToElapse"
						data-time-to-elapse
					/>
				</div>
				<div className="input-group mb-3">
					<div className="input-group-prepend">
						<label className="input-group-text">Reported cases</label>
					</div>
					<input
						type="number"
						className="form-control"
						placeholder="e.g 10"
						aria-label="reportedCases"
						data-reported-cases
					/>
				</div>
				<div className="input-group mb-3">
					<div className="input-group-prepend">
						<label className="input-group-text">Population</label>
					</div>
					<input
						type="number"
						className="form-control"
						placeholder="e.g 66622705"
						aria-label="population"
						data-population
					/>
				</div>
				<label htmlFor="basic-url" className="medium-text">
					Total hostpital beds
				</label>
				<div className="input-group mb-3">
					<input
						type="number"
						className="form-control"
						placeholder="e.g 678874"
						aria-label="totalHospitalBeds"
						data-total-hospital-beds
					/>
				</div>
			</>
		);
	}
}
