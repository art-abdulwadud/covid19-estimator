import React, { Component } from 'react';
import RegionForm from './RegionForm';
import InfoForm from './InfoForm';

export default class App extends Component {
	render() {
		return (
			<main>
				<h1 className="text-center heading">Covid19 Estimator</h1>
				<form className="m-2">
					<RegionForm />
					<InfoForm />
					<div className="input-group mb-3">
						<button
							type="button"
							className="btn btn-secondary"
							data-go-estimate
						>
							Estimate
						</button>
					</div>
				</form>
			</main>
		);
	}
}

