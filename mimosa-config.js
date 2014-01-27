exports.config = {
  modules: [
    "copy",
    "server",
    "jshint",
    "csslint",
    "require",
    "minify-js",
    "minify-css",
    "live-reload",
    "bower",
    "coffeescript",
    "stylus",
    "handlebars"
  ],
  bower: {
    copy: {
      mainOverrides: {
        pure:["pure-min.css"]
      }
    }
  }
}