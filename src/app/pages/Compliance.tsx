import {
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  FileText,
  Lock,
  Eye,
  Download,
  Clock,
  Info,
} from "lucide-react";

export function Compliance() {
  const complianceStatus = {
    documentsSubmitted: 3,
    documentsApproved: 2,
    documentsPending: 1,
    accountStatus: "verified",
  };

  const documents = [
    {
      id: "1",
      name: "Documento de Identidade (RG/CNH)",
      status: "approved",
      submittedAt: "2026-01-15",
      approvedAt: "2026-01-16",
    },
    {
      id: "2",
      name: "Comprovante de Residência",
      status: "approved",
      submittedAt: "2026-01-15",
      approvedAt: "2026-01-16",
    },
    {
      id: "3",
      name: "Termo de Adesão",
      status: "pending",
      submittedAt: "2026-03-10",
    },
    {
      id: "4",
      name: "Dados Bancários",
      status: "missing",
    },
  ];

  const guidelines = [
    {
      title: "Práticas Permitidas",
      icon: CheckCircle2,
      color: "green",
      items: [
        "Divulgação em redes sociais pessoais",
        "Criação de conteúdo educativo sobre produtos",
        "Compartilhamento de links em grupos permitidos",
        "Email marketing com base própria",
      ],
    },
    {
      title: "Práticas Proibidas",
      icon: AlertCircle,
      color: "red",
      items: [
        "Spam em qualquer plataforma",
        "Uso de informações falsas ou enganosas",
        "Compra de tráfego bot ou fake",
        "Violação de direitos autorais",
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">
          <span className="text-[#ffffff]">Compliance</span>
        </h1>
        <p className="text-gray-400">Mantenha sua conta em conformidade e segura</p>
      </div>

      {/* Account Status */}
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-6">
        <div className="flex items-start gap-6">
          <div className="w-20 h-20 bg-gradient-to-br from-[#ffffff] to-[#ffffff] rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            <ShieldCheck className="w-10 h-10 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold text-white">Status da Conta</h2>
              <span className="inline-flex items-center gap-1.5 bg-[#ffffff]/10 text-[#ffffff] px-3 py-1 rounded-full text-sm font-semibold border border-[#ffffff]/30">
                <CheckCircle2 className="w-4 h-4" />
                Verificada
              </span>
            </div>
            <p className="text-gray-400 mb-4">Sua conta está em total conformidade com nossas políticas</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#000000] border border-gray-800 rounded-lg p-4">
                <p className="text-gray-400 text-xs mb-1">DOCUMENTOS ENVIADOS</p>
                <p className="text-2xl font-bold text-white">{complianceStatus.documentsSubmitted}</p>
              </div>
              <div className="bg-[#000000] border border-gray-800 rounded-lg p-4">
                <p className="text-gray-400 text-xs mb-1">APROVADOS</p>
                <p className="text-2xl font-bold text-[#ffffff]">{complianceStatus.documentsApproved}</p>
              </div>
              <div className="bg-[#000000] border border-gray-800 rounded-lg p-4">
                <p className="text-gray-400 text-xs mb-1">PENDENTES</p>
                <p className="text-2xl font-bold text-yellow-400">{complianceStatus.documentsPending}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Documents */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4">Documentação</h2>
        <div className="bg-[#050505] border border-gray-800 rounded-xl overflow-hidden">
          <div className="divide-y divide-gray-800">
            {documents.map((doc) => (
              <div key={doc.id} className="p-6 hover:bg-gray-800/30 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${doc.status === "approved" ? "bg-[#ffffff]/10" :
                      doc.status === "pending" ? "bg-yellow-500/10" :
                        "bg-gray-800"
                    }`}>
                    {doc.status === "approved" ? (
                      <CheckCircle2 className="w-6 h-6 text-[#ffffff]" />
                    ) : doc.status === "pending" ? (
                      <Clock className="w-6 h-6 text-yellow-400" />
                    ) : (
                      <FileText className="w-6 h-6 text-gray-400" />
                    )}
                  </div>

                  <div className="flex-1">
                    <p className="text-white font-semibold mb-1">{doc.name}</p>
                    {doc.status === "approved" && doc.approvedAt && (
                      <p className="text-xs text-gray-400">
                        Aprovado em {new Date(doc.approvedAt).toLocaleDateString('pt-BR')}
                      </p>
                    )}
                    {doc.status === "pending" && doc.submittedAt && (
                      <p className="text-xs text-gray-400">
                        Enviado em {new Date(doc.submittedAt).toLocaleDateString('pt-BR')} - Em análise
                      </p>
                    )}
                    {doc.status === "missing" && (
                      <p className="text-xs text-gray-400">Documento não enviado</p>
                    )}
                  </div>

                  <div>
                    {doc.status === "approved" && (
                      <button className="flex items-center gap-2 text-[#ffffff] hover:text-[#ffffff] transition-colors">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm font-semibold">Visualizar</span>
                      </button>
                    )}
                    {doc.status === "pending" && (
                      <span className="inline-flex items-center gap-1.5 bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold">
                        Em análise
                      </span>
                    )}
                    {doc.status === "missing" && (
                      <button className="bg-[#ffffff] hover:bg-[#ffffff] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all">
                        Enviar
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Guidelines */}
      <div className="grid grid-cols-2 gap-4">
        {guidelines.map((guideline) => {
          const Icon = guideline.icon;
          return (
            <div
              key={guideline.title}
              className={`bg-[#050505] border rounded-xl p-6 ${guideline.color === "green" ? "border-[#ffffff]/30" : "border-red-500/30"
                }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${guideline.color === "green" ? "bg-[#ffffff]/10" : "bg-red-500/10"
                  }`}>
                  <Icon className={`w-6 h-6 ${guideline.color === "green" ? "text-[#ffffff]" : "text-red-400"
                    }`} />
                </div>
                <h3 className="text-lg font-bold text-white">{guideline.title}</h3>
              </div>
              <ul className="space-y-2">
                {guideline.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                    <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${guideline.color === "green" ? "bg-[#ffffff]" : "bg-red-400"
                      }`}></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Important Info */}
      <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <Info className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Informações Importantes</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>• A verificação de documentos pode levar até 48 horas úteis</li>
              <li>• Contas não verificadas têm limite de saque de R$ 1.000,00/mês</li>
              <li>• Violações das políticas podem resultar em suspensão da conta</li>
              <li>• Mantenha seus dados sempre atualizados</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Download Policies */}
      <div className="grid grid-cols-3 gap-4">
        <button className="bg-[#050505] border border-gray-800 rounded-xl p-5 hover:border-[#ffffff]/50 transition-all text-left group">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-[#ffffff]/10 rounded-lg flex items-center justify-center group-hover:bg-[#ffffff]/20 transition-colors">
              <Download className="w-5 h-5 text-[#ffffff]" />
            </div>
          </div>
          <p className="text-white font-semibold mb-1">Termos de Uso</p>
          <p className="text-gray-400 text-xs">Baixar PDF</p>
        </button>

        <button className="bg-[#050505] border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition-all text-left group">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
              <Download className="w-5 h-5 text-blue-400" />
            </div>
          </div>
          <p className="text-white font-semibold mb-1">Política de Privacidade</p>
          <p className="text-gray-400 text-xs">Baixar PDF</p>
        </button>

        <button className="bg-[#050505] border border-gray-800 rounded-xl p-5 hover:border-purple-500/50 transition-all text-left group">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
              <Download className="w-5 h-5 text-purple-400" />
            </div>
          </div>
          <p className="text-white font-semibold mb-1">Código de Conduta</p>
          <p className="text-gray-400 text-xs">Baixar PDF</p>
        </button>
      </div>
    </div>
  );
}
