# BookCover

## Git

### ブランチ名
 - ブランチを確認して、mainにいるか確認。
   - $ git branch
   - `$ git checkout -b  ブランチ名`※ ←ブランチを作成して移動する。
   - #### 命名規則
     - `feature/〇〇/機能名`
     - ○○は、開発者の名前
### 他人が開発したものを取り込む場合
 - ブランチを確認して、mainにいるか確認。`git branch` → `git checkout main`
 - リモートの変更差分を取り込む。`git pull`
 - 自分のブランチに移動してmainの変更をマージする。`git checkout ○○` → `git merge main`

## Dockerのセットアップ
```
# 最初のセットアップ
docker-compose build

# 依存関係インストール (初回のみ)
docker-compose run -w /usr/src/client/app --rm client npm install

# コンテナ立ち上げ
docker-compose up (-dでバックグランドで起動させる)

# コンテナ停止
docker-compose down

# statusの確認
docker-compose ps

# ログの確認
docker-compose logs
```
