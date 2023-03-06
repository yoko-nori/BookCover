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
