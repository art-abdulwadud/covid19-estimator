import covid19ImpactEstimator from './estimator';

const regionName = document.querySelector('[data-region-name]');
const avgAge = document.querySelector('[data-avg-age]');
const avgDailyIncomeInUSD = document.querySelector('[data-avg-daily-income]');
const avgDailyIncomePopulation = document.querySelector('[data-avg-daily-income-p]');
const periodType = document.querySelector('[data-period-type]');
const timeToElapse = document.querySelector('[data-time-to-elapse]');
const reportedCases = document.querySelector('[data-reported-cases]');
const population = document.querySelector('[data-population]');
const totalHospitalBeds = document.querySelector('[data-total-hospital-beds]');
const estimateBtn = document.querySelector('[data-go-estimate]');
const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
const getInputData = () => {
  const data = {
    region: {
      name: capitalize(regionName.value),
      avgAge: avgAge.value,
      avgDailyIncomeInUSD: avgDailyIncomeInUSD.value,
      avgDailyIncomePopulation: avgDailyIncomePopulation.value
    },
    periodType: periodType.options[periodType.selectedIndex].value,
    timeToElapse: timeToElapse.value,
    reportedCases: reportedCases.value,
    population: population.value,
    totalHospitalBeds: totalHospitalBeds.value
  };
  const output = covid19ImpactEstimator(data);
  return output;
};
estimateBtn.addEventListener('click', (e) => {
  const check1 = avgAge.value !== '' && regionName.value !== '';
  const check2 = avgDailyIncomePopulation.value !== '' && avgDailyIncomeInUSD.value !== '';
  const check3 = timeToElapse.value !== '' && reportedCases.value !== '';
  const check4 = population.value !== '' && totalHospitalBeds.value !== '';
  if (check1 && check2 && check3 && check4) {
    e.preventDefault();
    getInputData();
  }
});
