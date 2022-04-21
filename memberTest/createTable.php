<?php
include "db.php";

$sql = mq("create table member(no int(10) not null auto_increment, id varchar(40) not null, pw varchar(300) not null, name varchar(100) not null, address varchar(300), sex varchar(10), email varchar(100) not null, primary key(no))");

if ($sql) {
	echo "테이블 생성 완료";
} else {
	echo "테이블 생성 실패";
}

?>