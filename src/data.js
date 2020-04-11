const data = {
	region: {
		name: 'Africa',
		avgAge: 19.7,
		avgDailyIncomeInUSD: 5,
		avgDailyIncomePopulation: 0.71
	},
	periodType: 'days',
	timeToElapse: 28,
	reportedCases: 10,
	population: 66622705,
	totalHospitalBeds: 100000
};

const impact = {
	currentlyInfected: 100,
	infectionsByRequestedTime: 51200,
	severeCasesByRequestedTime: 7680,
	hospitalBedsByRequestedTime: 475535,
	casesForICUByRequestedTime: 2560,
	casesForVentilatorsByRequestedTime: 1024,
	dollarsInFlight: 4659200
};

const severeImpact = {
	currentlyInfected: 500,
	infectionsByRequestedTime: 256000,
	severeCasesByRequestedTime: 38400,
	hospitalBedsByRequestedTime: 444815,
	casesForICUByRequestedTime: 12800,
	casesForVentilatorsByRequestedTime: 5120,
	dollarsInFlight: 23296000
};

export { impact, severeImpact, data };
