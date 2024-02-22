import { fetchTransactionsPages } from '@/app/lib/data';
import Link from 'next/link';

export default async function StockDetailTable({
  stock,
}: {
  stock: string;
}) {
  const total_casting_amount = 123
  const total_destory_amount = 123
  const average_life_cycle = 4.3
  const average_casting_time = 4.3
  const average_destory_time = 2.3

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Total Casting Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Total Destory Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Average Life Cycle
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Average Casting Time
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Average Destory Time
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr
                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
              >
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex items-center gap-3">
                    <p>{total_casting_amount}</p>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {total_destory_amount}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {average_life_cycle}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {average_casting_time}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  {average_destory_time}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
