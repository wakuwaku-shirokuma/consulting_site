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

・確認する
  ruby -v
  ruby 2.7.0p0 (2019-12-25 revision 647ee6f091) [x86_64-darwin17]
