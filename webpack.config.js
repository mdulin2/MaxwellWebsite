
var config = {
   entry: './src/main.js',
   output: {
      path:'/',
      filename: 'index.js',
   },
   devServer: {
      inline: true,
      port: 8080
   },
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['react']
            }
         },
         {test:/\.css$/, loader: "style-loader!css-loader" },
      ]
   }
};

module.exports = config;
