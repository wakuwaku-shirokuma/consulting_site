# reactを管理画面側に導入する

iwatahayatonoMacBook-Air:consulting_site iwatahayato$ rails webpacker:install
/Users/iwatahayato/workspace/consulting_site/vendor/bundle/ruby/2.7.0/gems/actionpack-6.0.0/lib/action_dispatch/middleware/stack.rb:37: warning: Using the last argument as keyword parameters is deprecated; maybe ** should be added to the call
/Users/iwatahayato/workspace/consulting_site/vendor/bundle/ruby/2.7.0/gems/actionpack-6.0.0/lib/action_dispatch/middleware/static.rb:110: warning: The called method `initialize' is defined here
   identical  config/webpacker.yml
Copying webpack core config
       exist  config/webpack
    conflict  config/webpack/development.js
Overwrite /Users/iwatahayato/workspace/consulting_site/config/webpack/development.js? (enter "h" for help) [Ynaqdhm]

Y

force  config/webpack/development.js
identical  config/webpack/environment.js
identical  config/webpack/production.js
identical  config/webpack/test.js
Copying postcss.config.js to app root directory
identical  postcss.config.js
Copying babel.config.js to app root directory
identical  babel.config.js
Copying .browserslistrc to app root directory
identical  .browserslistrc
The JavaScript app source directory already exists
apply  /Users/iwatahayato/workspace/consulting_site/vendor/bundle/ruby/2.7.0/gems/webpacker-4.2.2/lib/install/binstubs.rb
Copying binstubs
exist    bin
identical    bin/webpack
identical    bin/webpack-dev-server
File unchanged! The supplied flag value not found!  .gitignore
Installing all JavaScript dependencies [4.2.2]
  run  yarn add @rails/webpacker@4.2.2 from "."
yarn add v1.22.10
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning " > webpack-dev-server@3.11.0" has unmet peer dependency "webpack@^4.0.0 || ^5.0.0".
warning "webpack-dev-server > webpack-dev-middleware@3.7.2" has unmet peer dependency "webpack@^4.0.0".
[4/4] 🔨  Building fresh packages...
success Saved 0 new dependencies.
✨  Done in 4.80s.
Installing dev server for live reloading
  run  yarn add --dev webpack-dev-server from "."
yarn add v1.22.10
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning "webpack-dev-server > webpack-dev-middleware@3.7.2" has unmet peer dependency "webpack@^4.0.0".
warning " > webpack-dev-server@3.11.2" has unmet peer dependency "webpack@^4.0.0 || ^5.0.0".
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 6 new dependencies.
info Direct dependencies
└─ webpack-dev-server@3.11.2
info All dependencies
├─ json3@3.3.3
├─ node-forge@0.10.0
├─ selfsigned@1.10.11
├─ sockjs-client@1.5.1
├─ sockjs@0.3.21
└─ webpack-dev-server@3.11.2
✨  Done in 7.15s.
Webpacker successfully installed 🎉 🍰

無事インストールされる。


/Users/iwatahayato/workspace/consulting_site/vendor/bundle/ruby/2.7.0/gems/actionpack-6.0.0/lib/action_dispatch/middleware/stack.rb:37: warning: Using the last argument as keyword parameters is deprecated; maybe ** should be added to the call
/Users/iwatahayato/workspace/consulting_site/vendor/bundle/ruby/2.7.0/gems/actionpack-6.0.0/lib/action_dispatch/middleware/static.rb:110: warning: The called method `initialize' is defined here
Copying babel.config.js to app root directory
       force  babel.config.js
Copying react example entry file to /Users/iwatahayato/workspace/consulting_site/app/javascript/packs
      create  app/javascript/packs/hello_react.jsx
Updating webpack paths to include .jsx file extension
      insert  config/webpacker.yml
Installing all react dependencies
         run  yarn add react react-dom @babel/preset-react prop-types babel-plugin-transform-react-remove-prop-types from "."
yarn add v1.22.10
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning " > webpack-dev-server@3.11.2" has unmet peer dependency "webpack@^4.0.0 || ^5.0.0".
warning "webpack-dev-server > webpack-dev-middleware@3.7.2" has unmet peer dependency "webpack@^4.0.0".
warning "@babel/preset-react > @babel/plugin-transform-react-display-name@7.14.2" has unmet peer dependency "@babel/core@^7.0.0-0".
warning "@babel/preset-react > @babel/plugin-transform-react-pure-annotations@7.12.1" has unmet peer dependency "@babel/core@^7.0.0-0".
warning "@babel/preset-react > @babel/plugin-transform-react-jsx-development@7.12.17" has unmet peer dependency "@babel/core@^7.0.0-0".
warning "@babel/preset-react > @babel/plugin-transform-react-jsx@7.14.3" has unmet peer dependency "@babel/core@^7.0.0-0".
warning "@babel/preset-react > @babel/plugin-transform-react-jsx > @babel/plugin-syntax-jsx@7.12.13" has unmet peer dependency "@babel/core@^7.0.0-0".
warning " > @babel/preset-react@7.13.13" has unmet peer dependency "@babel/core@^7.0.0-0".
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 13 new dependencies.
info Direct dependencies
├─ @babel/preset-react@7.13.13
├─ babel-plugin-transform-react-remove-prop-types@0.4.24
├─ prop-types@15.7.2
├─ react-dom@17.0.2
└─ react@17.0.2
info All dependencies
├─ @babel/helper-validator-option@7.12.17
├─ @babel/plugin-syntax-jsx@7.12.13
├─ @babel/plugin-transform-react-display-name@7.14.2
├─ @babel/plugin-transform-react-jsx-development@7.12.17
├─ @babel/plugin-transform-react-jsx@7.14.3
├─ @babel/plugin-transform-react-pure-annotations@7.12.1
├─ @babel/preset-react@7.13.13
├─ babel-plugin-transform-react-remove-prop-types@0.4.24
├─ prop-types@15.7.2
├─ react-dom@17.0.2
├─ react-is@16.13.1
├─ react@17.0.2
└─ scheduler@0.20.2
✨  Done in 6.86s.
Webpacker now supports react.js 🎉


無事インストールされる。

この結果、/app/javascript/packs/hello_react.jsxが作成される。


# react-routerの導入

なぜ必要か

/admin/loginでアクセスした際にはreactで追加したヘッダーがあったが
htmlでリンク遷移した先の/admin/top画面には、
reactで追加したヘッダーが消えていた。

これを解決するためにreact-routerを導入している

# どうやってこれを行うか
