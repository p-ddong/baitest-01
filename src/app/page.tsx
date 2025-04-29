"use client";
import tracnghiem from "../constant/tracnghiem.json";
import { useState } from "react";

export default function Home() {
  const [B1, setB1] = useState<string>("");
  const [B2, setB2] = useState<string>("");
  const [B3, setB3] = useState<string>("");
  const [B4, setB4] = useState<string>("");
  const [B5, setB5] = useState<number>(0);
  const [B6, setB6] = useState<string>("");
  const [B7, setB7] = useState("");
  // const [B8, setB8] = useState("");
  // const [B9, setB9] = useState("");
  // const [B10, setB10] = useState("");
  // const [B11, setB11] = useState("");
  // const [B12, setB12] = useState("");
  // const [B13, setB13] = useState("");
  // const [B14, setB14] = useState("");
  // const [B15, setB15] = useState("");
  // const [B16, setB16] = useState("");
  // const [B17, setB17] = useState("");
  // const [B18, setB18] = useState("");
  // const [B19, setB19] = useState("");
  // const [B20, setB20] = useState("");

  const Bai1 = (input: string) => {
    const output: string[] = input.split("").reverse();
    return output;
  };
  const Bai2 = (input: string) => {
    let output: string = "false";
    const a: string = input.split("").reverse().join("");
    if (a == input) {
      output = "true";
    }
    return output;
  };
  const Bai3 = (input: number[]) => {
    const output: number[] = input.sort((a, b) => b - a);

    return output[0];
  };
  const Bai4 = (input: number[]) => {
    const output: number = input.reduce((acc, item) => acc + item, 0);

    return output;
  };
  const Bai5 = (input: number) => {
    let output: string = "false";

    let count = 0;
    for (let i = 2; i < input; i++) {
      if (input % i == 0) count++;
    }
    if (count <= 0) {
      output = "true";
    }
    return output;
  };
  const Bai6 = (input: number[]) => {
    const obj: Record<string, number> = {};

    input.forEach((item) => {
      if (item in obj) {
        obj[item]++;
      } else {
        obj[item] = 1;
      }
    });

    const maxKey = Object.entries(obj).reduce(
      (max, [key, value]) => (value > max[1] ? [key, value] : max),
      ["", -Infinity]
    )[0];

    return maxKey;
  };
  return (
    <div>
      <h1>P1 Trắc nghiệm</h1>
      <div className="grid grid-cols-10">
        {Object.entries(tracnghiem.P1).map(([key, value]) => (
          <div key={key}>
            <strong className="uppercase">{key}</strong>: {value}
          </div>
        ))}
      </div>
      <h1 className="pt-10">P2 Thuật toán</h1>
      <div className="flex flex-col pl-9">
        <div className="p-2">
          <div>{`Bài 1: Đảo ngược một chuỗi`}</div>
          <div>{`Input: "hello" Output: "olleh"`}</div>

          <div className="pt-2">
            Input:{" "}
            <input
              className="border rounded-md pl-1"
              value={B1}
              onChange={(e) => setB1(e.target.value)}
            />{" "}
            Output: {Bai1(B1)}
          </div>
        </div>

        <div className="p-2">
          <div>{`Bài 2: Kiểm tra chuỗi là Palindrome`}</div>
          <div>{`Input: "madam" Output: true`}</div>

          <div className="pt-2">
            Input:{" "}
            <input
              className="border rounded-md pl-1"
              value={B2}
              onChange={(e) => setB2(e.target.value)}
            />{" "}
            Output: {Bai2(B2)}
          </div>
        </div>

        <div className="p-2">
          <div>{`Bài 3: Tìm số lớn nhất trong mảng`}</div>
          <div>{` Input: [1, 5, 3, 9, 2] Output: 9`}</div>

          <div className="pt-2">
            Input:{" "}
            <input
              className="border rounded-md pl-1"
              value={B3}
              onChange={(e) => setB3(e.target.value)}
              placeholder="2,4,1,5,..."
            />{" "}
            Output: {Bai3(B3.split(",").map((item) => Number(item)))}
          </div>
        </div>

        <div className="p-2">
          <div>
            {`            Bài 4: Tính tổng các phần tử trong mảng Input: [1, 2, 3, 4] Output:
            10`}
          </div>

          <div className="pt-2">
            Input:{" "}
            <input
              className="border rounded-md pl-1"
              value={B4}
              onChange={(e) => setB4(e.target.value)}
              placeholder="2,4,1,5,..."
            />{" "}
            Output: {Bai4(B4.split(",").map((item) => Number(item)))}
          </div>
        </div>

        <div className="p-2">
          <div>{`Bài 5: Kiểm tra số nguyên tố Input: 7 Output: true`}</div>

          <div className="pt-2">
            Input:{" "}
            <input
              className="border rounded-md pl-1"
              value={B5}
              onChange={(e) => setB5(Number(e.target.value))}
            />{" "}
            Output: {Bai5(B5)}
          </div>
        </div>

        <div className="p-2">
          <div>
            {`            Bài 6: Tìm phần tử xuất hiện nhiều nhất trong mảng Input: [1, 2, 2,
            3, 1, 2] Output: 2`}
          </div>

          <div className="pt-2">
            Input:{" "}
            <input
              className="border rounded-md pl-1"
              value={B6}
              onChange={(e) => setB6(e.target.value)}
              placeholder="2,4,1,5,..."
            />{" "}
            Output: {Bai6(B6.split(",").map((item) => Number(item)))}
          </div>
        </div>

        <div className="p-2">
          <div>
            {`Bài 7: Đếm số ký tự trong chuỗi Input: "hello world" Output: 11`}
          </div>

          <div className="pt-2">
            Input:{" "}
            <input
              className="border rounded-md pl-1"
              value={B7}
              onChange={(e) => setB7(e.target.value)}
            />{" "}
            Output: {B7.trim().split("").length}
          </div>
        </div>

        <div className="p-2">
          <div>
            {`Bài 7: Đếm số ký tự trong chuỗi Input: "hello world" Output: 11`}
          </div>

          <div className="pt-2">
            Input:{" "}
            <input
              className="border rounded-md pl-1"
              value={B7}
              onChange={(e) => setB7(e.target.value)}
            />{" "}
            Output: {B7.trim().split("").length}
          </div>
        </div>
      </div>
    </div>
  );
}
