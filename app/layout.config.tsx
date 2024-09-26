import { type HomeLayoutProps } from 'fumadocs-ui/home-layout';
import { Translations } from 'fumadocs-ui/i18n';

export const translations: Partial<Translations> = {
  editOnGithub: 'Edytuj na GitHubie',
  lastUpdate: 'Ostatnia aktualizacja',
  nextPage: 'Następna strona',
  previousPage: 'Poprzednia strona',
  search: 'Szukaj',
  searchNoResult: 'Brak wyników',
  toc: 'Spis treści',
};

export const baseOptions: HomeLayoutProps = {
  nav: {
    transparentMode: 'always',
    title: (
      <div className='flex items-center gap-2'>
        <span className='rounded-xl border border-indigo-500 bg-indigo-300 px-2 py-0.5 text-xs dark:border-indigo-400 dark:bg-indigo-700'>
          Beta
        </span>
        <p>guide.feenko.lol</p>
      </div>
    ),
  },
  i18n: false,
  githubUrl: 'https://github.com/feenko/guide.feenko.lol',
};
