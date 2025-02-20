import { formatter } from "../util/investment"

export default function Result({ data = [] }) {
    return (
        <section id='result'>
            <table className="center">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(element => {
                        return (
                            <tr key={element.year}>
                                <td>{element.year}</td>
                                <td>{formatter.format(element.valueEndOfYear)}</td>
                                <td>{formatter.format(element.interest)}</td>
                                <td>{formatter.format(element.valueEndOfYear - element.interest)}</td>
                                <td>{formatter.format(element.annualInvestment)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    )
}