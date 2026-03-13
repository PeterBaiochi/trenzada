import { useState } from "react";
import {
  DollarSign,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Download,
  Filter,
  CreditCard,
  Wallet,
  PiggyBank,
  ChevronRight,
} from "lucide-react";

export function Financeiro() {
  const [selectedPeriod, setSelectedPeriod] = useState("thisMonth");

  const balances = {
    available: 2847.50,
    pending: 1254.30,
    withdrawn: 15680.00,
    total: 19781.80,
  };

  const transactions = [
    {
      id: "1",
      type: "credit",
      description: "Comissão - Campanha Black Friday",
      amount: 450.00,
      status: "completed",
      date: "2026-03-10",
      category: "Comissão",
    },
    {
      id: "2",
      type: "credit",
      description: "Comissão - Produto Premium",
      amount: 320.50,
      status: "completed",
      date: "2026-03-09",
      category: "Comissão",
    },
    {
      id: "3",
      type: "debit",
      description: "Saque via PIX",
      amount: 1500.00,
      status: "completed",
      date: "2026-03-08",
      category: "Saque",
    },
    {
      id: "4",
      type: "credit",
      description: "Bônus de Indicação",
      amount: 150.00,
      status: "completed",
      date: "2026-03-07",
      category: "Bônus",
    },
    {
      id: "5",
      type: "credit",
      description: "Comissão - Link Geral",
      amount: 680.00,
      status: "pending",
      date: "2026-03-06",
      category: "Comissão",
    },
    {
      id: "6",
      type: "credit",
      description: "Prêmio Top 50 Ranking",
      amount: 500.00,
      status: "completed",
      date: "2026-03-05",
      category: "Prêmio",
    },
    {
      id: "7",
      type: "credit",
      description: "Comissão Recorrente",
      amount: 245.30,
      status: "pending",
      date: "2026-03-04",
      category: "Comissão",
    },
    {
      id: "8",
      type: "debit",
      description: "Saque via Transferência",
      amount: 2000.00,
      status: "completed",
      date: "2026-03-03",
      category: "Saque",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            <span className="text-[#ffffff]">Financeiro</span>
          </h1>
          <p className="text-gray-400">Gerencie seus ganhos, saques e histórico financeiro</p>
        </div>
        <button className="bg-[#ffffff] hover:bg-[#ffffff] text-black px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          <Wallet className="w-5 h-5" />
          Solicitar Saque
        </button>
      </div>

      {/* Balance Cards */}
      <div className="grid grid-cols-4 gap-4">
        {/* Available Balance */}
        <div className="bg-gradient-to-br from-[#ffffff]/10 to-[#ffffff]/5 border border-[#ffffff]/30 rounded-xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffffff]/5 rounded-full blur-3xl"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#ffffff]/20 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-[#ffffff]" />
              </div>
              <span className="text-[#ffffff] text-xs font-semibold bg-[#ffffff]/10 px-2 py-1 rounded">DISPONÍVEL</span>
            </div>
            <p className="text-gray-400 text-xs font-medium mb-1">Saldo Disponível</p>
            <p className="text-3xl font-bold text-white mb-1">
              R$ {balances.available.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </p>
            <p className="text-xs text-[#ffffff]">Pronto para saque</p>
          </div>
        </div>

        {/* Pending Balance */}
        <div className="bg-[#0d1410] border border-gray-800 rounded-xl p-6 hover:border-yellow-500/30 transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-400" />
            </div>
            <span className="text-yellow-400 text-xs font-semibold bg-yellow-500/10 px-2 py-1 rounded">PENDENTE</span>
          </div>
          <p className="text-gray-400 text-xs font-medium mb-1">Saldo Pendente</p>
          <p className="text-3xl font-bold text-white mb-1">
            R$ {balances.pending.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </p>
          <p className="text-xs text-gray-400">Liberação em 3 dias</p>
        </div>

        {/* Withdrawn */}
        <div className="bg-[#0d1410] border border-gray-800 rounded-xl p-6 hover:border-blue-500/30 transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
              <ArrowDownRight className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-blue-400 text-xs font-semibold bg-blue-500/10 px-2 py-1 rounded">SACADO</span>
          </div>
          <p className="text-gray-400 text-xs font-medium mb-1">Total Sacado</p>
          <p className="text-3xl font-bold text-white mb-1">
            R$ {balances.withdrawn.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </p>
          <p className="text-xs text-gray-400">Este mês</p>
        </div>

        {/* Total Earnings */}
        <div className="bg-[#0d1410] border border-gray-800 rounded-xl p-6 hover:border-purple-500/30 transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-400" />
            </div>
            <span className="text-purple-400 text-xs font-semibold bg-purple-500/10 px-2 py-1 rounded">TOTAL</span>
          </div>
          <p className="text-gray-400 text-xs font-medium mb-1">Ganhos Totais</p>
          <p className="text-3xl font-bold text-white mb-1">
            R$ {balances.total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </p>
          <p className="text-xs text-gray-400">Lifetime</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-4">
        <button className="bg-[#0d1410] border border-gray-800 rounded-xl p-5 hover:border-[#ffffff]/50 hover:bg-[#ffffff]/5 transition-all group text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#ffffff]/10 rounded-lg flex items-center justify-center group-hover:bg-[#ffffff]/20 transition-colors">
              <Wallet className="w-6 h-6 text-[#ffffff]" />
            </div>
            <div className="flex-1">
              <p className="text-white font-semibold mb-1">Solicitar Saque</p>
              <p className="text-gray-400 text-xs">Via PIX ou Transferência</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-[#ffffff] transition-colors" />
          </div>
        </button>

        <button className="bg-[#0d1410] border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
              <CreditCard className="w-6 h-6 text-blue-400" />
            </div>
            <div className="flex-1">
              <p className="text-white font-semibold mb-1">Dados Bancários</p>
              <p className="text-gray-400 text-xs">Gerenciar contas cadastradas</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-blue-400 transition-colors" />
          </div>
        </button>

        <button className="bg-[#0d1410] border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all group text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
              <Download className="w-6 h-6 text-purple-400" />
            </div>
            <div className="flex-1">
              <p className="text-white font-semibold mb-1">Relatórios</p>
              <p className="text-gray-400 text-xs">Exportar histórico financeiro</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-purple-400 transition-colors" />
          </div>
        </button>
      </div>

      {/* Transactions */}
      <div className="bg-[#0d1410] border border-gray-800 rounded-xl overflow-hidden">
        <div className="border-b border-gray-800 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold text-white">Histórico de Transações</h2>
            </div>
            <div className="flex items-center gap-3">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-[#ffffff]/50"
              >
                <option value="today">Hoje</option>
                <option value="thisWeek">Esta Semana</option>
                <option value="thisMonth">Este Mês</option>
                <option value="lastMonth">Mês Passado</option>
                <option value="all">Todo Período</option>
              </select>
              <button className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-gray-400 hover:text-white hover:border-gray-600 transition-all flex items-center gap-2 text-sm">
                <Filter className="w-4 h-4" />
                Filtros
              </button>
              <button className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-gray-400 hover:text-white hover:border-gray-600 transition-all flex items-center gap-2 text-sm">
                <Download className="w-4 h-4" />
                Exportar
              </button>
            </div>
          </div>
        </div>

        <div className="divide-y divide-gray-800">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="p-6 hover:bg-gray-800/30 transition-colors">
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${transaction.type === "credit"
                    ? "bg-[#ffffff]/10"
                    : "bg-blue-500/10"
                  }`}>
                  {transaction.type === "credit" ? (
                    <ArrowUpRight className="w-6 h-6 text-[#ffffff]" />
                  ) : (
                    <ArrowDownRight className="w-6 h-6 text-blue-400" />
                  )}
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-white font-semibold">{transaction.description}</p>
                    <span className={`text-xs px-2 py-0.5 rounded ${transaction.category === "Comissão" ? "bg-purple-500/10 text-purple-400" :
                        transaction.category === "Bônus" ? "bg-yellow-500/10 text-yellow-400" :
                          transaction.category === "Prêmio" ? "bg-pink-500/10 text-pink-400" :
                            "bg-blue-500/10 text-blue-400"
                      }`}>
                      {transaction.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(transaction.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                    {transaction.status === "completed" ? (
                      <div className="flex items-center gap-1 text-[#ffffff]">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Concluído</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Clock className="w-3 h-3" />
                        <span>Pendente</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Amount */}
                <div className="text-right">
                  <p className={`text-xl font-bold ${transaction.type === "credit" ? "text-[#ffffff]" : "text-white"
                    }`}>
                    {transaction.type === "credit" ? "+" : "-"} R$ {transaction.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Card */}
      <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <AlertCircle className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Informações Importantes</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>• Saques via PIX são processados em até 24 horas úteis</li>
              <li>• Transferências bancárias podem levar até 48 horas úteis</li>
              <li>• Comissões pendentes são liberadas após 7 dias da venda</li>
              <li>• Valor mínimo para saque: R$ 50,00</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
