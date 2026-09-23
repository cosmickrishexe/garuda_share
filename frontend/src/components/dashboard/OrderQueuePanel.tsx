import React, { useState } from 'react';
import { useDispatch } from '../../context/DispatchContext';
import { Package, AlertCircle, Plus, CheckCircle2, Clock } from 'lucide-react';
import { OrderPriority } from '../../types';

export const OrderQueuePanel: React.FC = () => {
  const { orders, triggerOptimization } = useDispatch();
  const [filterPriority, setFilterPriority] = useState<string>('ALL');

  const filteredOrders = filterPriority === 'ALL' 
    ? orders 
    : orders.filter(o => o.priority === filterPriority);

  const getPriorityBadge = (priority: OrderPriority) => {
    switch (priority) {
      case 'P1_URGENT':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-950/60 text-red-400 border border-red-800/60 flex items-center space-x-1"><span>⚡</span><span>P1 URGENT</span></span>;
      case 'P2_EXPRESS':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-yellow-950/60 text-yellow-400 border border-yellow-800/60">P2 EXPRESS</span>;
      case 'P3_STANDARD':
        return <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-950/60 text-blue-400 border border-blue-800/60">P3 STANDARD</span>;
    }
  };

  return (
    <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-2xl p-4 flex flex-col h-full shadow-2xl">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <h2 className="font-extrabold text-sm text-slate-100 flex items-center space-x-2">
          <Package className="w-4 h-4 text-cyan-400" />
          <span>Order Manifest ({orders.length})</span>
        </h2>

        {/* Priority Filter Pills */}
        <div className="flex items-center space-x-1 text-[10px]">
          {['ALL', 'P1_URGENT', 'P2_EXPRESS'].map(f => (
            <button
              key={f}
              onClick={() => setFilterPriority(f)}
              className={`px-2 py-0.5 rounded-md font-medium transition-all ${
                filterPriority === f 
                  ? 'bg-cyan-500 text-white font-bold' 
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {f === 'ALL' ? 'All' : f.replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2.5 mt-3 overflow-y-auto pr-1 flex-1">
        {filteredOrders.map(order => (
          <div
            key={order.id}
            className="p-3 bg-slate-950/40 border border-slate-800/80 rounded-xl hover:border-slate-700 transition-all text-xs"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-cyan-400 font-bold">
                {order.tracking_code}
              </span>
              {getPriorityBadge(order.priority)}
            </div>

            <div className="mt-1.5 font-semibold text-white">
              {order.customer_name}
            </div>

            <p className="text-[11px] text-slate-400 truncate mt-0.5">
              {order.delivery_address}
            </p>

            <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800/60 text-[10px] text-slate-400 font-mono">
              <span>{order.destination_sector} • {order.weight_kg}kg</span>
              <span className="flex items-center space-x-1">
                {order.status === 'delivered' ? (
                  <span className="text-emerald-400 flex items-center space-x-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Delivered</span>
                  </span>
                ) : (
                  <span className="text-cyan-400 flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>Stop #{order.stop_sequence || '-'}</span>
                  </span>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
