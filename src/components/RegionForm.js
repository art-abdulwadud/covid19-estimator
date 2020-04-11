import React, { Component } from 'react';

export default class RegionForm extends Component {
	render() {
		return (
			<>
				<label htmlFor="basic-url" className="sub-heading">
					Region
				</label>
				<div className="input-group mb-3">
					<div className="input-group-prepend">
						<label className="input-group-text">Region name</label>
					</div>
					<input
						type="text"
						className="form-control"
						placeholder="e.g Africa"
						aria-label="name"
						aria-describedby="name"
					/>
				</div>
				<div className="input-group mb-3">
					<div className="input-group-prepend">
						<label className="input-group-text">Region Average Age</label>
					</div>
					<input
						type="number"
						className="form-control"
						placeholder="e.g 17"
						aria-label="avgAge"
					/>
				</div>
				<label htmlFor="basic-url" className="medium-text">
					Average daily income in USD
				</label>
				<div className="input-group mb-3">
					<div className="input-group-prepend">
						<span className="input-group-text">$</span>
					</div>
					<input
						type="number"
						className="form-control"
						placeholder="e.g 3.5"
						aria-label="avgDailyIncomeInUSD"
					/>
				</div>
				<label htmlFor="basic-url" className="medium-text">
					Average daily income population
				</label>
				<div className="input-group mb-3">
					<input
						type="number"
						className="form-control"
						placeholder="e.g 0.71 represents 71%"
						aria-label="avgDailyIncomeInUSD"
					/>
				</div>
			</>
		);
	}
}
