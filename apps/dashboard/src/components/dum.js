// {/* Cards */}
//         <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
//           {stats.map((item) => (
//             <div key={item.title} className="rounded-xl bg-white p-6 shadow">
//               <p className="text-gray-500">{item.title}</p>

//               <h2 className="mt-2 text-3xl font-bold">{item.value}</h2>

//               <span className="text-sm font-semibold text-green-600">
//                 {item.change} this month
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* Table */}
//         <div className="mt-10 rounded-xl bg-white shadow">
//           <div className="border-b p-6">
//             <h2 className="text-xl font-semibold">Recent Orders</h2>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="min-w-full">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-4 text-left">Order</th>
//                   <th className="px-6 py-4 text-left">Customer</th>
//                   <th className="px-6 py-4 text-left">Amount</th>
//                   <th className="px-6 py-4 text-left">Status</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {orders.map((order) => (
//                   <tr key={order.id} className="border-t hover:bg-gray-50">
//                     <td className="px-6 py-4">{order.id}</td>

//                     <td className="px-6 py-4">{order.customer}</td>

//                     <td className="px-6 py-4">{order.amount}</td>

//                     <td className="px-6 py-4">
//                       <span
//                         className={`rounded-full px-3 py-1 text-sm font-medium ${
//                           order.status === "Completed"
//                             ? "bg-green-100 text-green-700"
//                             : order.status === "Pending"
//                               ? "bg-yellow-100 text-yellow-700"
//                               : "bg-red-100 text-red-700"
//                         }`}
//                       >
//                         {order.status}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
