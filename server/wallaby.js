module.exports = function () {
  return {
    files: [
      'src/**/*.js',
      '!src/**/*.test.js'
    ],

    tests: [
      'src/**/*.test.js'
    ],

    env: {
      type: 'node'
    },
    delays: {
      run: 300
    },
    workers: {
      recycle: true
    }
  };
};