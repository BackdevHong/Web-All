package Homework;

import java.util.Scanner;

public class Homework {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.print("당신에 이름을 입력해주세요 : ");
        String name = scan.nextLine();

        System.out.print("당신에 나이를 입력해주세요 : ");
        int grade = scan.nextInt();

        System.out.println("당신에 이름은 " + name + "이고, 당신에 나이는 " + grade +"입니다.");
    }
}
