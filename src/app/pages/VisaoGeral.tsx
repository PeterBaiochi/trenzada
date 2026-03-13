import { 
  Heart, 
  AlertCircle, 
  TrendingUp, 
  DollarSign, 
  MousePointer, 
  Users, 
  Target,
  Zap,
  Award,
  ArrowUpRight,
  Clock,
  CheckCircle2,
} from "lucide-react";

export function VisaoGeral() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Estatísticas <span className="text-[#ffffff]">Ao Vivo</span>
          </h1>
          <p className="text-gray-400">Bem-vindo de volta, Gabriel 👋</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-[#0d1410] border border-gray-800 rounded-lg px-4 py-2 flex items-center gap-2">
            <div className="w-2 h-2 bg-[#ffffff] rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-400">Atualizado agora</span>
          </div>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-4 gap-4">
        {/* Card 1: Saldo */}
        <div className="bg-gradient-to-br from-[#ffffff]/10 to-[#ffffff]/5 border border-[#ffffff]/30 rounded-xl p-6 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffffff]/5 rounded-full blur-3xl"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-[#ffffff]/20 rounded-lg flex items-center justify-center group-hover:bg-[#ffffff]/30 transition-colors">
                <DollarSign className="w-6 h-6 text-[#ffffff]" />
              </div>
              <span className="text-[#ffffff] text-xs font-semibold bg-[#ffffff]/10 px-2 py-1 rounded">DISPONÍVEL</span>
            </div>
            <p className="text-gray-400 text-xs font-medium mb-1">Saldo Atual</p>
            <p className="text-3xl font-bold text-white mb-1">R$ 2.847,50</p>
            <div className="flex items-center gap-1 text-xs text-[#ffffff]">
              <TrendingUp className="w-3 h-3" />
              <span>+15% este mês</span>
            </div>
          </div>
        </div>

        {/* Card 2: Vendas */}
        <div className="bg-[#0d1410] border border-gray-800 rounded-xl p-6 relative overflow-hidden group hover:border-[#ffffff]/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all">
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                <Target className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-blue-400 text-xs font-semibold bg-blue-500/10 px-2 py-1 rounded">VENDAS</span>
            </div>
            <p className="text-gray-400 text-xs font-medium mb-1">Total do Mês</p>
            <p className="text-3xl font-bold text-white mb-1">127</p>
            <div className="flex items-center gap-1 text-xs text-blue-400">
              <ArrowUpRight className="w-3 h-3" />
              <span>+23 hoje</span>
            </div>
          </div>
        </div>

        {/* Card 3: Cliques */}
        <div className="bg-[#0d1410] border border-gray-800 rounded-xl p-6 relative overflow-hidden group hover:border-purple-500/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)] transition-all">
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                <MousePointer className="w-6 h-6 text-purple-400" />
              </div>
              <span className="text-purple-400 text-xs font-semibold bg-purple-500/10 px-2 py-1 rounded">TRÁFEGO</span>
            </div>
            <p className="text-gray-400 text-xs font-medium mb-1">Cliques Únicos</p>
            <p className="text-3xl font-bold text-white mb-1">3.542</p>
            <div className="flex items-center gap-1 text-xs text-purple-400">
              <TrendingUp className="w-3 h-3" />
              <span>Taxa: 3.6%</span>
            </div>
          </div>
        </div>

        {/* Card 4: Indicações */}
        <div className="bg-[#0d1410] border border-gray-800 rounded-xl p-6 relative overflow-hidden group hover:border-orange-500/30 hover:shadow-[0_0_20px_rgba(249,115,22,0.1)] transition-all">
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                <Users className="w-6 h-6 text-orange-400" />
              </div>
              <span className="text-orange-400 text-xs font-semibold bg-orange-500/10 px-2 py-1 rounded">REDE</span>
            </div>
            <p className="text-gray-400 text-xs font-medium mb-1">Indicações Ativas</p>
            <p className="text-3xl font-bold text-white mb-1">48</p>
            <div className="flex items-center gap-1 text-xs text-orange-400">
              <Zap className="w-3 h-3" />
              <span>+7 esta semana</span>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Card */}
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffffff]/5 rounded-full blur-3xl"></div>
        <div className="relative flex items-start gap-6">
          <div className="w-16 h-16 bg-gradient-to-br from-[#ffffff] to-[#ffffff] rounded-xl flex items-center justify-center flex-shrink-0 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            <Heart className="w-8 h-8 text-black" />
          </div>
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-[#ffffff]/20 text-[#ffffff] text-xs font-semibold px-3 py-1.5 rounded-full mb-4 border border-[#ffffff]/30">
              <Award className="w-3.5 h-3.5" />
              PARCERIA OFICIAL
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">
              Bem-vindo à Era da <span className="text-[#ffffff]">Alta Performance</span>
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-3xl mb-3">
              Agradecemos profundamente a sua confiança em nossa plataforma. Estamos
              construindo algo grandioso, e você faz parte dessa jornada. Nosso compromisso é
              claro: oferecer as melhores condições do mercado, tecnologia de ponta e total
              transparência.
            </p>
            <p className="text-gray-300 leading-relaxed max-w-3xl">
              O seu sucesso é o nosso sucesso. Influenciadores, agenciadores e parceiros,
              juntos vamos quebrar recordes. Conte com novidades em breve e saiba que aqui
              jogamos juntos, alinhados ao princípio de que{" "}
              <span className="text-[#ffffff] font-semibold">
                "o certo pelo certo sempre"
              </span>
              .
            </p>
          </div>
          <div className="text-center">
            <div className="bg-[#0a0f0d] border border-gray-800 rounded-xl px-6 py-4 shadow-lg">
              <div className="flex items-center justify-center gap-2 text-[#ffffff] mb-2">
                <Heart className="w-5 h-5" />
                <span className="text-xs font-semibold tracking-wider">JUNTOS SOMOS</span>
              </div>
              <p className="text-3xl font-bold text-white">Imparáveis</p>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="grid grid-cols-3 gap-4">
        {/* Nível Atual */}
        <div className="bg-[#0d1410] border border-gray-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(156,163,175,0.3)]">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-xs font-medium">NÍVEL ATUAL</p>
              <p className="text-xl font-bold text-white">Bronze</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">Progresso para Prata</span>
              <span className="text-[#ffffff] font-semibold">15%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-[#ffffff] to-[#ffffff] h-full rounded-full" style={{ width: "15%" }}></div>
            </div>
            <p className="text-xs text-gray-400">R$ 15.000 de R$ 100.000</p>
          </div>
        </div>

        {/* Saldo Pendente */}
        <div className="bg-[#0d1410] border border-gray-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-yellow-400" />
            </div>
            <div>
              <p className="text-gray-400 text-xs font-medium">SALDO PENDENTE</p>
              <p className="text-xl font-bold text-white">R$ 1.254,30</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-gray-400">
              Será liberado em <span className="text-yellow-400 font-semibold">3 dias úteis</span>
            </p>
          </div>
        </div>

        {/* Meta do Mês */}
        <div className="bg-[#0d1410] border border-gray-800 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#ffffff]/10 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-[#ffffff]" />
            </div>
            <div>
              <p className="text-gray-400 text-xs font-medium">META DO MÊS</p>
              <p className="text-xl font-bold text-[#ffffff]">R$ 10.000</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">Alcançado</span>
              <span className="text-[#ffffff] font-semibold">28.5%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-[#ffffff] to-[#ffffff] h-full rounded-full" style={{ width: "28.5%" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-4 gap-4">
        <button className="bg-[#0d1410] border border-gray-800 rounded-xl p-4 hover:border-[#ffffff]/50 hover:bg-[#ffffff]/5 transition-all group text-left">
          <div className="w-10 h-10 bg-[#ffffff]/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#ffffff]/20 transition-colors">
            <Target className="w-5 h-5 text-[#ffffff]" />
          </div>
          <p className="text-white font-semibold text-sm mb-1">Ver Campanhas</p>
          <p className="text-gray-400 text-xs">Acesse materiais promocionais</p>
        </button>

        <button className="bg-[#0d1410] border border-gray-800 rounded-xl p-4 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group text-left">
          <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-500/20 transition-colors">
            <Users className="w-5 h-5 text-blue-400" />
          </div>
          <p className="text-white font-semibold text-sm mb-1">Minhas Indicações</p>
          <p className="text-gray-400 text-xs">Gerencie sua rede</p>
        </button>

        <button className="bg-[#0d1410] border border-gray-800 rounded-xl p-4 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all group text-left">
          <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-purple-500/20 transition-colors">
            <DollarSign className="w-5 h-5 text-purple-400" />
          </div>
          <p className="text-white font-semibold text-sm mb-1">Financeiro</p>
          <p className="text-gray-400 text-xs">Histórico e saques</p>
        </button>

        <button className="bg-[#0d1410] border border-gray-800 rounded-xl p-4 hover:border-orange-500/50 hover:bg-orange-500/5 transition-all group text-left">
          <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-orange-500/20 transition-colors">
            <CheckCircle2 className="w-5 h-5 text-orange-400" />
          </div>
          <p className="text-white font-semibold text-sm mb-1">Academy</p>
          <p className="text-gray-400 text-xs">Aprenda e evolua</p>
        </button>
      </div>

      {/* Alert */}
      <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-5">
        <div className="flex gap-4">
          <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <AlertCircle className="w-5 h-5 text-yellow-400" />
          </div>
          <div>
            <p className="text-sm font-semibold text-yellow-300 mb-1">Atenção: Horário de Atualização</p>
            <p className="text-sm text-yellow-200/80">
              O dashboard é atualizado a cada 24h de segunda a sexta-feira. Finais de semana não há atualizações automáticas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}