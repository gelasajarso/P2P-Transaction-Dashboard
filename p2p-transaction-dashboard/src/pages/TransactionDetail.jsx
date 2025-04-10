import { useParams } from "react-router-dom";
import transactions from "../data/transactions.json";

export default function TransactionDetail() {
  const { id } = useParams();
  const transaction = transactions.find((t) => t.id === parseInt(id));

  if (!transaction) {
    return <div className="p-4">Transaction not found.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Transaction Details</h1>
      <p>
        <strong>ID:</strong> {transaction.id}
      </p>
      <p>
        <strong>Sender:</strong> {transaction.sender}
      </p>
      <p>
        <strong>Receiver:</strong> {transaction.receiver}
      </p>
      <p>
        <strong>Amount:</strong> ${transaction.amount}
      </p>
      <p>
        <strong>Status:</strong> {transaction.status}
      </p>
      <p>
        <strong>Timestamp:</strong>{" "}
        {new Date(transaction.timestamp).toLocaleString()}
      </p>
    </div>
  );
}
