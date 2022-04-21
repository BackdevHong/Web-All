<?php
    include "../db.php";
    include "../password.php";

    $userId = $_SESSION['userId'];

    $sql = mq("delete from member where id='".$userId."';");

?>

<meta charset="utf-8" />
<script type="text/javascript">
alert('회원탈퇴가 완료되었습니다.');
history.go(-2);
</script>