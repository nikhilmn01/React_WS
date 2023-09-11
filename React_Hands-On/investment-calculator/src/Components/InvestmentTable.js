import './InvestmentTable.css';
const InvestmentTable = (props) => {
    if (props.tableData.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
    }
    let renderTable =
    <tbody>
        {props.tableData.map((obj) => (
        <tr key={obj.year}>
          <td>{obj.year}</td>
          <td>{obj.savingsEndOfYear}</td>
          <td>{obj.yearlyInterest}</td>
          <td>{obj.totalIntrest}</td>
          <td>{obj.investedCapital}</td>
        </tr>
      ))}
    </tbody>
    return (
        /* Todo: Show below table conditionally (only once result data is available) */
        /* Show fallback text if no data is available */
        <table className="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            {renderTable}
        </table>
    )
}

export default InvestmentTable