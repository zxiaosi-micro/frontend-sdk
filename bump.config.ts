import { defineConfig } from 'bumpp';

export default defineConfig({
  recursive: true,
  commit: 'release: {tag}',
  tag: '{tag}',
  push: true,
});
