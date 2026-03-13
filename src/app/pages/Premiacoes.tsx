import {
  Trophy,
  Gift,
  Star,
  Crown,
  Award,
  Zap,
  Target,
  Calendar,
  CheckCircle2,
  Lock,
  TrendingUp,
} from "lucide-react";

export function Premiacoes() {
  const userRewards = {
    currentPoints: 2847,
    nextRewardPoints: 5000,
    totalRedeemed: 3,
    availableRewards: 12,
  };

  const availableRewards = [
    {
      id: "1",
      title: "Bônus de R$ 100",
      description: "Crédito direto na sua conta",
      points: 1000,
      available: true,
      icon: "dollar",
      category: "Financeiro",
    },
    {
      id: "2",
      title: "iPhone 15 Pro",
      description: "256GB - Todas as cores",
      points: 15000,
      available: false,
      icon: "gift",
      category: "Eletrônicos",
    },
    {
      id: "3",
      title: "Acesso VIP 3 meses",
      description: "Benefícios exclusivos",
      points: 3000,
      available: false,
      icon: "crown",
      category: "Benefícios",
    },
    {
      id: "4",
      title: "Curso Premium",
      description: "Academy completa",
      points: 2500,
      available: true,
      icon: "star",
      category: "Educação",
    },
    {
      id: "5",
      title: "MacBook Air M3",
      description: "13 polegadas",
      points: 25000,
      available: false,
      icon: "gift",
      category: "Eletrônicos",
    },
    {
      id: "6",
      title: "Mentoria 1-1",
      description: "2 horas com especialista",
      points: 5000,
      available: false,
      icon: "target",
      category: "Educação",
    },
  ];

  const achievements = [
    { id: "1", title: "Primeira Venda", completed: true, date: "2026-01-15" },
    { id: "2", title: "10 Vendas", completed: true, date: "2026-02-01" },
    { id: "3", title: "50 Vendas", completed: true, date: "2026-02-28" },
    { id: "4", title: "100 Vendas", completed: false },
    { id: "5", title: "Top 50 Ranking", completed: true, date: "2026-03-01" },
    { id: "6", title: "5 Indicações", completed: true, date: "2026-02-20" },
  ];

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "dollar": return <TrendingUp className="w-6 h-6" />;
      case "gift": return <Gift className="w-6 h-6" />;
      case "crown": return <Crown className="w-6 h-6" />;
      case "star": return <Star className="w-6 h-6" />;
      case "target": return <Target className="w-6 h-6" />;
      default: return <Award className="w-6 h-6" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">
          <span className="text-[#ffffff]">Premiações</span>
        </h1>
        <p className="text-gray-400">Troque seus pontos por prêmios incríveis e conquiste suas metas</p>
      </div>

      {/* Points Overview */}
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-6">
        <div className="flex items-start gap-6">
          <div className="w-20 h-20 bg-gradient-to-br from-[#ffffff] to-[#ffffff] rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            <Trophy className="w-10 h-10 text-black" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-2">Seus Pontos</h2>
            <p className="text-4xl font-bold text-[#ffffff] mb-4">{userRewards.currentPoints.toLocaleString('pt-BR')}</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Próxima recompensa em {userRewards.nextRewardPoints} pontos</span>
                <span className="text-[#ffffff] font-semibold">{Math.round((userRewards.currentPoints / userRewards.nextRewardPoints) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-[#ffffff] to-[#ffffff] h-full rounded-full"
                  style={{ width: `${Math.min((userRewards.currentPoints / userRewards.nextRewardPoints) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#0a0f0d] border border-gray-800 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-white mb-1">{userRewards.totalRedeemed}</p>
              <p className="text-xs text-gray-400">Resgates</p>
            </div>
            <div className="bg-[#0a0f0d] border border-gray-800 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-white mb-1">{userRewards.availableRewards}</p>
              <p className="text-xs text-gray-400">Disponíveis</p>
            </div>
          </div>
        </div>
      </div>

      {/* Earn Points */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4">Como Ganhar Pontos</h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-[#0d1410] border border-gray-800 rounded-xl p-5 hover:border-[#ffffff]/30 transition-all">
            <div className="w-12 h-12 bg-[#ffffff]/10 rounded-lg flex items-center justify-center mb-3">
              <Target className="w-6 h-6 text-[#ffffff]" />
            </div>
            <p className="text-white font-semibold mb-1">Vendas</p>
            <p className="text-2xl font-bold text-[#ffffff] mb-1">+10</p>
            <p className="text-xs text-gray-400">Por venda realizada</p>
          </div>

          <div className="bg-[#0d1410] border border-gray-800 rounded-xl p-5 hover:border-blue-500/30 transition-all">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-3">
              <Trophy className="w-6 h-6 text-blue-400" />
            </div>
            <p className="text-white font-semibold mb-1">Ranking</p>
            <p className="text-2xl font-bold text-blue-400 mb-1">+500</p>
            <p className="text-xs text-gray-400">Top 10 mensal</p>
          </div>

          <div className="bg-[#0d1410] border border-gray-800 rounded-xl p-5 hover:border-purple-500/30 transition-all">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-3">
              <Star className="w-6 h-6 text-purple-400" />
            </div>
            <p className="text-white font-semibold mb-1">Indicações</p>
            <p className="text-2xl font-bold text-purple-400 mb-1">+50</p>
            <p className="text-xs text-gray-400">Por indicado ativo</p>
          </div>

          <div className="bg-[#0d1410] border border-gray-800 rounded-xl p-5 hover:border-orange-500/30 transition-all">
            <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-3">
              <Zap className="w-6 h-6 text-orange-400" />
            </div>
            <p className="text-white font-semibold mb-1">Metas</p>
            <p className="text-2xl font-bold text-orange-400 mb-1">+100</p>
            <p className="text-xs text-gray-400">Por meta alcançada</p>
          </div>
        </div>
      </div>

      {/* Available Rewards */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4">Recompensas Disponíveis</h2>
        <div className="grid grid-cols-3 gap-4">
          {availableRewards.map((reward) => (
            <div
              key={reward.id}
              className={`bg-[#0d1410] border border-gray-800 rounded-xl overflow-hidden hover:border-[#ffffff]/30 transition-all ${!reward.available ? "opacity-60" : ""
                }`}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${reward.available ? "bg-[#ffffff]/10 text-[#ffffff]" : "bg-gray-800 text-gray-600"
                    }`}>
                    {getIconComponent(reward.icon)}
                  </div>
                  <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-400">
                    {reward.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{reward.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{reward.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-[#ffffff]" />
                    <span className="text-xl font-bold text-white">{reward.points.toLocaleString('pt-BR')}</span>
                  </div>
                  {reward.available ? (
                    <button className="bg-[#ffffff] hover:bg-[#ffffff] text-black px-4 py-2 rounded-lg text-sm font-semibold transition-all">
                      Resgatar
                    </button>
                  ) : (
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <Lock className="w-4 h-4" />
                      Bloqueado
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4">Conquistas</h2>
        <div className="bg-[#0d1410] border border-gray-800 rounded-xl p-6">
          <div className="grid grid-cols-3 gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`flex items-center gap-4 p-4 rounded-lg border transition-all ${achievement.completed
                    ? "bg-[#ffffff]/5 border-[#ffffff]/30"
                    : "bg-gray-800/30 border-gray-800"
                  }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${achievement.completed
                    ? "bg-[#ffffff] text-black"
                    : "bg-gray-800 text-gray-600"
                  }`}>
                  {achievement.completed ? (
                    <CheckCircle2 className="w-6 h-6" />
                  ) : (
                    <Lock className="w-6 h-6" />
                  )}
                </div>
                <div className="flex-1">
                  <p className={`font-semibold ${achievement.completed ? "text-white" : "text-gray-500"}`}>
                    {achievement.title}
                  </p>
                  {achievement.completed && achievement.date && (
                    <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(achievement.date).toLocaleDateString('pt-BR')}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
