# Simple Hair Salon | microCMS テンプレート

microCMS を使用した、美容室風サイトのテンプレートです。

## プレビュー

<img src="https://github.com/nakaatsu118/nextjs-microcms-hair-salon-template/assets/42927606/6228464d-7034-4fea-a104-60599211e17d" width="480px">

[https://nextjs-microcms-hair-salon-template.vercel.app/](https://nextjs-microcms-hair-salon-template.vercel.app/)

## 技術構成

- Next.js
- TypeScript
- CSS Modules
- react-modal

JavaScript によるアニメーション等は入れておらず、シンプルな構成としています。

## 環境変数設定

`.env.sample` ファイルをコピーして `.env.development.local` を作成し、以下の情報を入力してください。

`NEXT_PUBLIC_SERVICE_DOMAIN=`

microCMS 管理画面の URL `https://xxx.microcms.io/` の `xxx` を設定してください。

`NEXT_PUBLIC_API_KEY=`

microCMS 管理画面のサービス設定 -> API キー から GET 権限のある API キーをコピーして設定してください。

## 開発手順

```shell
# setup
yarn install

# run local
yarn dev

# build static page
# /out
yarn build
```

`TODO:` でファイル内を検索すると、このテンプレートを理容する際に変更が必要な箇所が出てきます。

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
