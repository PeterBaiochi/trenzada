import {
  FileText,
  Calendar,
  Shield,
  AlertCircle,
} from "lucide-react";

export function TermosDeUso() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start gap-6 mb-4">
          {/* Left side - Title and metadata */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">
                  Termos de Uso
                </h1>
                <p className="text-gray-400 mt-1">
                  ScaleHub - Plataforma de Afiliados
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>
                  Última atualização: 19 de fevereiro de 2026
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Versão 2.0</span>
              </div>
            </div>
          </div>

          {/* Right side - Alert */}
          <div className="w-96 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-yellow-500 font-semibold mb-1">
                  Importante
                </h3>
                <p className="text-sm text-gray-300">
                  Ao utilizar a plataforma ScaleHub, você concorda
                  com todos os termos e condições descritos neste
                  documento. Leia atentamente antes de prosseguir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content - Single Frame with Neon Green */}
      <div className="bg-[#050505] border-2 border-gray-600 rounded-xl p-8 shadow-[0_0_15px_rgba(156,163,175,0.25)] max-h-[600px] overflow-y-auto">
        <div className="space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-bold text-[#ffffff] mb-4">
              1. Aceitação dos Termos
            </h2>
            <div className="space-y-3 text-gray-300">
              <p>
                Ao acessar e usar a plataforma ScaleHub, você
                aceita e concorda em cumprir estes Termos de Uso e
                todas as leis e regulamentos aplicáveis. Se você
                não concordar com algum destes termos, está
                proibido de usar ou acessar este site.
              </p>
              <p>
                O uso contínuo da plataforma constitui aceitação
                de quaisquer alterações feitas a estes termos. É
                sua responsabilidade verificar periodicamente as
                atualizações.
              </p>
            </div>
          </section>

          <div className="border-t border-gray-700"></div>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-bold text-[#ffffff] mb-4">
              2. Cadastro e Conta
            </h2>
            <div className="space-y-3 text-gray-300">
              <p>
                Para utilizar os serviços da ScaleHub, você deve
                criar uma conta fornecendo informações precisas,
                completas e atualizadas. Você é responsável por:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  Manter a confidencialidade de suas credenciais
                  de acesso
                </li>
                <li>
                  Todas as atividades que ocorrem sob sua conta
                </li>
                <li>
                  Notificar imediatamente sobre qualquer uso não
                  autorizado
                </li>
                <li>
                  Garantir que você tem pelo menos 18 anos de
                  idade
                </li>
              </ul>
              <p className="mt-3">
                A ScaleHub reserva-se o direito de suspender ou
                encerrar contas que violem estes termos ou que
                apresentem informações falsas.
              </p>
            </div>
          </section>

          <div className="border-t border-gray-700"></div>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-bold text-[#ffffff] mb-4">
              3. Programa de Afiliados
            </h2>
            <div className="space-y-3 text-gray-300">
              <p>
                Como afiliado da ScaleHub, você concorda em
                promover nossos produtos e serviços de forma ética
                e transparente. Isso inclui:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  Não fazer declarações falsas ou enganosas sobre
                  produtos/serviços
                </li>
                <li>
                  Divulgar claramente sua relação como afiliado
                  quando apropriado
                </li>
                <li>
                  Não utilizar práticas de spam ou marketing
                  agressivo
                </li>
                <li>
                  Respeitar direitos autorais e propriedade
                  intelectual
                </li>
                <li>
                  Não criar contas falsas ou manipular métricas
                </li>
              </ul>
            </div>
          </section>

          <div className="border-t border-gray-700"></div>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-bold text-[#ffffff] mb-4">
              4. Comissões e Pagamentos
            </h2>
            <div className="space-y-3 text-gray-300">
              <p>
                As comissões são calculadas conforme especificado
                em cada campanha ou programa de afiliados. Você
                concorda que:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  Os pagamentos são processados de acordo com o
                  calendário estabelecido
                </li>
                <li>
                  Comissões podem ser retidas em caso de fraude ou
                  atividade suspeita
                </li>
                <li>
                  Valores mínimos para saque podem ser aplicados
                </li>
                <li>
                  A ScaleHub pode ajustar comissões mediante
                  notificação prévia
                </li>
                <li>
                  Estornos de vendas podem resultar em dedução de
                  comissões
                </li>
              </ul>
            </div>
          </section>

          <div className="border-t border-gray-700"></div>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-bold text-[#ffffff] mb-4">
              5. Propriedade Intelectual
            </h2>
            <div className="space-y-3 text-gray-300">
              <p>
                Todo o conteúdo da plataforma ScaleHub, incluindo
                mas não limitado a textos, gráficos, logos,
                ícones, imagens, vídeos e software, é propriedade
                da ScaleHub ou de seus fornecedores de conteúdo e
                está protegido por leis de direitos autorais.
              </p>
              <p>
                Você recebe uma licença limitada, não exclusiva e
                intransferível para acessar e usar materiais de
                marketing fornecidos, exclusivamente para fins de
                promoção como afiliado.
              </p>
            </div>
          </section>

          <div className="border-t border-gray-700"></div>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-bold text-[#ffffff] mb-4">
              6. Privacidade e Proteção de Dados
            </h2>
            <div className="space-y-3 text-gray-300">
              <p>
                A ScaleHub se compromete a proteger sua
                privacidade e dados pessoais conforme nossa
                Política de Privacidade e em conformidade com a
                Lei Geral de Proteção de Dados (LGPD).
              </p>
              <p>
                Você concorda em não compartilhar, vender ou
                divulgar informações de clientes ou outros
                afiliados obtidas através da plataforma.
              </p>
            </div>
          </section>

          <div className="border-t border-gray-700"></div>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-bold text-[#ffffff] mb-4">
              7. Limitação de Responsabilidade
            </h2>
            <div className="space-y-3 text-gray-300">
              <p>
                A plataforma é fornecida "como está" e "conforme
                disponível". A ScaleHub não garante que o serviço
                será ininterrupto, seguro ou livre de erros.
              </p>
              <p>
                Em nenhuma circunstância a ScaleHub será
                responsável por danos indiretos, incidentais,
                especiais, consequenciais ou punitivos, incluindo
                perda de lucros, dados ou outras perdas
                intangíveis.
              </p>
            </div>
          </section>

          <div className="border-t border-gray-700"></div>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-bold text-[#ffffff] mb-4">
              8. Rescisão
            </h2>
            <div className="space-y-3 text-gray-300">
              <p>
                A ScaleHub pode suspender ou encerrar seu acesso à
                plataforma a qualquer momento, sem aviso prévio,
                por violação destes termos ou por qualquer outro
                motivo, a nosso exclusivo critério.
              </p>
              <p>
                Você também pode encerrar sua conta a qualquer
                momento através das configurações da plataforma ou
                entrando em contato com nosso suporte.
              </p>
            </div>
          </section>

          <div className="border-t border-gray-700"></div>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-bold text-[#ffffff] mb-4">
              9. Modificações dos Termos
            </h2>
            <div className="space-y-3 text-gray-300">
              <p>
                A ScaleHub reserva-se o direito de modificar ou
                substituir estes Termos de Uso a qualquer momento.
                As alterações materiais serão notificadas com pelo
                menos 30 dias de antecedência.
              </p>
              <p>
                Ao continuar a acessar ou usar a plataforma após
                as alterações entrarem em vigor, você concorda em
                ficar vinculado aos termos revisados.
              </p>
            </div>
          </section>

          <div className="border-t border-gray-700"></div>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-bold text-[#ffffff] mb-4">
              10. Lei Aplicável
            </h2>
            <div className="space-y-3 text-gray-300">
              <p>
                Estes Termos de Uso são regidos e interpretados de
                acordo com as leis do Brasil. Qualquer disputa
                relacionada a estes termos estará sujeita à
                jurisdição exclusiva dos tribunais brasileiros.
              </p>
            </div>
          </section>

          <div className="border-t border-gray-700"></div>

          {/* Section 11 */}
          <section>
            <h2 className="text-xl font-bold text-[#ffffff] mb-4">
              11. Contato
            </h2>
            <div className="space-y-3 text-gray-300">
              <p>
                Se você tiver dúvidas sobre estes Termos de Uso,
                entre em contato conosco:
              </p>
              <div className="bg-[#000000]/50 border border-[#ffffff]/20 rounded-lg p-4 mt-3">
                <p>
                  <strong className="text-[#ffffff]">Email:</strong>{" "}
                  legal@scalehub.com.br
                </p>
                <p className="mt-2">
                  <strong className="text-[#ffffff]">Suporte:</strong>{" "}
                  suporte@scalehub.com.br
                </p>
                <p className="mt-2">
                  <strong className="text-[#ffffff]">
                    Telefone:
                  </strong>{" "}
                  +55 (11) 1234-5678
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 p-6 bg-[#050505] border-2 border-[#ffffff]/30 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.1)]">
        <p className="text-sm text-gray-400 text-center">
          Ao usar a plataforma ScaleHub, você reconhece que leu,
          entendeu e concorda em estar vinculado a estes Termos
          de Uso.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <button className="px-6 py-2 bg-gray-800 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors shadow-[0_0_12px_rgba(156,163,175,0.35)]">
            Aceitar Termos
          </button>
          <button className="px-6 py-2 bg-gray-800 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors">
            Baixar PDF
          </button>
        </div>
      </div>
    </div>
  );
}
