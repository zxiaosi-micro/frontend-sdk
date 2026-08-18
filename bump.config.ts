import { defineConfig } from 'bumpp';

export default defineConfig({
  recursive: true,
  commit: 'release: v{version}',
  tag: 'v{version}',
  push: true,
});
