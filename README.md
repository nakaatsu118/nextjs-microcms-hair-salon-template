# Simple Hair Salon | microCMS テンプレート

<img src="https://github.com/nakaatsu118/nextjs-microcms-hair-salon-template/assets/42927606/6228464d-7034-4fea-a104-60599211e17d" width="480px">

[https://nextjs-microcms-hair-salon-template.vercel.app/](https://nextjs-microcms-hair-salon-template.vercel.app/)

microCMS を使用した、美容室風サイトのテンプレートです。

## 動作環境

Node.js v18 以上

## 環境変数の設定

ルート直下の.env.sample ファイルをコピーして.env ファイルを作成し、下記の情報を入力してください。

```shell
NEXT_PUBLIC_API_KEY=xxxxxxxxxx
NEXT_PUBLIC_SERVICE_DOMAIN==xxxxxxxxxx
```

`NEXT_PUBLIC_API_KEY`
microCMS 管理画面の「サービス設定 > API キー」から確認することができます。

`NEXT_PUBLIC_SERVICE_DOMAIN`
MICROCMS_SERVICE_DOMAIN
microCMS 管理画面の URL（ https://xxxxxxxx.microcms.io ）の xxxxxxxx の部分です。

## 開発の仕方

1. パッケージのインストール

```shell
yarn install
```

2. 開発環境の起動

```shell
yarn dev
```

3. 開発環境へのアクセス

[http://localhost:3000](http://localhost:3000)にアクセス

4. 実装を進める

`TODO:` でファイル内を検索すると、このテンプレートを利用して新たなサイトを構築する際に変更が必要な箇所が出てきます。

### Vercel へのデプロイ

[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)から簡単にデプロイが可能です。

リポジトリを紐付け、環境変数を `Environment Variables` に登録しましょう。

開発環境の構築手順は以上になります。お疲れ様でした。
以下は当テンプレートの技術面やサイト構成の解説になります。

## 技術構成

- Next.js
- TypeScript
- CSS Modules
- react-modal

JavaScript によるアニメーション等は入れておらず、シンプルな構成としています。

## ページ構成

- Header
- Top
- About
- Hair Catalog
  - Hair Catalog 子ページ
- Menu
- Staff
- Access
- Footer
- ReserveButton

予約ボタンを設置していますが、リンク先は未設定（当ページを別タブで開く）となっています。実際に利用したいサービスに合わせてリンク先を設定してください。

## microCMS 構成

microCMS でデータ管理している箇所についての説明です。

### メニュー

各プランの金額を一覧表示するための API です。金額は範囲表示など自由な形で入力するパターンを考慮してテキストフィールドとなっています。

- メニュー名（英語）
- メニュー名（日本語）
- 金額

### スタッフ

従業員の紹介情報です。大量に掲載されない前提で構築しているため、多くなる場合は子ページを作成するのがよいです。

- 名前（日本語）
- 名前（英語）
- 紹介文
- プロフィール画像

### ヘアカタログ

ブログ的な運用を想定したお客様の髪型一覧情報の API です。

- 画像
- 日時
- 髪型
- コメント
