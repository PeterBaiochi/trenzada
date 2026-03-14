import {
  GraduationCap,
  Play,
  Clock,
  CheckCircle2,
  Lock,
  Star,
  TrendingUp,
  Award,
  BookOpen,
  Video,
  FileText,
  Target,
  Zap,
} from "lucide-react";

export function Academy() {
  const courses = [
    {
      id: "1",
      title: "Fundamentos do Marketing de Afiliados",
      description: "Aprenda os conceitos básicos e estratégias iniciais para começar a vender",
      duration: "2h 30min",
      lessons: 12,
      progress: 100,
      thumbnail: "gradient-purple",
      level: "Iniciante",
      completed: true,
    },
    {
      id: "2",
      title: "Copywriting para Conversão",
      description: "Técnicas avançadas de escrita persuasiva para aumentar suas vendas",
      duration: "3h 15min",
      lessons: 18,
      progress: 65,
      thumbnail: "gradient-blue",
      level: "Intermediário",
      completed: false,
    },
    {
      id: "3",
      title: "Estratégias de Tráfego Pago",
      description: "Domine Facebook Ads, Google Ads e outras plataformas de anúncios",
      duration: "4h 00min",
      lessons: 24,
      progress: 30,
      thumbnail: "gradient-green",
      level: "Avançado",
      completed: false,
    },
    {
      id: "4",
      title: "Marketing de Influência",
      description: "Como construir autoridade e aumentar seu alcance nas redes sociais",
      duration: "2h 45min",
      lessons: 15,
      progress: 0,
      thumbnail: "gradient-orange",
      level: "Intermediário",
      completed: false,
    },
    {
      id: "5",
      title: "Análise de Métricas e ROI",
      description: "Aprenda a interpretar dados e otimizar suas campanhas",
      duration: "3h 30min",
      lessons: 20,
      progress: 0,
      thumbnail: "gradient-pink",
      level: "Avançado",
      completed: false,
      locked: true,
    },
    {
      id: "6",
      title: "Funis de Vendas de Alta Conversão",
      description: "Construa funis que transformam visitantes em clientes",
      duration: "5h 00min",
      lessons: 28,
      progress: 0,
      thumbnail: "gradient-teal",
      level: "Avançado",
      completed: false,
      locked: true,
    },
  ];

  const stats = {
    coursesCompleted: courses.filter(c => c.completed).length,
    totalCourses: courses.length,
    hoursWatched: 12.5,
    certificates: 1,
  };

  const getThumbnailGradient = (color: string) => {
    switch (color) {
      case "gradient-purple":
        return "from-purple-500 to-pink-500";
      case "gradient-blue":
        return "from-blue-500 to-cyan-500";
      case "gradient-green":
        return "from-[#ffffff] to-[#ffffff]";
      case "gradient-orange":
        return "from-orange-500 to-red-500";
      case "gradient-pink":
        return "from-pink-500 to-rose-500";
      case "gradient-teal":
        return "from-teal-500 to-emerald-500";
      default:
        return "from-gray-500 to-gray-700";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">
          Scale<span className="text-[#ffffff]">Hub</span> Academy
        </h1>
        <p className="text-gray-400">Aprenda, evolua e maximize seus resultados como afiliado</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-[#050505] border border-gray-800 rounded-xl p-6 hover:border-[#ffffff]/30 transition-all">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-[#ffffff]/10 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-[#ffffff]" />
            </div>
            <div>
              <p className="text-gray-400 text-xs font-medium">CURSOS CONCLUÍDOS</p>
              <p className="text-2xl font-bold text-white">{stats.coursesCompleted}/{stats.totalCourses}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#050505] border border-gray-800 rounded-xl p-6 hover:border-blue-500/30 transition-all">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <p className="text-gray-400 text-xs font-medium">HORAS ASSISTIDAS</p>
              <p className="text-2xl font-bold text-white">{stats.hoursWatched}h</p>
            </div>
          </div>
        </div>

        <div className="bg-[#050505] border border-gray-800 rounded-xl p-6 hover:border-purple-500/30 transition-all">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <p className="text-gray-400 text-xs font-medium">CERTIFICADOS</p>
              <p className="text-2xl font-bold text-white">{stats.certificates}</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#ffffff]/10 to-[#ffffff]/5 border border-[#ffffff]/30 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-[#ffffff]/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-[#ffffff]" />
            </div>
            <div>
              <p className="text-gray-400 text-xs font-medium">PROGRESSO GERAL</p>
              <p className="text-2xl font-bold text-white">32%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Continue Watching */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4">Continue Assistindo</h2>
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-[#ffffff]/30 transition-all group">
          <div className="flex items-start gap-6">
            <div className="relative">
              <div className={`w-48 h-28 bg-gradient-to-br ${getThumbnailGradient("gradient-blue")} rounded-lg flex items-center justify-center`}>
                <div className="w-12 h-12 bg-[#000000]/40 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[#000000]/60 transition-all">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-[#000000]/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-white font-semibold">
                3h 15min
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs font-semibold">INTERMEDIÁRIO</span>
                <span className="text-gray-400 text-sm">18 aulas</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Copywriting para Conversão</h3>
              <p className="text-gray-400 text-sm mb-4">Técnicas avançadas de escrita persuasiva para aumentar suas vendas</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Progresso</span>
                  <span className="text-[#ffffff] font-semibold">65%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-gradient-to-r from-[#ffffff] to-[#ffffff] h-full rounded-full" style={{ width: "65%" }}></div>
                </div>
              </div>
            </div>
            <button className="bg-[#ffffff] hover:bg-[#ffffff] text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              <Play className="w-5 h-5" />
              Continuar
            </button>
          </div>
        </div>
      </div>

      {/* All Courses */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">Todos os Cursos</h2>
          <div className="flex items-center gap-2">
            <button className="bg-[#050505] border border-gray-800 rounded-lg px-4 py-2 text-sm text-gray-400 hover:text-white hover:border-gray-700 transition-all">
              Todos
            </button>
            <button className="bg-[#050505] border border-gray-800 rounded-lg px-4 py-2 text-sm text-gray-400 hover:text-white hover:border-gray-700 transition-all">
              Iniciante
            </button>
            <button className="bg-[#050505] border border-gray-800 rounded-lg px-4 py-2 text-sm text-gray-400 hover:text-white hover:border-gray-700 transition-all">
              Intermediário
            </button>
            <button className="bg-[#050505] border border-gray-800 rounded-lg px-4 py-2 text-sm text-gray-400 hover:text-white hover:border-gray-700 transition-all">
              Avançado
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`bg-[#050505] border border-gray-800 rounded-xl overflow-hidden hover:border-[#ffffff]/30 transition-all group ${course.locked ? "opacity-60" : ""
                }`}
            >
              {/* Thumbnail */}
              <div className="relative">
                <div className={`h-40 bg-gradient-to-br ${getThumbnailGradient(course.thumbnail)} flex items-center justify-center`}>
                  {course.locked ? (
                    <div className="w-16 h-16 bg-[#000000]/40 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Lock className="w-8 h-8 text-white" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-[#000000]/40 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[#000000]/60 transition-all">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  )}
                </div>
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${course.level === "Iniciante" ? "bg-[#121214]/20 text-white" :
                      course.level === "Intermediário" ? "bg-blue-500/20 text-blue-400" :
                        "bg-purple-500/20 text-purple-400"
                    }`}>
                    {course.level}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 bg-[#000000]/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-white font-semibold flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {course.duration}
                </div>
                {course.completed && (
                  <div className="absolute top-3 right-3 w-8 h-8 bg-[#ffffff] rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2">{course.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{course.description}</p>

                <div className="flex items-center gap-4 mb-4 text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <Video className="w-4 h-4" />
                    <span>{course.lessons} aulas</span>
                  </div>
                </div>

                {!course.locked && course.progress > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Progresso</span>
                      <span className="text-[#ffffff] font-semibold">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-1.5">
                      <div
                        className="bg-gradient-to-r from-[#ffffff] to-[#ffffff] h-full rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {course.locked && (
                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-400">Disponível em breve</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <Zap className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Acelere seu Aprendizado</h3>
            <p className="text-gray-300 text-sm mb-3">
              Complete os cursos e implemente as estratégias aprendidas para ver resultados reais. Cada certificado conquistado te aproxima do próximo nível!
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Star className="w-4 h-4 text-yellow-400" />
                Novos cursos toda semana
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Target className="w-4 h-4 text-[#ffffff]" />
                Conteúdo atualizado
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
