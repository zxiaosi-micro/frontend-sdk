// changelogithub.config.ts
import { defineConfig } from 'changelogithub';

export default defineConfig({
  types: {
    feat: {
      title: '🚀 Features',
    },

    fix: {
      title: '🐞 Bug Fixes',
    },

    perf: {
      title: '🏎 Performance',
    },

    refactor: {
      title: '♻️ Refactors',
    },

    docs: {
      title: '📚 Documentation',
    },

    build: {
      title: '📦 Build',
    },

    ci: {
      title: '🤖 CI',
    },

    chore: {
      title: '🏡 Chore',
    },
  },
});
