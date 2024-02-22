import { fetchTransactionsPages } from '@/app/lib/data';
import Link from 'next/link';

export default async function PositionTable({
  accountid,
}: {
    accountid: string;
}) {
    const stocks = [
        { stock: 'stock1', ratio: 35 },
        { stock: 'stock2', ratio: 30 },
        { stock: 'stock3', ratio: 35 }
    ]

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
                  Stock Percentage
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {stocks?.map((stock) => (
                <tr
                  key={stock.stock}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                    <p>{stock.stock}</p>
                    </div>
                </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {stock.ratio}
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
