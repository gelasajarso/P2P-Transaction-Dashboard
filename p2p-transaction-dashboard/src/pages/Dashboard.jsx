import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import transactionsData from "../data/transactions.json";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    setTransactions(transactionsData);
  }, []);

  const filteredTransactions =
    filter === "All"
      ? transactions
      : transactions.filter((t) => t.status === filter);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Transaction Dashboard</h1>

      <div className="mb-4">
        <label className="mr-2 font-medium">Filter by status:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option>All</option>
          <option>Pending</option>
          <option>Completed</option>
          <option>Failed</option>
        </select>
      </div>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Sender</th>
            <th className="border p-2">Receiver</th>
            <th className="border p-2">Amount</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((t) => (
            <tr key={t.id} className="text-center">
              <td className="border p-2">{t.id}</td>
              <td className="border p-2">{t.sender}</td>
              <td className="border p-2">{t.receiver}</td>
              <td className="border p-2">${t.amount}</td>
              <td className="border p-2">{t.status}</td>
              <td className="border p-2">
                <Link
                  to={`/transaction/${t.id}`}
                  className="text-blue-600 hover:underline"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
