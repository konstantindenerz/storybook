import type { StorybookConfig } from '@storybook/react/types';

const config: StorybookConfig = {
  stories: [{ directory: './src', titlePrefix: 'Demo' }],
  logLevel: 'debug',
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-storysource',
    {
      name: '@storybook/addon-docs',
      options: {
        sourceLoaderOptions: {
          parser: 'typescript',
          injectStoryParameters: false,
        },
      },
    },
    '@storybook/addon-storyshots',
  ],
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgenTypescriptOptions: {
      propFilter: (prop) => ['label', 'disabled'].includes(prop.name),
    },
  },
  core: {
    builder: 'webpack4',
  },
  features: {
    postcss: false,
    previewCsfV3: true,
  },
};

module.exports = config;
