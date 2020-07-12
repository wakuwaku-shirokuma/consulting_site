#Ruby on Railsの環境構築
(2020年07月12日「日」時点での環境)

構築したい環境
　MacOSにて構築を行う
　Mac OS で Ruby on Rails 6.0、Ruby 2.7を起動させる。
　rubyはrbenvでインストールを行う。

現在の環境
　rubyは2.4.1と2.4.2がすでにインストールされている状態。
　rbenvは1.1.2がインストールされている状態。
　Mac OS High Sierra バージョン10.13.6
　homebrewはインストール済。
　rbenvもインストール済。
　ruby-buildもインストール済。

★rbenvとruby-buildのバージョンアップデートに関して
  以下の記事を参考にさせて頂きました。
  https://qiita.com/jhanyu/items/38671f7e9f03b77670c0

・インストールできるrubyバージョンの確認
  rbenv install -l
  2.7.0を見つける

・ruby 2.7.0のインストール
  rbenv install 2.7.0

  Downloading openssl-1.1.1d.tar.gz...
  -> https://dqw8nmjcqpjn7.cloudfront.net/1e3a91bc1f9dfce01af26026f856e064eab4c8ee0a8f457b5ae30b40b8b711f2
  Installing openssl-1.1.1d...
  Installed openssl-1.1.1d to /Users/iwatahayato/.rbenv/versions/2.7.0

  Downloading ruby-2.7.0.tar.bz2...
  -> https://cache.ruby-lang.org/pub/ruby/2.7/ruby-2.7.0.tar.bz2
  Installing ruby-2.7.0...
  ruby-build: using readline from homebrew
  Installed ruby-2.7.0 to /Users/iwatahayato/.rbenv/versions/2.7.0

・rbenvのバージョンを2.7.0に設定する
  rbenv local 2.7.0

・rubyのバージョンを確認する
  ruby -v
  ruby 2.7.0p0 (2019-12-25 revision 647ee6f091) [x86_64-darwin17]

・インストールできるrailsのバージョンを確認する
  gem search ^rails$ -r -a

　*** REMOTE GEMS ***

　rails (6.0.3.2, 6.0.3.1, 6.0.3, 6.0.2.2, 6.0.2.1, 6.0.2, 6.0.1, 6.0.0, 5.2.4.3, 5.2.4.2, 5.2.4.1, 5.2.4, 5.2.3, 5.2.2.1, 5.2.2, 5.2.1.1, 　5.2.1, 5.2.0, 5.1.7, 5.1.6.2, 5.1.6.1, 5.1.6, 5.1.5, 5.1.4, 5.1.3, 5.1.2, 5.1.1, 5.1.0, 5.0.7.2, 5.0.7.1, 5.0.7, 5.0.6, 5.0.5, 5.0.4, 5.0.3, 　5.0.2, 5.0.1, 5.0.0.1, 5.0.0, 4.2.11.3, 4.2.11.2, 4.2.11.1, 4.2.11, 4.2.10, 4.2.9, 4.2.8, 4.2.7.1, 4.2.7, 4.2.6, 4.2.5.2, 4.2.5.1, 4.2.5, 　4.2.4, 4.2.3, 4.2.2, 4.2.1, 4.2.0, 4.1.16, 4.1.15, 4.1.14.2, 4.1.14.1, 4.1.14, 4.1.13, 4.1.12, 4.1.11, 4.1.10, 4.1.9, 4.1.8, 4.1.7.1, 4.1.7, 　4.1.6, 4.1.5, 4.1.4, 4.1.3, 4.1.2, 4.1.1, 4.1.0, 4.0.13, 4.0.12, 4.0.11.1, 4.0.11, 4.0.10, 4.0.9, 4.0.8, 4.0.7, 4.0.6, 4.0.5, 4.0.4, 4.0.3, 　4.0.2, 4.0.1, 4.0.0, 3.2.22.5, 3.2.22.4, 3.2.22.3, 3.2.22.2, 3.2.22.1, 3.2.22, 3.2.21, 3.2.20, 3.2.19, 3.2.18, 3.2.17, 3.2.16, 3.2.15, 　3.2.14, 3.2.13, 3.2.12, 3.2.11, 3.2.10, 3.2.9, 3.2.8, 3.2.7, 3.2.6, 3.2.5, 3.2.4, 3.2.3, 3.2.2, 3.2.1, 3.2.0, 3.1.12, 3.1.11, 3.1.10, 3.1.9, 　3.1.8, 3.1.7, 3.1.6, 3.1.5, 3.1.4, 3.1.3, 3.1.2, 3.1.1, 3.1.0, 3.0.20, 3.0.19, 3.0.18, 3.0.17, 3.0.16, 3.0.15, 3.0.14, 3.0.13, 3.0.12, 　3.0.11, 3.0.10, 3.0.9, 3.0.8, 3.0.7, 3.0.6, 3.0.5, 3.0.4, 3.0.3, 3.0.2, 3.0.1, 3.0.0, 2.3.18, 2.3.17, 2.3.16, 2.3.15, 2.3.14, 2.3.12, 　2.3.11, 2.3.10, 2.3.9, 2.3.8, 2.3.7, 2.3.6, 2.3.5, 2.3.4, 2.3.3, 2.3.2, 2.2.3, 2.2.2, 2.1.2, 2.1.1, 2.1.0, 2.0.5, 2.0.4, 2.0.2, 2.0.1, 　2.0.0, 1.2.6, 1.2.5, 1.2.4, 1.2.3, 1.2.2, 1.2.1, 1.2.0, 1.1.6, 1.1.5, 1.1.4, 1.1.3, 1.1.2, 1.1.1, 1.1.0, 1.0.0, 0.14.4, 0.14.3, 0.14.2, 　0.14.1, 0.13.1, 0.13.0, 0.12.1, 0.12.0, 0.11.1, 0.11.0, 0.10.1, 0.10.0, 0.9.5, 0.9.4.1, 0.9.4, 0.9.3, 0.9.2, 0.9.1, 0.9.0, 0.8.5, 0.8.0)

・railsのインストール
　gem install rails --version 6.0.0

  Parsing documentation for rails-6.0.0
  Installing ri documentation for rails-6.0.0
  Done installing documentation for concurrent-ruby, i18n, thread_safe, tzinfo, zeitwerk, activesupport, rack, rack-test, mini_portile2, nokogiri, crass, loofah, rails-html-sanitizer, rails-dom-testing, builder, erubi, actionview, actionpack, activemodel, activerecord, globalid, activejob, mini_mime, mail, actionmailer, nio4r, websocket-extensions, websocket-driver, actioncable, mimemagic, marcel, activestorage, actionmailbox, actiontext, thor, method_source, railties, sprockets, sprockets-rails, rails after 47 seconds
  40 gems installed

・railsのバージョンを確認する
  rails -v
  Rails 6.0.0
