import { DocsLayout } from 'fumadocs-ui/layout';
import type { ReactNode } from 'react';
import { baseOptions } from '../layout.config';
import { source } from '@/app/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      sidebar={{
        banner: (
          <div className='mb-2 mt-2 rounded-lg border bg-fd-secondary/50 p-3 max-md:hidden'>
            <p className='text-sm text-fd-muted-foreground'>
              Najlepsza baza wiedzy o tworzeniu serwerów Minecraft.
            </p>
          </div>
        ),
        prefetch: true,
      }}
      tree={source.pageTree}
      {...baseOptions}
    >
      {children}
    </DocsLayout>
  );
}
