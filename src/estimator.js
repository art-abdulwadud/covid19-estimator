const covid19ImpactEstimator = (data) => {
  const input = data;
  const impactCI = data.reportedCases * 10;
  const severeImpactCI = data.reportedCases * 50;
  let impactIBRT;
  let severeImpactIBRT;
  let impactDIF;
  let severeImpactDIF;
  if (data.periodType === 'days') {
    impactIBRT = impactCI * (2 ** Math.floor(data.timeToElapse / 3));
    severeImpactIBRT = severeImpactCI * (2 ** Math.floor(data.timeToElapse / 3));
    impactDIF = impactIBRT * 0.65 * data.region.avgDailyIncomeInUSD * data.timeToElapse;
    severeImpactDIF = severeImpactIBRT * 0.65 * data.region.avgDailyIncomeInUSD * data.timeToElapse;
  }
  if (data.periodType === 'weeks') {
    const weeksToDays = data.timeToElapse * 7;
    impactIBRT = impactCI * (2 ** Math.floor(weeksToDays / 3));
    severeImpactIBRT = severeImpactCI * (2 ** Math.floor(weeksToDays / 3));
    impactDIF = impactIBRT * 0.65 * data.region.avgDailyIncomeInUSD * weeksToDays;
    severeImpactDIF = severeImpactIBRT * 0.65 * data.region.avgDailyIncomeInUSD * weeksToDays;
  }
  if (data.periodType === 'months') {
    const monthsToDays = data.timeToElapse * 30;
    impactIBRT = impactCI * (2 ** Math.floor(monthsToDays / 3));
    severeImpactIBRT = severeImpactCI * (2 ** Math.floor(monthsToDays / 3));
    impactDIF = impactIBRT * 0.65 * data.region.avgDailyIncomeInUSD * monthsToDays;
    severeImpactDIF = severeImpactIBRT * 0.65 * data.region.avgDailyIncomeInUSD * monthsToDays;
  }
  const impactSCBRT = impactIBRT * 0.15;
  const severeImpactSCBRT = severeImpactIBRT * 0.15;
  const impactHBBRT = Math.trunc(data.totalHospitalBeds * 0.35) - impactSCBRT;
  const severeImpactHBBRT = Math.trunc(data.totalHospitalBeds * 0.35) - severeImpactSCBRT;
  const impactCFICU = Math.trunc(impactIBRT * 0.05);
  const severeImpactCFICU = Math.trunc(severeImpactIBRT * 0.05);
  const impactCFV = Math.trunc(impactIBRT * 0.02);
  const severeImpactCFV = Math.trunc(impactIBRT * 0.02);
  return {
    data: input,
    impact: {
      currentlyInfected: impactCI,
      infectionsByRequestedTime: impactIBRT,
      severeCasesByRequestedTime: impactSCBRT,
      hospitalBedsByRequestedTime: impactHBBRT,
      casesForICUByRequestedTime: impactCFICU,
      casesForVentilatorsByRequestedTime: impactCFV,
      dollarsInFlight: impactDIF.toFixed(2)
    },
    severeImpact: {
      currentlyInfected: severeImpactCI,
      infectionsByRequestedTime: severeImpactIBRT,
      severeCasesByRequestedTime: severeImpactSCBRT,
      hospitalBedsByRequestedTime: severeImpactHBBRT,
      casesForICUByRequestedTime: severeImpactCFICU,
      casesForVentilatorsByRequestedTime: severeImpactCFV,
      dollarsInFlight: severeImpactDIF.toFixed(2)
    }
  };
};

export default covid19ImpactEstimator;
