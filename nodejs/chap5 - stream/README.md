<!-- # Stream의 종류

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

( 어떤 입력을 집어넣으면, 그 입력이 다른 형태로 바뀌어서 나온다. ) -->

<div align="center">
<h1>Stream의 종류</h1>
<h2>Readable</h2>
<p>스트림으로부터 읽을 수 있음.</p>
<ul>
<li>fs.createReadStream</li>
<li>process.stdin</li>
<li>서버 입장의 HTTP 요청</li>
<li>클라이언트 입장의 HTTP 응답</li>
</ul>
<h2>Writable</h2>
<p>스트림에 출력할 수 있음.</p>
<ul>
<li>fs.createWriteStream</li>
<li>process.stdout</li>
<li>클라이언트 입장의 HTTP 요청</li>
<li>서버 입장의 HTTP 응답</li>
</ul>
<h2>Duplex</h2>
<p>스트림에 입력을 받을 수도 있고, 출력을 보낼 수도 있음.</p>
<ul>
<li>TCP sockets</li>
<li>zlib streams ( 압축 알고리즘 스트림 )</li>
<li>crypto streams ( 암호화 알고리즘 스트림 )</li>
</ul>
<h2>Transform</h2>
<p>입력받은 스트림을 변환해 새로운 스트림으로 만들수 있음.</p>
<ul>
<li>zlib streams ( 압축 알고리즘 스트림 )</li>
<li>crypto streams ( 암호화 알고리즘 스트림 )</li>
</ul>
<p>( 어떤 입력을 집어넣으면, 그 입력이 다른 형태로 바뀌어서 나온다. )</p>
</div>
