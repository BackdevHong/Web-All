<?php
	session_start();
	
	$db = new mysqli("localhost","phpManager","1234","phptest");
	$db -> set_charset("utf8");

	function mq($sql){
    	global $db;
    	return $db -> query($sql);
	}

?>