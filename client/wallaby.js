module.exports = function (wallaby) {
  
    // Babel, jest-cli and some other modules may be located under
    // react-scripts/node_modules, so need to let node.js know about it
    var path = require('path');
    process.env.NODE_PATH +=
      path.delimiter +
      path.join(__dirname, 'node_modules') +
      path.delimiter +
      path.join(__dirname, 'node_modules/react-scripts/node_modules');
    require('module').Module._initPaths();

    process.env.NODE_ENV = 'development';
  
    return {
      files: [
        'src/**/*.+(js|jsx|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg|gql|graphql)',
        '!src/**/*.test.js?(x)',
        '!src/**/*.story.js'
      ],
  
      tests: ['src/**/*.test.js?(x)'],
  
      env: {
        type: 'node',
        runner: 'node'
      },

      compilers: {
        '**/*.js?(x)': wallaby.compilers.babel({
          babel: require('babel-core'),
          presets: ['react-app']
        }),
      },
  

      delays: {
        run: 300
      },
  
      setup: wallaby => {
        // const jestConfig = require('react-scripts/scripts/utils/createJestConfig')(p => require.resolve('react-scripts/' + p));
        const jestConfig = {
          setupFiles: ['<rootDir>/config/polyfills.js'],
          moduleNameMapper: {
            '^.+\\.(gql|graphql)$': 'jest-transform-graphql',
            '^.+\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/config/jest/fileTransform.js',
            '^.+\\.scss$': '<rootDir>/config/jest/cssTransform.js',
            '^react-native$': 'react-native-web',
          }
        }
        wallaby.testFramework.configure(jestConfig);
      },
  
      testFramework: 'jest'
    };
  };

  // module.exports = function (wallaby) {
    
  //       setup: (wallaby) => {
  //         wallaby.testFramework.configure({
  //           // as in node_modules/react-scripts/utils/createJestConfig.js
  //           testURL: 'http://localhost',
  //           setupFiles: ['<rootDir>/config/polyfills.js'],
  //           moduleNameMapper: {
  //             '^.+\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/config/jest/fileTransform.js',
  //             '^.+\\.scss$': '<rootDir>/config/jest/cssTransform.js',
  //             '^react-native$': 'react-native-web',
  //           }
  //         });
    
  //         // wallaby.testFramework.configure({
  //         //   // as in node_modules/react-scripts/utils/createJestConfig.js
  //         //   testURL: 'http://localhost',
  //         //   setupFiles: ['<rootDir>/config/polyfills.js'],
  //         //   moduleNameMapper: {
  //         //     '^.+\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/config/jest/fileTransform.js',
  //         //     '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
  //         //     '^react-native$': 'react-native-web'
  //         //   }
  //         // });
  //       },
  //       testFramework: 'jest'
  //     };
  //   };
    