import React, { useEffect, useState, useId } from 'react';

type MetricType = 'pipeline' | 'team' | 'deployment' | 'agnosticism' | 'continuity';

interface MetricItem {
  id: string;
  title: string;
  badge: string;
  primaryMetric: string;
  subValue: string;
  description: string;
  badgeColorClass: string;
  ariaLabel: string;
  type: MetricType;
  isWide?: boolean;
}

const metricsData: MetricItem[] = [
  {
    id: 'ux-pipeline',
    title: 'Procesamiento Feedback UX',
    badge: '-97.9% Tiempo',
    primaryMetric: '4h → 5m',
    subValue: '240 min a 5 min',
    description: 'Motor de análisis de sentimientos e IA para procesar comentarios de usuarios en tiempo récord.',
    badgeColorClass: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30',
    ariaLabel: 'Reducción en tiempo de procesamiento de feedback de UX de 4 horas a 5 minutos',
    type: 'pipeline',
  },
  {
    id: 'team-scaling',
    title: 'Democratización de QA',
    badge: '21x Cobertura',
    primaryMetric: '9 → 190',
    subValue: 'Escenarios E2E Core',
    description: 'Analistas funcionales automatizando pruebas sin código gracias a una arquitectura KDT robusta.',
    badgeColorClass: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30',
    ariaLabel: 'Incremento de cobertura de pruebas de 9 a 190 escenarios automatizados',
    type: 'team',
  },
  {
    id: 'deployment-speed',
    title: 'Aceleración de Pruebas APIs',
    badge: '3x Más Rápido',
    primaryMetric: '3 Años → 1 Año',
    subValue: 'Para alcanzar 90% de cobertura',
    description: 'Arquitectura de automatización (Java, Rest Assured, Serenity) con autogeneración de pruebas desde Swagger.',
    badgeColorClass: 'bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/30',
    ariaLabel: 'Reducción del tiempo estimado para alcanzar 90% de cobertura de pruebas de 3 años a 1 año',
    type: 'deployment',
  },
  {
    id: 'tech-agnosticism',
    title: 'Agnosticismo Tecnológico',
    badge: '0 Líneas Refactor',
    primaryMetric: '0',
    subValue: 'Playwright a Selenium',
    description: 'Implementación de un framework de pruebas que permite el agnoticismo de los scripts de pruebas y autosanación (self-healing) ante cambios del DOM.',
    badgeColorClass: 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/30',
    ariaLabel: 'Implementación de un framework de pruebas que permite el agnoticismo de los scripts de pruebas y autosanación (self-healing) ante cambios del DOM',
    type: 'agnosticism',
  },
  {
    id: 'hardware-continuity',
    title: 'Continuidad Operativa',
    badge: '100% Remoto',
    primaryMetric: '0',
    subValue: 'Dependencia de hardware',
    description: 'Simulación virtual de dispositivos biométricos que garantizó la continuidad del desarrollo de sistemas críticos durante la pandemia.',
    badgeColorClass: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30',
    ariaLabel: 'Cero dependencia de hardware físico mediante simulación virtual',
    type: 'continuity',
    isWide: true,
  },
];

function PipelineVisual({ isMounted }: { isMounted: boolean }) {
  return (
    <div className="w-full h-24 flex flex-col justify-center gap-2 py-1">
      <div className="flex justify-between text-xs font-mono opacity-80 mb-1">
        <span>Antes: 240m (4h)</span>
        <span>Ahora: 5m</span>
      </div>
      {/* Before bar */}
      <div className="w-full bg-surface-base/60 h-3 rounded-full overflow-hidden border border-border-hairline/40">
        <div className="bg-red-500/80 h-full rounded-full w-full transition-all duration-500" />
      </div>
      {/* After bar */}
      <div className="w-full bg-surface-base/60 h-3 rounded-full overflow-hidden border border-border-hairline/40 relative">
        <div
          className={`bg-emerald-500 h-full rounded-full transition-all duration-700 shadow-sm ${isMounted ? 'w-[2.1%] min-w-[12px]' : 'w-0'
            }`}
        />
      </div>
    </div>
  );
}

function TeamScalingVisual({ isMounted }: { isMounted: boolean }) {
  const gradientId = `team-curve-${useId().replace(/:/g, '')}`;
  return (
    <div className="w-full h-24 flex flex-col justify-end pt-2 pb-1 relative">
      <div className="flex justify-between items-end px-3 mb-1 z-10 text-xs font-mono relative">
        <div className="flex flex-col items-center">
          <span className="opacity-75">9 casos</span>
          <span className="text-[10px] opacity-60">Mes 1</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-accent">190 casos</span>
          <span className="text-[10px] font-medium opacity-90">Mes 6</span>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-2 h-16 px-6">
        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100" aria-hidden="true">
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 0 95 C 50 95, 70 60, 100 5 L 100 100 L 0 100 Z"
            fill={`url(#${gradientId})`}
            className={`transition-all duration-1000 ease-in-out motion-reduce:transition-none ${isMounted ? 'opacity-100' : 'opacity-0'}`}
          />
          <path
            d="M 0 95 C 50 95, 70 60, 100 5"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            className="text-indigo-600 dark:text-indigo-400 transition-all duration-1000 ease-in-out motion-reduce:transition-none"
            style={{ willChange: 'stroke-dashoffset' }}
            strokeDasharray="200"
            strokeDashoffset={isMounted ? "0" : "200"}
          />
        </svg>
      </div>
    </div>
  );
}

function DeploymentVisual({ isMounted }: { isMounted: boolean }) {
  return (
    <div className="w-full h-24 flex flex-col justify-center gap-3 py-1">
      <div className="space-y-1.5">
        <div className="flex justify-between text-xs font-mono opacity-80">
          <span>Proyección Tradicional</span>
          <span className="line-through opacity-60">3 años</span>
        </div>
        <div className="w-full bg-surface-base/60 h-2.5 rounded-full overflow-hidden border border-border-hairline/40">
          <div className="bg-sky-400/40 dark:bg-sky-500/40 h-full w-full" />
        </div>
      </div>
      <div className="space-y-1.5">
        <div className="flex justify-between text-xs font-mono font-semibold text-accent">
          <span>Con Framework propuesto</span>
          <span>1 año (90% Cob)</span>
        </div>
        <div className="w-full bg-surface-base/60 h-2.5 rounded-full overflow-hidden border border-border-hairline/40">
          <div
            className={`bg-accent h-full rounded-full transition-all duration-700 ${isMounted ? 'w-[33.3%]' : 'w-0'
              }`}
          />
        </div>
      </div>
    </div>
  );
}

function AgnosticismVisual({ isMounted }: { isMounted: boolean }) {
  return (
    <div className="w-full h-24 flex items-center justify-center relative">
      <svg className="w-full h-full" viewBox="0 0 200 100" aria-hidden="true">
        {/* Connection Lines */}
        <path
          d="M 40 55 Q 100 20, 160 55"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-border-hairline"
          strokeDasharray="4 4"
        />
        <path
          d="M 40 55 Q 100 20, 160 55"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-purple-500 transition-all duration-1000 ease-in-out motion-reduce:transition-none"
          style={{ willChange: 'stroke-dashoffset' }}
          strokeDasharray="200"
          strokeDashoffset={isMounted ? "0" : "200"}
        />

        {/* Playwright Node */}
        <circle cx="40" cy="55" r="14" className="fill-emerald-500/20 stroke-emerald-500" strokeWidth="2" />
        <text x="40" y="59" textAnchor="middle" className="text-[10px] font-mono font-bold fill-emerald-700 dark:fill-emerald-400">PW</text>

        {/* Selenium Node */}
        <circle cx="160" cy="55" r="14" className="fill-sky-500/20 stroke-sky-500" strokeWidth="2" />
        <text x="160" y="59" textAnchor="middle" className="text-[10px] font-mono font-bold fill-sky-700 dark:fill-sky-400">SE</text>

        {/* LLM Orchestrator Node */}
        <circle cx="100" cy="35" r="18" className="fill-purple-500/20 stroke-purple-500" strokeWidth="2" />
        <circle cx="100" cy="35" r="24" className={`fill-transparent stroke-purple-400 transition-all duration-1000 ${isMounted ? 'animate-pulse opacity-50' : 'opacity-0'}`} strokeWidth="1" />
        <text x="100" y="39" textAnchor="middle" className="text-[11px] font-bold font-mono fill-purple-700 dark:fill-purple-300">LLM</text>

        {/* Labels below */}
        <text x="40" y="85" textAnchor="middle" className="text-[9px] font-medium fill-emerald-700 dark:fill-emerald-400">Playwright</text>
        <text x="160" y="85" textAnchor="middle" className="text-[9px] font-medium fill-sky-700 dark:fill-sky-400">Selenium</text>
        <text x="100" y="70" textAnchor="middle" className="text-[10px] font-semibold fill-purple-600 dark:fill-purple-400">Self-Healing</text>
      </svg>
    </div>
  );
}

function HardwareToggleVisual({ isMounted }: { isMounted: boolean }) {
  return (
    <div className="w-full h-24 flex items-center justify-center relative">
      <div className="w-48 max-w-full h-12 bg-surface-sunken rounded-full p-1 relative shadow-inner border border-border-hairline flex items-center">
        {/* Toggle Background Active state */}
        <div
          className={`absolute inset-y-1 left-1 right-1 rounded-full transition-all duration-700 ease-in-out motion-reduce:transition-none ${isMounted ? 'bg-amber-500/10 dark:bg-amber-500/20' : 'bg-surface-elevated'}`}
        />

        {/* Switch Knob */}
        <div
          className={`absolute h-10 w-[calc(50%-4px)] bg-white dark:bg-surface-elevated rounded-full shadow-sm border border-border-hairline flex items-center justify-center transition-all duration-700 ease-in-out motion-reduce:transition-none ${isMounted ? 'left-1/2 border-amber-500/50' : 'left-1 border-border-hairline'
            }`}
        >
          {isMounted ? (
            <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
          )}
        </div>

        {/* Labels under the toggle */}
        <div className="absolute -bottom-6 w-full flex justify-between px-2 text-[10px] font-medium font-mono">
          <span className={`transition-opacity duration-500 motion-reduce:transition-none ${isMounted ? 'opacity-40' : 'opacity-100 text-text-ink'}`}>Físico</span>
          <span className={`transition-opacity duration-500 motion-reduce:transition-none ${isMounted ? 'opacity-100 text-amber-600 dark:text-amber-400' : 'opacity-40'}`}>Virtual</span>
        </div>
      </div>
    </div>
  );
}

export default function ImpactGrid() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        {metricsData.map((item) => (
          <div
            key={item.id}
            className={`group relative overflow-hidden rounded-2xl bg-surface-base border border-border-hairline p-5 lg:p-6 transition-all duration-300 hover:shadow-lg hover:shadow-surface-sunken hover:border-border-default ${item.isWide ? 'md:col-span-2' : ''
              }`}
          >
            <div>
              {/* Card Top Row: Header & Badge */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-semibold text-base text-text-ink group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <span
                  className={`text-xs px-2.5 py-1 rounded-full font-mono font-semibold whitespace-nowrap ${item.badgeColorClass}`}
                >
                  {item.badge}
                </span>
              </div>

              {/* Primary Metric Number */}
              <div className="mb-2" aria-label={item.ariaLabel}>
                <div className="text-2xl md:text-3xl font-extrabold font-mono tracking-tight text-text-ink">
                  {item.primaryMetric}
                </div>
                <div className="text-xs font-medium text-accent opacity-90 mt-0.5">
                  {item.subValue}
                </div>
              </div>

              {/* Interactive SVG Visualizer */}
              <div className="mb-4">
                {item.type === 'pipeline' && <PipelineVisual isMounted={isMounted} />}
                {item.type === 'team' && <TeamScalingVisual isMounted={isMounted} />}
                {item.type === 'deployment' && <DeploymentVisual isMounted={isMounted} />}
                {item.type === 'agnosticism' && <AgnosticismVisual isMounted={isMounted} />}
                {item.type === 'continuity' && <HardwareToggleVisual isMounted={isMounted} />}
              </div>
            </div>

            {/* Description Footer */}
            <p className="text-xs text-text-ink/80 leading-relaxed mt-2 pt-2 border-t border-border-hairline/20">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
