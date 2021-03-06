# PSD Exporter ver2.0

## 主な機能

PSDのレイヤー情報を元に画像ファイル、HTMLファイル、CSSファイルを書き出します。

## 使い方

1. PSDを**半角英数及び「_」「-」で保存**してください。
	* 保存パスに全角があるとエラーとなります。

2. 書き出し用に**PSDレイヤーを以下のルールに従って整理**してください。
	* レイヤーセット : DIVタグに変換されます。
	* 画像レイヤー : IMGタグに変換されます。
		* 接頭に「*」を記述するとCSSに背景として出力されます。
		* 接尾に「@」を記述し、以後、ALT属性の値を入力する事ができます。
		* 接尾に「.png」「.gif」「.jpg」を記述するとそれぞれの形式で書き出されます。記述がない場合は設定パネルにて設定した書き出し形式となります。
	* テキストレイヤー : Pタグに変換されます。
		* サイズ、太さ、行ぞろえ、色、イタリック情報がCSS上に反映されます。

3. レイヤーセット、画像レイヤー、テキストレイヤーそれぞれに、**書き出し範囲としてレイヤーマスクを設定**してください。
	* レイヤーマスクとして設定した範囲で、画像とHTMLおよびCSSに書き出されます。
	* 範囲を設定しない場合は、その内容物の要素の範囲がそのまま書き出す範囲として設定されます。 

4. 全ての**レイヤー名を固有のIDに**してください。
	* IDがかぶっている場合はエラー情報が出力されますので、情報に従って変更してください。
	* IDに半角英数及び「_」「-」以外の文字列が使われている場合は、エラー情報が出力されますので、情報に従って変更してください。
 
5. 「ファイル」>「スクリプト」>「参照」メニューから**「HTML初期構築自動化_v2.0.jsx」を選択して自動化ファイルを実行**してください。設定パネルが表示されます。
	* 画像ファイルを書き出す : 画像ファイルを書き出すか否か
		* ディレクトリ : 画像ファイルの書き出し先ディレクトリ（common/imgのように階層構造も作れます）
		* ファイル形式 : 接尾に書き出し形式の指定がない場合の画像書き出し形式
		* JPG画質 : JPGで書き出す際の画質
	* HTMLファイルを書き出す : HTMLファイルを書き出すか否か
		* ディレクトリ : HTMLファイルの書き出し先ディレクトリ（outline/profileのように階層構造も作れます）
		* ファイル名 : HTMLファイル名
		* ドキュメント形式 : HTMLファイルのドキュメント形式
		* ページタイトル : HTMLファイルのTITLEタグの値
	* CSSファイルを書き出す : CSSファイルを書き出すか否か
		ディレクトリ : CSSファイルの書き出し先ディレクトリ（common/cssのように階層構造も作れます）
		ファイル名 : CSSファイル名
		レイアウト(absoluteで配置情報を書き込む) : CSSファイルに絶対配置情報を書き出すか否か
	* 背景色 : デフォルトの画像ファイル（GIF、JPG）の透過部分のマット色と、HTMLファイル及びCSSファイルのbodyタグのbackground-colorに反映
	* パス記述方式 : 画像ファイル及びCSSファイルのパスを相対パスで書き出すか、絶対パスで書き出すか
	* 文字コード :  HTMLファイル及びCSSファイルの出力文字コード

5. PSDファイルと同階層に同一名称のディレクトリが作成され、画像ファイル、HTMLファイル、及びCSSファイルが出力されます。
	* レイヤー数が多いと完了までに相応の時間がかかります。

		
