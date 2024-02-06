import { fetchTransactionsPages } from '@/app/lib/data';

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const transactions = await fetchTransactionsPages();
  const filteredTransactions = transactions.filter(transaction => transaction.stock_name.toLowerCase().includes(query.toLowerCase()));
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Stock Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Stock Symbol
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Total Minting Amount of Tokens
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Total Amount of Tokens Destroyed
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Current Circulation of Tokens
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {filteredTransactions?.map((transaction) => (
                <tr
                  key={transaction.stock_symbol}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{transaction.stock_name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {transaction.stock_symbol}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {transaction.total_minting_amount_of_tokens}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {transaction.total_amount_of_tokens_destroyed}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {transaction.current_circulation_of_tokens}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
