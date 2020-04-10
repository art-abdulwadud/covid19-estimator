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
  const impactHBBRT = Math.trunc(data.totalHospitalBeds * 0.35 - impactSCBRT);
  const severeImpactHBBRT = Math.trunc(data.totalHospitalBeds * 0.35 - severeImpactSCBRT);
  const impactCFICU = Math.trunc(impactIBRT * 0.05);
  const severeImpactCFICU = Math.trunc(severeImpactIBRT * 0.05);
  return {
    data: input,
    impact: {
      currentlyInfected: impactCI,
      infectionsByRequestedTime: impactIBRT,
      severeCasesByRequestedTime: impactSCBRT,
      hospitalBedsByRequestedTime: impactHBBRT,
      casesForICUByRequestedTime: impactCFICU,
      casesForVentilatorsByRequestedTime: 0,
      dollarsInFlight: 0
    },
    severeImpact: {
      currentlyInfected: severeImpactCI,
      infectionsByRequestedTime: severeImpactIBRT,
      severeCasesByRequestedTime: severeImpactSCBRT,
      hospitalBedsByRequestedTime: severeImpactHBBRT,
      casesForICUByRequestedTime: severeImpactCFICU,
      casesForVentilatorsByRequestedTime: 0,
      dollarsInFlight: 0
    }
  };
};

export default covid19ImpactEstimator;
