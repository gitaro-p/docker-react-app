DockerでReact+TypeScriptの環境を作りました。

$mkdir docker-react-app //プロジェクトフォルダの作成

その次にDockerfile、docker-compose.ymlを作ります。

//Dockerfileを以下のように書きます。
FROM node:14.4.0-alpine3.10

ENV LANG=C.UTF-8
ENV TZ=Asia/Tokyo

WORKDIR /usr/src/docker-react-app

//docker-compose.ymlを以下のように書きます。
version: '3'

services: 
  frontend: 
    build: .
    environment: 
      - NODE_ENV=development
    volumes: 
      - ./:/usr/src/docker-react-app
    command: sh -c 'cd frontend && yarn start'
    ports: 
      - '3000:3000'
    tty: true
    
    
    上記の二つのファイルの作成が終わったら、
    ＄docker-compose build
    
    その後、＄docker-compose run --rm node sh -c 'npx create-react-app sample_app --template typescript'　
    
アプリケーションの起動・停止
起動 $docker-compose up

停止 $docker-compose down

起動後、http://localhost:3000/でプロジェクトの画面が表示される。
src/App.tsxを編集すると、即時反映されることも確認できます。


