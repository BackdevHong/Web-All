<?php
    include "../db.php";
    include "../password.php";

    $userId = $_POST['userId'];
    $userPw = password_hash($_POST['userPw'], PASSWORD_DEFAULT);
    $userName = $_POST['name'];
    $address = $_POST['address'];
    $sex = $_POST['sex'];
    $email = $_POST['email'].'@'.$_POST['email_address'];

    $sql = mq("insert into member (id,pw,name,address,sex,email) values('".$userId."','".$userPw."','".$userName."','".$address."','".$sex."','".$email."')");
?>
<meta charset="utf-8" />
<script type="text/javascript">
alert('회원가입이 완료되었습니다.');
history.go(-2);
</script>