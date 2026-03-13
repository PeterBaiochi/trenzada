import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router";
import {
  LayoutDashboard,
  Megaphone,
  Link2,
  Trophy,
  GraduationCap,
  Gift,
  ShieldCheck,
  Users,
  DollarSign,
  User,
  HelpCircle,
  FileText,
  Bell,
  LogOut,
  Mail,
  Wand2,
  Package,
  Share2,
  Menu,
  X,
  Diamond,
  Search,
  TrendingUp,
  Settings,
} from "lucide-react";
import { cn } from "../components/ui/utils";
import { GlobalSearch } from "./GlobalSearch";

const menuItems = [
  { path: "/", label: "Visão Geral", icon: LayoutDashboard },
  { path: "/meus-links", label: "Meus Links", icon: Link2 },
  { path: "/ranking-geral", label: "Ranking Geral", icon: Trophy },
  { path: "/academy", label: "Academy", icon: GraduationCap },
  { path: "/premiacoes", label: "Premiações", icon: Gift },
  { path: "/compliance", label: "Compliance", icon: ShieldCheck },
  { path: "/indicacoes", label: "Indicações", icon: Users },
  { path: "/financeiro", label: "Financeiro", icon: DollarSign },
  { path: "/copy-ia", label: "Copy com IA", icon: Wand2 },
  { path: "/suporte", label: "Suporte", icon: HelpCircle },
  { path: "/termos-de-uso", label: "Termos de Uso", icon: FileText },
];

const quickAccessItems = [
  { path: "/campanhas", label: "Campanhas", icon: Megaphone },
  { path: "/produtos", label: "Produtos", icon: Package },
  { path: "/email-marketing", label: "Email Marketing", icon: Mail },
  { path: "/divulgacao", label: "Materiais", icon: Share2 },
];

export function Layout() {
  const location = useLocation();
  const [isQuickMenuOpen, setIsQuickMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Ranking data
  const currentLevel = "Afiliado Prata";
  const nextLevel = "Afiliado Ouro";
  const currentSales = 67000;
  const requiredSales = 100000;
  const currentProgress = Math.round((currentSales / requiredSales) * 100); // Percentage

  return (
    <div className="flex h-screen bg-[#0a0f0d]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0d1410] border-r border-gray-800 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#ffffff] to-[#ffffff] rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-[#0d1410] rounded transform rotate-45"></div>
            </div>
            <span className="text-white text-xl font-bold">ScaleHub</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <div className="px-3 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                location.pathname === item.path ||
                (item.path === "/" && location.pathname === "/");

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-[#ffffff] text-black"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}

            {/* VIP Button - Special */}
            <Link
              to="/vip"
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all mt-2",
                location.pathname === "/vip"
                  ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black shadow-[0_0_20px_rgba(234,179,8,0.5)]"
                  : "bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-400 hover:from-yellow-500/30 hover:to-yellow-600/30 border border-yellow-500/30 shadow-[0_0_15px_rgba(234,179,8,0.2)] hover:shadow-[0_0_25px_rgba(234,179,8,0.4)]"
              )}
            >
              <Diamond className="w-4 h-4" />
              <span>Programa VIP</span>
            </Link>
          </div>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-800 space-y-2">
          <Link
            to="/meu-perfil"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800/50 transition-colors cursor-pointer"
          >
            <div className="w-8 h-8 bg-[#ffffff] rounded-full flex items-center justify-center">
              <span className="text-black text-xs font-bold">GB</span>
            </div>
            <div className="flex-1">
              <p className="text-white text-sm font-medium">Gabriel Baluchi</p>
              <p className="text-gray-400 text-xs">AFFILIATE</p>
            </div>
          </Link>

          <Link
            to="/admin"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-blue-400 hover:text-blue-300 hover:bg-gray-800/50 w-full transition-colors"
          >
            <Settings className="w-4 h-4" />
            <span>Painel Admin</span>
          </Link>

          <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-400 hover:text-red-300 hover:bg-gray-800/50 w-full transition-colors">
            <LogOut className="w-4 h-4" />
            <span>Sair</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-[#0d1410] border-b border-gray-800 px-6 py-4">
          <div className="flex items-center justify-between gap-6">
            {/* Ranking Progress Bar */}
            <div className="flex-1 max-w-2xl">
              <div className="bg-[#0a0f0d] border border-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(156,163,175,0.3)]">
                      <Trophy className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">{currentLevel}</p>
                      <p className="text-xs text-gray-400">
                        {currentSales.toLocaleString("pt-BR")} de {requiredSales.toLocaleString("pt-BR")} vendas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#ffffff]" />
                    <span className="text-xs font-medium text-gray-400">
                      Próximo: <span className="text-yellow-400 font-bold">{nextLevel}</span>
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#ffffff] to-[#ffffff] rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                    style={{ width: `${currentProgress}%` }}
                  />
                </div>

                {/* Progress Text */}
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-500">0</span>
                  <span className="text-xs font-bold text-[#ffffff]">{currentProgress}%</span>
                  <span className="text-xs text-gray-500">{requiredSales.toLocaleString("pt-BR")}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Search Button */}
              <div className="relative">
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2.5 bg-[#0a0f0d] border border-gray-800 rounded-lg text-gray-400 hover:text-[#ffffff] hover:border-[#ffffff]/50 transition-all"
                >
                  <Search className="w-5 h-5" />
                </button>

                {/* Search Dropdown */}
                {isSearchOpen && (
                  <div className="absolute right-0 mt-2 w-[500px] bg-[#0d1410] border-2 border-[#ffffff]/30 rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.2)] overflow-hidden z-50">
                    <div className="p-4">
                      <GlobalSearch />
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Access Menu */}
              <div className="relative">
                <button
                  onClick={() => setIsQuickMenuOpen(!isQuickMenuOpen)}
                  className="p-2.5 bg-[#0a0f0d] border border-gray-800 rounded-lg text-gray-400 hover:text-[#ffffff] hover:border-[#ffffff]/50 transition-all"
                >
                  {isQuickMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {isQuickMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-[#0d1410] border-2 border-[#ffffff]/30 rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.2)] overflow-hidden z-50">
                    <div className="p-3 border-b border-gray-800">
                      <p className="text-xs font-semibold text-gray-400">ACESSO RÁPIDO</p>
                    </div>
                    <div className="p-2">
                      {quickAccessItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;
                        return (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsQuickMenuOpen(false)}
                            className={cn(
                              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors mb-1",
                              isActive
                                ? "bg-[#ffffff] text-black"
                                : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                            )}
                          >
                            <Icon className="w-4 h-4" />
                            <span>{item.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              <button className="relative p-2.5 bg-[#0a0f0d] border border-gray-800 rounded-lg text-gray-400 hover:text-[#ffffff] hover:border-[#ffffff]/50 transition-all">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#ffffff] rounded-full"></span>
              </button>

              <div className="bg-[#0a0f0d] border border-gray-800 rounded-lg px-4 py-2">
                <p className="text-xs text-gray-400">SALDO ATUAL</p>
                <p className="text-sm font-bold text-[#ffffff]">R$ 0,00</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-[#0a0f0d] p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}