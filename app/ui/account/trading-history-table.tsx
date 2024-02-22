import { fetchTransactionsPages } from '@/app/lib/data';
import Link from 'next/link';

export default async function TradingHistoryTable({
  accountid,
}: {
    accountid: string;
}) {
    const historys = [
        { orderid: 'orderid1', symbol: 'symbol1', createddate: '2020/10/10', closedate: '2020/10/12', price: 35, qty: 12, status: 'open' },
        { orderid: 'orderid2', symbol: 'symbol2', createddate: '2020/10/10', closedate: '2020/10/12', price: 35, qty: 12, status: 'close' },
        { orderid: 'orderid3', symbol: 'symbol3', createddate: '2020/10/10', closedate: '2020/10/12', price: 35, qty: 12, status: 'open' },
        { orderid: 'orderid4', symbol: 'symbol4', createddate: '2020/10/10', closedate: '2020/10/12', price: 35, qty: 12, status: 'close' },
        { orderid: 'orderid5', symbol: 'symbol5', createddate: '2020/10/10', closedate: '2020/10/12', price: 35, qty: 12, status: 'open' }
    ]

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Order ID
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Stock Symbol
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Stock Created Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Stock Close Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Price
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Quantity
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {historys?.map((history) => (
                <tr
                  key={history.orderid}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex items-center gap-3">
                      <p>{history.orderid}</p>
                      </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {history.symbol}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {history.createddate}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {history.closedate}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {history.price}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {history.qty}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {history.status}
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
