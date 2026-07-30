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
    description:
      'Motor de análisis de sentimientos e IA para procesar comentarios de usuarios en tiempo récord.',
    badgeColorClass:
      'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30',
    ariaLabel: 'Reducción en tiempo de procesamiento de feedback de UX de 4 horas a 5 minutos',
    type: 'pipeline',
  },
  {
    id: 'team-scaling',
    title: 'Democratización de QA',
    badge: '21x Cobertura',
    primaryMetric: '9 → 190',
    subValue: 'Escenarios E2E Core',
    description:
      'Analistas funcionales automatizando pruebas sin código gracias a una arquitectura KDT robusta.',
    badgeColorClass:
      'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30',
    ariaLabel: 'Incremento de cobertura de pruebas de 9 a 190 escenarios automatizados',
    type: 'team',
  },
  {
    id: 'deployment-speed',
    title: 'Aceleración de Pruebas APIs',
    badge: '3x Más Rápido',
    primaryMetric: '3 Años → 1 Año',
    subValue: 'Para alcanzar 90% de cobertura',
    description:
      'Arquitectura de automatización (Java, Rest Assured, Serenity) con autogeneración de pruebas desde Swagger.',
    badgeColorClass: 'bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/30',
    ariaLabel:
      'Reducción del tiempo estimado para alcanzar 90% de cobertura de pruebas de 3 años a 1 año',
    type: 'deployment',
  },
  {
    id: 'tech-agnosticism',
    title: 'Agnosticismo Tecnológico',
    badge: '0 Líneas Refactor',
    primaryMetric: '0',
    subValue: 'Playwright a Selenium',
    description:
      'Implementación de un framework de pruebas que permite el agnoticismo de los scripts de pruebas y autosanación (self-healing) ante cambios del DOM.',
    badgeColorClass:
      'bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/30',
    ariaLabel:
      'Implementación de un framework de pruebas que permite el agnoticismo de los scripts de pruebas y autosanación (self-healing) ante cambios del DOM',
    type: 'agnosticism',
  },
  {
    id: 'hardware-continuity',
    title: 'Continuidad Operativa',
    badge: '100% Remoto',
    primaryMetric: '0',
    subValue: 'Dependencia de hardware',
    description:
      'Simulación virtual de dispositivos biométricos que garantizó la continuidad del desarrollo de sistemas críticos durante la pandemia.',
    badgeColorClass:
      'bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30',
    ariaLabel: 'Cero dependencia de hardware físico mediante simulación virtual',
    type: 'continuity',
    isWide: true,
  },
];

function PipelineVisual({ isMounted }: { isMounted: boolean }) {
  return (
    <div className="flex h-24 w-full flex-col justify-center gap-2 py-1">
      <div className="mb-1 flex justify-between font-mono text-xs opacity-80">
        <span>Antes: 240m (4h)</span>
        <span>Ahora: 5m</span>
      </div>
      {/* Before bar */}
      <div className="bg-surface-base/60 border-border-hairline/40 h-3 w-full overflow-hidden rounded-full border">
        <div className="h-full w-full rounded-full bg-red-500/80 transition-all duration-500" />
      </div>
      {/* After bar */}
      <div className="bg-surface-base/60 border-border-hairline/40 relative h-3 w-full overflow-hidden rounded-full border">
        <div
          className={`h-full rounded-full bg-emerald-500 shadow-sm transition-all duration-700 ${
            isMounted ? 'w-[2.1%] min-w-[12px]' : 'w-0'
          }`}
        />
      </div>
    </div>
  );
}

function TeamScalingVisual({ isMounted }: { isMounted: boolean }) {
  const gradientId = `team-curve-${useId().replace(/:/g, '')}`;
  return (
    <div className="relative flex h-24 w-full flex-col justify-end pb-1 pt-2">
      <div className="relative z-10 mb-1 flex items-end justify-between px-3 font-mono text-xs">
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
        <svg
          className="h-full w-full overflow-visible"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
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
            className="text-indigo-600 transition-all duration-1000 ease-in-out motion-reduce:transition-none dark:text-indigo-400"
            style={{ willChange: 'stroke-dashoffset' }}
            strokeDasharray="200"
            strokeDashoffset={isMounted ? '0' : '200'}
          />
        </svg>
      </div>
    </div>
  );
}

function DeploymentVisual({ isMounted }: { isMounted: boolean }) {
  return (
    <div className="flex h-24 w-full flex-col justify-center gap-3 py-1">
      <div className="space-y-1.5">
        <div className="flex justify-between font-mono text-xs opacity-80">
          <span>Proyección Tradicional</span>
          <span className="line-through opacity-60">3 años</span>
        </div>
        <div className="bg-surface-base/60 border-border-hairline/40 h-2.5 w-full overflow-hidden rounded-full border">
          <div className="h-full w-full bg-sky-400/40 dark:bg-sky-500/40" />
        </div>
      </div>
      <div className="space-y-1.5">
        <div className="flex justify-between font-mono text-xs font-semibold text-accent">
          <span>Con Framework propuesto</span>
          <span>1 año (90% Cob)</span>
        </div>
        <div className="bg-surface-base/60 border-border-hairline/40 h-2.5 w-full overflow-hidden rounded-full border">
          <div
            className={`h-full rounded-full bg-accent transition-all duration-700 ${
              isMounted ? 'w-[33.3%]' : 'w-0'
            }`}
          />
        </div>
      </div>
    </div>
  );
}

function AgnosticismVisual({ isMounted }: { isMounted: boolean }) {
  return (
    <div className="relative flex h-24 w-full items-center justify-center">
      <svg className="h-full w-full" viewBox="0 0 200 100" aria-hidden="true">
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
          strokeDashoffset={isMounted ? '0' : '200'}
        />

        {/* Playwright Node */}
        <circle
          cx="40"
          cy="55"
          r="14"
          className="fill-emerald-500/20 stroke-emerald-500"
          strokeWidth="2"
        />
        <text
          x="40"
          y="59"
          textAnchor="middle"
          className="fill-emerald-700 font-mono text-[10px] font-bold dark:fill-emerald-400"
        >
          PW
        </text>

        {/* Selenium Node */}
        <circle
          cx="160"
          cy="55"
          r="14"
          className="fill-sky-500/20 stroke-sky-500"
          strokeWidth="2"
        />
        <text
          x="160"
          y="59"
          textAnchor="middle"
          className="fill-sky-700 font-mono text-[10px] font-bold dark:fill-sky-400"
        >
          SE
        </text>

        {/* LLM Orchestrator Node */}
        <circle
          cx="100"
          cy="35"
          r="18"
          className="fill-purple-500/20 stroke-purple-500"
          strokeWidth="2"
        />
        <circle
          cx="100"
          cy="35"
          r="24"
          className={`fill-transparent stroke-purple-400 transition-all duration-1000 ${isMounted ? 'animate-pulse opacity-50' : 'opacity-0'}`}
          strokeWidth="1"
        />
        <text
          x="100"
          y="39"
          textAnchor="middle"
          className="fill-purple-700 font-mono text-[11px] font-bold dark:fill-purple-300"
        >
          LLM
        </text>

        {/* Labels below */}
        <text
          x="40"
          y="85"
          textAnchor="middle"
          className="fill-emerald-700 text-[9px] font-medium dark:fill-emerald-400"
        >
          Playwright
        </text>
        <text
          x="160"
          y="85"
          textAnchor="middle"
          className="fill-sky-700 text-[9px] font-medium dark:fill-sky-400"
        >
          Selenium
        </text>
        <text
          x="100"
          y="70"
          textAnchor="middle"
          className="fill-purple-600 text-[10px] font-semibold dark:fill-purple-400"
        >
          Self-Healing
        </text>
      </svg>
    </div>
  );
}

function HardwareToggleVisual({ isMounted }: { isMounted: boolean }) {
  return (
    <div className="relative flex h-24 w-full items-center justify-center">
      <div className="bg-surface-sunken relative flex h-12 w-48 max-w-full items-center rounded-full border border-border-hairline p-1 shadow-inner">
        {/* Toggle Background Active state */}
        <div
          className={`absolute inset-y-1 left-1 right-1 rounded-full transition-all duration-700 ease-in-out motion-reduce:transition-none ${isMounted ? 'bg-amber-500/10 dark:bg-amber-500/20' : 'bg-surface-elevated'}`}
        />

        {/* Switch Knob */}
        <div
          className={`dark:bg-surface-elevated absolute flex h-10 w-[calc(50%-4px)] items-center justify-center rounded-full border border-border-hairline bg-white shadow-sm transition-all duration-700 ease-in-out motion-reduce:transition-none ${
            isMounted ? 'left-1/2 border-amber-500/50' : 'left-1 border-border-hairline'
          }`}
        >
          {isMounted ? (
            <svg
              className="h-5 w-5 text-amber-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              />
            </svg>
          ) : (
            <svg
              className="text-text-muted h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
              />
            </svg>
          )}
        </div>

        {/* Labels under the toggle */}
        <div className="absolute -bottom-6 flex w-full justify-between px-2 font-mono text-[10px] font-medium">
          <span
            className={`transition-opacity duration-500 motion-reduce:transition-none ${isMounted ? 'opacity-40' : 'text-text-ink opacity-100'}`}
          >
            Físico
          </span>
          <span
            className={`transition-opacity duration-500 motion-reduce:transition-none ${isMounted ? 'text-amber-600 opacity-100 dark:text-amber-400' : 'opacity-40'}`}
          >
            Virtual
          </span>
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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
        {metricsData.map((item) => (
          <div
            key={item.id}
            className={`hover:shadow-surface-sunken hover:border-border-default group relative overflow-hidden rounded-2xl border border-border-hairline bg-surface-base p-5 transition-all duration-300 hover:shadow-lg lg:p-6 ${
              item.isWide ? 'md:col-span-2' : ''
            }`}
          >
            <div>
              {/* Card Top Row: Header & Badge */}
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold text-text-ink transition-colors group-hover:text-accent">
                  {item.title}
                </h3>
                <span
                  className={`whitespace-nowrap rounded-full px-2.5 py-1 font-mono text-xs font-semibold ${item.badgeColorClass}`}
                >
                  {item.badge}
                </span>
              </div>

              {/* Primary Metric Number */}
              <div className="mb-2" aria-label={item.ariaLabel}>
                <div className="font-mono text-2xl font-extrabold tracking-tight text-text-ink md:text-3xl">
                  {item.primaryMetric}
                </div>
                <div className="mt-0.5 text-xs font-medium text-accent opacity-90">
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
            <p className="text-text-ink/80 border-border-hairline/20 mt-2 border-t pt-2 text-xs leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
