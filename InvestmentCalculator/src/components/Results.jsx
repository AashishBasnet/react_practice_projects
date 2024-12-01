import { calculateInvestmentResults, formatter } from "../util/investment";
export default function Results({ input }) {
  let data = calculateInvestmentResults(input);
  let initialInvestment =
    data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;
  return (
    <table id="result">
      <thead class="center">
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Investment Capital</th>
        </tr>
      </thead>
      <tbody class="center">
        {data.map((yearArray) => {
          const totalInterest =
            yearArray.valueEndOfYear -
            yearArray.annualInvestment * yearArray.year -
            initialInvestment;
          const totalAmountInvested = yearArray.valueEndOfYear - totalInterest;
          return (
            <tr key={yearArray.year}>
              <td>{yearArray.year}</td>
              <td>{formatter.format(yearArray.valueEndOfYear)}</td>
              <td>{formatter.format(yearArray.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
