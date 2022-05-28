module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          node: 'current',
          esmodules: true,
        },
      },
    ],
    [
      '@babel/preset-react',
      {
        targets: {
          node: 'current',
          esmodules: true,
        },
      },
    ],
  ],
};
