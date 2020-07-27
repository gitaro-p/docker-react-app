DockerでReact+TypeScriptの環境を作りました。

$mkdir docker-react-app //プロジェクトフォルダの作成

その次にDockerfile、docker-compose.ymlを作ります。

Dockerfileを以下のように書きます。
FROM node:14.4.0-alpine3.10

ENV LANG=C.UTF-8
ENV TZ=Asia/Tokyo

WORKDIR /usr/src/docker-react-app


