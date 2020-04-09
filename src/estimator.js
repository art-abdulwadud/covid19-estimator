const covid19ImpactEstimator = (data) => {
  const input = data;
  const impactCI = data.reportedCases * 10;
  const severeImpactCI = data.reportedCases * 50;
  let impactIBRT;
  let severeImpactIBRT;
  if (data.periodType === 'days') {
    impactIBRT = impactCI * (2 ** Math.floor(data.timeToElapse / 3));
    severeImpactIBRT = severeImpactCI * (2 ** Math.floor(data.timeToElapse / 3));
  }
  if (data.periodType === 'weeks') {
    const weeksToDays = data.timeToElapse * 7;
    impactIBRT = impactCI * (2 ** Math.floor(weeksToDays / 3));
    severeImpactIBRT = severeImpactCI * (2 ** Math.floor(weeksToDays / 3));
  }
  if (data.periodType === 'months') {
    const monthsToDays = data.timeToElapse * 30;
    impactIBRT = impactCI * (2 ** Math.floor(monthsToDays / 3));
    severeImpactIBRT = severeImpactCI * (2 ** Math.floor(monthsToDays / 3));
  }
  const impactSCBRT = impactIBRT * 0.15;
  const severeImpactSCBRT = severeImpactIBRT * 0.15;
  const impactHBBRT = data.totalHospitalBeds * 0.35 - impactSCBRT;
  const severeImpactHBBRT = data.totalHospitalBeds * 0.35 - severeImpactSCBRT;
  return {
    data: input,
    impact: {
      currentlyInfected: impactCI,
      infectionsByRequestedTime: impactIBRT,
      severeCasesByRequestedTime: Math.floor(impactSCBRT),
      hospitalBedsByRequestedTime: Math.floor(impactHBBRT)
    },
    severeImpact: {
      currentlyInfected: severeImpactCI,
      infectionsByRequestedTime: severeImpactIBRT,
      severeCasesByRequestedTime: Math.floor(severeImpactSCBRT),
      hospitalBedsByRequestedTime: Math.floor(severeImpactHBBRT)
    }
  };
};

export default covid19ImpactEstimator;
