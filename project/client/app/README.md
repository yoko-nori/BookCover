## Next.js ディレクトリ構成

```
└── src/
    ├── components/  (ページ全体に共通する部品)
    │   ├── elements/
    │   │   └── Button/
    │   │       └── Button.jsx
    │   └── layouts/ (レイアウト関連)
    │       └── Header/
    │           └── Header.jsx
    ├── pages/
    ├── features/ (ある特定の機能をすべて)
    │   ├── auth
    │   └── canvas/
    │       ├── api
    │       ├── components
    │       ├── hooks
    │       └── styles
    ├── public/ (静的な画像)
    │   └── images
    ├── const (アプリケーション全体の定数)
    ├── hooks (アプリケーション全体の共通ロジック、カスタムフック等)
    └── styles (アプリケーション全体のstyle)
```

- どのページにも共通して存在する要素に関しては`componets/`以下に記載してください。
- canvas表示やパレットの機能など、特定のモノに対しては`features/`以下に記載してください。
  - その中にcomponentsやstyleを配置してください。 
- `styles/`にはページに共通する余白やフォントサイズを記載してください。 
