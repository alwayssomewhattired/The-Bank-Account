import "./transactionHistory.scss";
import { useSelector } from "react-redux";


/** Displays a table of the user's transaction history. */
export default function TransactionHistory() {
  // TODO: Get the transaction history from the Redux store using the useSelector hook
  const history = useSelector((state) => state.transactions.history);
  const renderedTR = history.map((histoire) => (
    <tr>
      <th scope="row">{histoire.type}</th>
      <td>{histoire.amount.toFixed(2)}</td>
      <td>{histoire.balance.toFixed(2)}</td>
    </tr>
  ));

  return (
    <section className="transactions-history container">
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Amount</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>
          {
            /* TODO
          Map over the transactions in `history`
          to render the appropriate `TransactionRow`s
          */
            renderedTR
          }
        </tbody>
      </table>
    </section>
  );
}
