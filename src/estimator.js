const covid19ImpactEstimator = (data) => {
  const input = data;
  const impactCI = data.reportedCases * 10;
  const severeImpactCI = data.reportedCases * 50;
  let impactIBRT;
  let severeImpactIBRT;
  if (data.periodType === 'days') {
    impactIBRT = impactCI * (2 ** Math.round(data.timeToElapse / 3));
    severeImpactIBRT = severeImpactCI * (2 ** Math.round(data.timeToElapse / 3));
  }
  if (data.periodType === 'weeks') {
    const weeksToDays = data.timeToElapse * 7;
    impactIBRT = impactCI * (2 ** Math.round(weeksToDays / 3));
    severeImpactIBRT = severeImpactCI * (2 ** Math.round(weeksToDays / 3));
  }
  if (data.periodType === 'months') {
    const monthsToDays = data.timeToElapse * 30;
    impactIBRT = impactCI * (2 ** Math.round(monthsToDays / 3));
    severeImpactIBRT = severeImpactCI * (2 ** Math.round(monthsToDays / 3));
  }
  return {
    data: input,
    impact: {
      currentlyInfected: impactCI,
	  infectionsByRequestedTime: impactIBRT
    },
    severeImpact: {
      currentlyInfected: severeImpactCI,
      infectionsByRequestedTime: severeImpactIBRT
    }
  };
};

export default covid19ImpactEstimator;
