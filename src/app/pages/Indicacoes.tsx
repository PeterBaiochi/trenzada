import { useState } from "react";
import {
  Users,
  UserPlus,
  DollarSign,
  TrendingUp,
  Link2,
  Copy,
  Share2,
  CheckCircle2,
  Clock,
  Award,
  Target,
  Mail,
  MessageSquare,
  Sparkles,
  Gift,
} from "lucide-react";

export function Indicacoes() {
  const [copiedLink, setCopiedLink] = useState(false);
  const referralLink = "https://scalehub.com/ref/gabriel-baluchi";

  const stats = {
    totalReferrals: 48,
    activeReferrals: 34,
    totalEarnings: 4250.50,
    thisMonthEarnings: 680.00,
  };

  const referrals = [
    {
      id: "1",
      name: "João Silva",
      email: "joao.silva@email.com",
      status: "active",
      joinedAt: "2026-02-15",
      sales: 23,
      earnings: 850.00,
      level: "Prata",
    },
    {
      id: "2",
      name: "Maria Santos",
      email: "maria.santos@email.com",
      status: "active",
      joinedAt: "2026-02-20",
      sales: 18,
      earnings: 620.50,
      level: "Bronze",
    },
    {
      id: "3",
      name: "Carlos Oliveira",
      email: "carlos.oliveira@email.com",
      status: "active",
      joinedAt: "2026-02-28",
      sales: 15,
      earnings: 480.00,
      level: "Bronze",
    },
    {
      id: "4",
      name: "Ana Rodrigues",
      email: "ana.rodrigues@email.com",
      status: "pending",
      joinedAt: "2026-03-05",
      sales: 0,
      earnings: 0,
      level: "Iniciante",
    },
    {
      id: "5",
      name: "Pedro Costa",
      email: "pedro.costa@email.com",
      status: "active",
      joinedAt: "2026-03-08",
      sales: 8,
      earnings: 290.00,
      level: "Bronze",
    },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">
          Programa de <span className="text-[#ffffff]">Indicações</span>
        </h1>
        <p className="text-gray-400">Indique amigos e ganhe comissões extras por cada venda deles</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-[#ffffff]/10 to-[#ffffff]/5 border border-[#ffffff]/30 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#ffffff]/20 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-[#ffffff]" />
            </div>
            <div>
              <p className="text-gray-400 text-xs font-medium">TOTAL INDICADOS</p>
              <p className="text-3xl font-bold text-white">{stats.totalReferrals}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#0d1410] border border-gray-800 rounded-xl p-6 hover:border-blue-500/30 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
              <UserPlus className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <p className="text-gray-400 text-xs font-medium">INDICADOS ATIVOS</p>
              <p className="text-3xl font-bold text-white">{stats.activeReferrals}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#0d1410] border border-gray-800 rounded-xl p-6 hover:border-purple-500/30 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <p className="text-gray-400 text-xs font-medium">GANHOS TOTAIS</p>
              <p className="text-3xl font-bold text-white">R$ {stats.totalEarnings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#0d1410] border border-gray-800 rounded-xl p-6 hover:border-orange-500/30 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <p className="text-gray-400 text-xs font-medium">ESTE MÊS</p>
              <p className="text-3xl font-bold text-white">R$ {stats.thisMonthEarnings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Referral Link Card */}
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-6">
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 bg-gradient-to-br from-[#ffffff] to-[#ffffff] rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            <Link2 className="w-8 h-8 text-black" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-white mb-2">Seu Link de Indicação</h2>
            <p className="text-gray-400 text-sm mb-4">
              Compartilhe este link com seus amigos e ganhe <span className="text-[#ffffff] font-semibold">10% de comissão</span> sobre todas as vendas que eles realizarem!
            </p>

            <div className="flex items-center gap-3">
              <div className="flex-1 bg-[#0a0f0d] border border-gray-800 rounded-lg px-4 py-3 flex items-center gap-3">
                <code className="flex-1 text-white text-sm">{referralLink}</code>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 text-[#ffffff] hover:text-[#ffffff] transition-colors"
                >
                  {copiedLink ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="text-sm font-semibold">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5" />
                      <span className="text-sm font-semibold">Copiar</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Share Options */}
      <div className="grid grid-cols-4 gap-4">
        <button className="bg-[#0d1410] border border-gray-800 rounded-xl p-5 hover:border-[#ffffff]/50 hover:bg-[#ffffff]/5 transition-all group text-left">
          <div className="w-12 h-12 bg-[#ffffff]/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#ffffff]/20 transition-colors">
            <Share2 className="w-6 h-6 text-[#ffffff]" />
          </div>
          <p className="text-white font-semibold text-sm mb-1">Compartilhar Link</p>
          <p className="text-gray-400 text-xs">Redes sociais e WhatsApp</p>
        </button>

        <button className="bg-[#0d1410] border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group text-left">
          <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-500/20 transition-colors">
            <Mail className="w-6 h-6 text-blue-400" />
          </div>
          <p className="text-white font-semibold text-sm mb-1">Enviar por Email</p>
          <p className="text-gray-400 text-xs">Template profissional</p>
        </button>

        <button className="bg-[#0d1410] border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all group text-left">
          <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-purple-500/20 transition-colors">
            <MessageSquare className="w-6 h-6 text-purple-400" />
          </div>
          <p className="text-white font-semibold text-sm mb-1">Mensagem Direta</p>
          <p className="text-gray-400 text-xs">Instagram e Telegram</p>
        </button>

        <button className="bg-[#0d1410] border border-gray-800 rounded-xl p-5 hover:border-orange-500/50 hover:bg-orange-500/5 transition-all group text-left">
          <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-orange-500/20 transition-colors">
            <Sparkles className="w-6 h-6 text-orange-400" />
          </div>
          <p className="text-white font-semibold text-sm mb-1">Materiais IA</p>
          <p className="text-gray-400 text-xs">Copy personalizado</p>
        </button>
      </div>

      {/* Referrals Table */}
      <div className="bg-[#0d1410] border border-gray-800 rounded-xl overflow-hidden">
        <div className="border-b border-gray-800 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Seus Indicados</h2>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#ffffff] rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-400">Atualizado em tempo real</span>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800/50 border-b border-gray-800">
              <tr>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Indicado</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Data</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Vendas</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Nível</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Seus Ganhos</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {referrals.map((referral) => (
                <tr key={referral.id} className="hover:bg-gray-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-white font-semibold text-sm">{referral.name}</p>
                      <p className="text-gray-400 text-xs">{referral.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {referral.status === "active" ? (
                      <span className="inline-flex items-center gap-1.5 bg-[#ffffff]/10 text-[#ffffff] px-3 py-1 rounded-full text-xs font-semibold border border-[#ffffff]/30">
                        <div className="w-1.5 h-1.5 bg-[#ffffff] rounded-full"></div>
                        Ativo
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold border border-yellow-500/30">
                        <Clock className="w-3 h-3" />
                        Pendente
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-400 text-sm">
                      {new Date(referral.joinedAt).toLocaleDateString('pt-BR')}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-blue-400" />
                      <span className="text-white font-semibold">{referral.sales}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-white font-medium">{referral.level}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-[#ffffff] font-bold">
                      R$ {referral.earnings.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Reward Tiers */}
      <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <Gift className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Bônus por Indicação</h3>
            <p className="text-gray-300 text-sm mb-4">
              Ganhe comissões progressivas conforme seus indicados evoluem no ScaleHub
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-gray-400" />
              <span className="text-white font-semibold text-sm">Bronze</span>
            </div>
            <p className="text-[#ffffff] text-xl font-bold mb-1">5%</p>
            <p className="text-gray-400 text-xs">Por venda deles</p>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-gray-300" />
              <span className="text-white font-semibold text-sm">Prata</span>
            </div>
            <p className="text-[#ffffff] text-xl font-bold mb-1">7.5%</p>
            <p className="text-gray-400 text-xs">Por venda deles</p>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold text-sm">Ouro</span>
            </div>
            <p className="text-[#ffffff] text-xl font-bold mb-1">10%</p>
            <p className="text-gray-400 text-xs">Por venda deles</p>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-cyan-400" />
              <span className="text-white font-semibold text-sm">Diamante</span>
            </div>
            <p className="text-[#ffffff] text-xl font-bold mb-1">15%</p>
            <p className="text-gray-400 text-xs">Por venda deles</p>
          </div>
        </div>
      </div>
    </div>
  );
}
