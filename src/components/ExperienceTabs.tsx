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
    <div className="bg-surface-raised rounded-xl p-6 md:p-8 shadow-sm border border-border-hairline transition-all duration-300 hover:border-accent">
      <div className="mb-6 md:mb-8">
        <h3 className="text-2xl font-bold text-text-ink tracking-tight">AVAL DIGITAL LABS (ADL)</h3>
        <p className="text-sm font-mono text-text-ink opacity-80 mt-2">06/2021 – 03/2026 <span className="mx-2 text-accent opacity-50">•</span> QA Automation Senior | AI Engineer</p>
        <p className="text-sm text-text-ink opacity-90 mt-4 leading-relaxed max-w-3xl">
          Profesional Senior enfocado en la aplicación de Inteligencia Artificial, automatización y arquitectura de pruebas para transformar procesos de ingeniería de software.
        </p>
      </div>
      
      <Tabs.Root defaultValue={data[0]?.id || ''} className="flex flex-col md:flex-row gap-6 md:gap-10">
        <Tabs.List 
          className="flex md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0 md:min-w-[220px] border-b md:border-b-0 md:border-r border-border-hairline"
          aria-label="Equipos de experiencia en AVAL"
        >
          {data.map((exp) => (
            <Tabs.Trigger
              key={exp.id}
              value={exp.id}
              className="text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 text-text-ink opacity-70 hover:opacity-100 data-[state=active]:opacity-100 data-[state=active]:bg-surface-base data-[state=active]:text-accent data-[state=active]:shadow-[inset_4px_0_0_0_theme(colors.accent)] outline-none focus-visible:ring-2 focus-visible:ring-accent whitespace-nowrap md:whitespace-normal"
            >
              {exp.team}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        <div className="flex-1 min-h-[220px]">
          {data.map((exp) => (
            <Tabs.Content 
              key={exp.id} 
              value={exp.id} 
              className="outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-raised rounded-md transition-all data-[state=inactive]:hidden data-[state=active]:animate-in data-[state=active]:fade-in-50 data-[state=active]:slide-in-from-bottom-2 duration-300"
            >
              <div className="flex flex-col gap-3 mb-5">
                <h4 className="text-xl font-bold text-text-ink">{exp.team}</h4>
                <span className="text-xs font-mono text-accent bg-surface-base border border-border-hairline px-3 py-1.5 rounded-full w-fit">
                  {exp.role}
                </span>
              </div>
              <p className="text-xs leading-relaxed text-text-ink opacity-90">
                {exp.description}
              </p>
            </Tabs.Content>
          ))}
        </div>
      </Tabs.Root>
    </div>
  );
};
