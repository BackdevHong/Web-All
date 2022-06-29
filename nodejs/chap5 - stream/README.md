# Stream의 종류

## Readable

스트림으로부터 읽을 수 있음.

-   fs.createReadStream
-   process.stdin
-   서버 입장의 HTTP 요청
-   클라이언트 입장의 HTTP 응답

## Writable

스트림에 출력할 수 있음.

-   fs.createWriteStream
-   process.stdout
-   클라이언트 입장의 HTTP 요청
-   서버 입장의 HTTP 응답

## Duplex

스트림에 입력을 받을 수도 있고, 출력을 보낼 수도 있음.

-   TCP sockets
-   zlib streams ( 압축 알고리즘 스트림 )
-   crypto streams ( 암호화 알고리즘 스트림 )

## Transform

입력받은 스트림을 변환해 새로운 스트림으로 만들수 있음.

-   zlib streams ( 압축 알고리즘 스트림 )
-   crypto streams ( 암호화 알고리즘 스트림 )

( 어떤 입력을 집어넣으면, 그 입력이 다른 형태로 바뀌어서 나온다. )

# Toy Project - JSON 스트림 처리기

줄바꿈으로 분리된 JSON들을 읽어서, 정상 JSON들에 한해 data 값을 모두 더해보자.

## stream 처리시 유의점

어디에서 chunk가 잘릴지 예측할 수 없다.
이 점을 잘 유의하고 한번 짜보도록 하겠다.

## pipeline

pipeline은 transform stream을 쉽게 활용할 수 있게 도와준다.
