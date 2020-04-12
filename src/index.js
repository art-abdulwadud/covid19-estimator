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
const inputTags = document.querySelectorAll('input[type="number"]');
const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
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
  console.log(data);
};
estimateBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if(avgAge.value != "" && regionName.value != "" 
  	&& avgDailyIncomePopulation.value != "" && avgDailyIncomeInUSD.value != "" 
  	&& timeToElapse.value != "" && reportedCases.value != "" && population.value != "" 
  	&& totalHospitalBeds.value != ""){
    getInputData();
  }
});