import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';

export interface ExperienceGroup {
  id: string;
  team: string;
  role: string;
  description: string;
}

interface ExperienceTabsProps {
  data: ExperienceGroup[];
}

export const ExperienceTabs: React.FC<ExperienceTabsProps> = ({ data }) => {
  return (
    <div className="rounded-xl border border-border-hairline bg-surface-raised p-6 shadow-sm transition-all duration-300 hover:border-accent md:p-8">
      <div className="mb-6 md:mb-8">
        <h3 className="text-2xl font-bold tracking-tight text-text-ink">AVAL DIGITAL LABS (ADL)</h3>
        <p className="mt-2 font-mono text-sm text-text-ink opacity-80">
          06/2021 – 03/2026 <span className="mx-2 text-accent opacity-50">•</span> QA Automation
          Senior | AI Engineer
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text-ink opacity-90">
          Profesional Senior enfocado en la aplicación de Inteligencia Artificial, automatización y
          arquitectura de pruebas para transformar procesos de ingeniería de software.
        </p>
      </div>

      <Tabs.Root
        defaultValue={data[0]?.id || ''}
        className="flex flex-col gap-6 md:flex-row md:gap-10"
      >
        <Tabs.List
          className="flex gap-2 overflow-x-auto border-b border-border-hairline pb-2 md:min-w-[220px] md:flex-col md:border-b-0 md:border-r md:pb-0"
          aria-label="Equipos de experiencia en AVAL"
        >
          {data.map((exp) => (
            <Tabs.Trigger
              key={exp.id}
              value={exp.id}
              className="whitespace-nowrap rounded-lg px-4 py-3 text-left text-sm font-medium text-text-ink opacity-70 outline-none transition-all duration-200 hover:opacity-100 focus-visible:ring-2 focus-visible:ring-accent data-[state=active]:bg-surface-base data-[state=active]:text-accent data-[state=active]:opacity-100 data-[state=active]:shadow-[inset_4px_0_0_0_theme(colors.accent)] md:whitespace-normal"
            >
              {exp.team}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        <div className="min-h-[220px] flex-1">
          {data.map((exp) => (
            <Tabs.Content
              key={exp.id}
              value={exp.id}
              className="rounded-md outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-raised data-[state=inactive]:hidden data-[state=active]:animate-in data-[state=active]:fade-in-50 data-[state=active]:slide-in-from-bottom-2"
            >
              <div className="mb-5 flex flex-col gap-3">
                <h4 className="text-xl font-bold text-text-ink">{exp.team}</h4>
                <span className="w-fit rounded-full border border-border-hairline bg-surface-base px-3 py-1.5 font-mono text-xs text-accent">
                  {exp.role}
                </span>
              </div>
              <p className="text-xs leading-relaxed text-text-ink opacity-90">{exp.description}</p>
            </Tabs.Content>
          ))}
        </div>
      </Tabs.Root>
    </div>
  );
};
