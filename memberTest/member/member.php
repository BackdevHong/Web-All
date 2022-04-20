<?php
    include "../db.php"
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>

<body>
    <form action="post" action="member_ok.php">
        <h1>
            회원가입 폼
        </h1>
        <fieldset>
            <legend>
                입력사항
            </legend>
            <table>
                <tr>
                    <td>아이디</td>
                    <td>
                        <input type="text" size="35" name="userId" placeholder="아이디">
                    </td>
                </tr>
                <tr>
                    <td>비밀번호</td>
                    <td>
                        <input type="password" size="35" name="userPw" placeholder="비밀번호">
                    </td>
                </tr>
                <tr>
                    <td>이름</td>
                    <td>
                        <input type="text" size="35" name="userName" placeholder="이름">
                    </td>
                </tr>
                <tr>
                    <td>주소</td>
                    <td>
                        <input type="text" size="35" name="address" placeholder="주소">
                    </td>
                </tr>
                <tr>
                    <td>성별</td>
                    <td>
                        남<input type="radio" name="sex" value="남">
                        여<input type="radio" name="sex" value="여">
                    </td>
                </tr>
                <tr>
                    <td>이메일</td>
                    <td>
                        <input type="text" name="email">@<select name="email_address">
                            <option value="naver.com">naver.com</option>
                            <option value="naver.com">nate.com</option>
                            <option value="hanmail.com">hanmail.com</option>
                        </select>
                    </td>
                </tr>
            </table>
            <input type="submit" value="가입하기" />
            <input type="reset" value="다시쓰기" />
        </fieldset>
    </form>
</body>

</html>