const path = require('path');

module.exports = {
  module: {
    rulels: [
      {

      },
      {
        
      },
      {
        test: /.(css|less)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
            }
          },
        ]
      },
    ]
  }
}