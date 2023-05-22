# Simple Hair Salon | microCMS テンプレート

microCMS を使用した、美容室風サイトのテンプレートです。

## プレビュー

<img src="https://github.com/nakaatsu118/nextjs-microcms-hair-salon-template/assets/42927606/80b0afe0-08d5-4154-adfa-d5e7aa16edc0" width="480px">

[https://nextjs-microcms-hair-salon-template.vercel.app/](https://nextjs-microcms-hair-salon-template.vercel.app/)

## 技術構成

- Next.js
- TypeScript

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
