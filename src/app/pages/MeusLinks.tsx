import { useState } from "react";
import {
  Link2,
  Copy,
  ExternalLink,
  TrendingUp,
  MousePointer,
  Eye,
  DollarSign,
  Calendar,
  Search,
  Filter,
  Download,
  Plus,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export function MeusLinks() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const links = [
    {
      id: "1",
      name: "Campanha Black Friday 2026",
      url: "https://scalehub.com/aff/gb-blackfriday",
      clicks: 1247,
      conversions: 42,
      revenue: "R$ 8.450,00",
      conversionRate: 3.4,
      status: "active",
      createdAt: "2026-03-01",
    },
    {
      id: "2",
      name: "Produto Infoproduto Premium",
      url: "https://scalehub.com/aff/gb-premium",
      clicks: 856,
      conversions: 28,
      revenue: "R$ 5.320,00",
      conversionRate: 3.3,
      status: "active",
      createdAt: "2026-02-15",
    },
    {
      id: "3",
      name: "Link de Indicação Geral",
      url: "https://scalehub.com/ref/gabriel-baluchi",
      clicks: 2134,
      conversions: 67,
      revenue: "R$ 12.680,00",
      conversionRate: 3.1,
      status: "active",
      createdAt: "2026-01-10",
    },
    {
      id: "4",
      name: "Campanha Verão 2026",
      url: "https://scalehub.com/aff/gb-verao",
      clicks: 423,
      conversions: 11,
      revenue: "R$ 2.145,00",
      conversionRate: 2.6,
      status: "paused",
      createdAt: "2026-02-28",
    },
  ];

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const totalStats = {
    totalClicks: links.reduce((sum, link) => sum + link.clicks, 0),
    totalConversions: links.reduce((sum, link) => sum + link.conversions, 0),
    totalRevenue: links.reduce((sum, link) => sum + parseFloat(link.revenue.replace(/[^\d,]/g, "").replace(",", ".")), 0),
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Meus <span className="text-[#ffffff]">Links</span>
          </h1>
          <p className="text-gray-400">Gerencie e monitore todos os seus links de afiliado</p>
        </div>
        <button className="bg-[#ffffff] hover:bg-[#ffffff] text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
          <Plus className="w-5 h-5" />
          Criar Novo Link
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-[#050505] border border-gray-800 rounded-xl p-6 hover:border-[#ffffff]/30 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#ffffff]/10 rounded-lg flex items-center justify-center">
              <Link2 className="w-6 h-6 text-[#ffffff]" />
            </div>
            <div>
              <p className="text-gray-400 text-xs font-medium">LINKS ATIVOS</p>
              <p className="text-2xl font-bold text-white">{links.filter(l => l.status === "active").length}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#050505] border border-gray-800 rounded-xl p-6 hover:border-blue-500/30 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
              <MousePointer className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <p className="text-gray-400 text-xs font-medium">TOTAL DE CLIQUES</p>
              <p className="text-2xl font-bold text-white">{totalStats.totalClicks.toLocaleString('pt-BR')}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#050505] border border-gray-800 rounded-xl p-6 hover:border-purple-500/30 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <p className="text-gray-400 text-xs font-medium">CONVERSÕES</p>
              <p className="text-2xl font-bold text-white">{totalStats.totalConversions}</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#ffffff]/10 to-[#ffffff]/5 border border-[#ffffff]/30 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#ffffff]/20 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-[#ffffff]" />
            </div>
            <div>
              <p className="text-gray-400 text-xs font-medium">RECEITA TOTAL</p>
              <p className="text-2xl font-bold text-white">R$ {totalStats.totalRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar links..."
            className="w-full bg-[#050505] border border-gray-800 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#ffffff]/50"
          />
        </div>
        <button className="bg-[#050505] border border-gray-800 rounded-lg px-4 py-3 text-gray-400 hover:text-white hover:border-gray-700 transition-all flex items-center gap-2">
          <Filter className="w-5 h-5" />
          Filtros
        </button>
        <button className="bg-[#050505] border border-gray-800 rounded-lg px-4 py-3 text-gray-400 hover:text-white hover:border-gray-700 transition-all flex items-center gap-2">
          <Download className="w-5 h-5" />
          Exportar
        </button>
      </div>

      {/* Links Table */}
      <div className="bg-[#050505] border border-gray-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800/50 border-b border-gray-800">
              <tr>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Link</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Cliques</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Conversões</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Taxa</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Receita</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {links.map((link) => (
                <tr key={link.id} className="hover:bg-gray-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <p className="text-white font-medium text-sm">{link.name}</p>
                      <div className="flex items-center gap-2">
                        <code className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">
                          {link.url}
                        </code>
                        <button
                          onClick={() => copyToClipboard(link.url, link.id)}
                          className="text-gray-400 hover:text-[#ffffff] transition-colors"
                        >
                          {copiedId === link.id ? (
                            <CheckCircle2 className="w-4 h-4 text-[#ffffff]" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-blue-400" />
                      <span className="text-white font-semibold">{link.clicks.toLocaleString('pt-BR')}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-purple-400" />
                      <span className="text-white font-semibold">{link.conversions}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-[#ffffff] font-semibold">{link.conversionRate}%</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-white font-semibold">{link.revenue}</span>
                  </td>
                  <td className="px-6 py-4">
                    {link.status === "active" ? (
                      <span className="inline-flex items-center gap-1.5 bg-[#ffffff]/10 text-[#ffffff] px-3 py-1 rounded-full text-xs font-semibold border border-[#ffffff]/30">
                        <div className="w-1.5 h-1.5 bg-[#ffffff] rounded-full"></div>
                        Ativo
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 bg-[#0a0a0c]0/10 text-gray-400 px-3 py-1 rounded-full text-xs font-semibold border border-gray-500/30">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        Pausado
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-400 hover:text-[#ffffff] hover:bg-[#ffffff]/10 rounded-lg transition-all">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all">
                        <Sparkles className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tips */}
      <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Dicas para Maximizar suas Conversões</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>• Use links personalizados para diferentes canais (Instagram, YouTube, Email)</li>
              <li>• Teste diferentes CTAs e acompanhe qual performa melhor</li>
              <li>• Compartilhe seus links em horários de maior engajamento</li>
              <li>• Combine links com materiais de divulgação da Academy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
