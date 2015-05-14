Rails CRUDサンプル
===
# 目的
Railsで１画面の複数タブフォームでCRUDを実装する

# 前提
| ソフトウェア     | バージョン    | 備考         |
|:---------------|:-------------|:------------|
| rails    　　　| 4.2.1        |             |
| ruby     　　　| 2.2.2        |             |
| docker   　　　| 1.6.0        |             |
| boot2docker 　|  1.6.0        |             |
| docker-compose　　| 1.1.0        |             |

# 構成
+ [セットアップ](#1)

# 詳細
## <a name="1">セットアップ</a>

    $ docker-compose build
    $ docker-compose up -d
    
もしくは

    $ docker pull k2works/railscrudtabformsample_web:WIP
    $ docker run -d -p 3000:3000 k2works/railscrudtabformsample_web:WIP rails s -b 0.0.0.0

からの

http://コンテナのIPアドレス:3000

コンテナIPはboot2dockerを使っているなら`boot2docker ip`で確認できる。


# 参照

+ [k2works / railscrudtabformsample_web](https://registry.hub.docker.com/u/k2works/railscrudtabformsample_web/)