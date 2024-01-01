import React, { useState, useEffect, useMemo, useRef } from 'react';
import styles from './index.less';

const Digital = (props) => {
  const { num, time } = props;
  const [number, setNumber] = useState('0');
  const [numdecimal, setNumDecimal] = useState();
  const box = useRef();
  const sum = (n) => {
    let nums = n.toString();
    // 整数部分 str
    let str0;
    let str = nums; // 我们要处理整数部分,故对整数部分做处理,判断字符串长度,得出数字的个数
    //对字符串的长度向3取余,判断要用 , 分割的部分
    if (str.length % 3 == 1) {
      // 余数为 1 时,取出最大位数字,用str0接收
      str0 = str.substr(0, 1);
    } else if (str.length % 3 == 2) {
      // 余数为 2 时,取出最大的两位数字,用str0接收
      str0 = str.substr(0, 2);
    }
    // 定义 , 用于拼接数字字符串
    let str1 = ',';
    // 定义空字符串后边接收拼接的新字符串
    let sum = '';
    // 用for循环 处理能被3整除的部分
    //从后边开始循环,i<0时停止,步长为3
    for (let i = str.length - 3; i >= 0; i = i - 3) {
      // 当字符串的长度能够被三整除时,需要判断一下i
      if (i == 0) {
        sum = str.substr(0, 3) + sum;
      } else {
        //不等于三时
        sum = str1 + str.substr(i, 3) + sum;
      }
    }
    if (str0 != undefined) {
      sum = str0 + sum;
    } else {
      sum = sum;
    }
    return sum.toString();
  };
  const numRun = (maxnum, numtime) => {
    let numText = 0;
    let golb;
    // console.log(box.current.innerText);

    const numSlide = () => {
      numText += maxnum / numtime / 100;
      if (numText >= maxnum) {
        numText = maxnum;
        cancelAnimationFrame(golb);
      } else {
        golb = requestAnimationFrame(numSlide);
      }
      let a = numText * 1;
      let n = sum(a.toFixed(0));
      setNumber(n);
    };
    numSlide();
  };
  const numDecRun = (maxnum, numtime) => {
    let numText = 0;
    let golb;
    // console.log(box.current.innerText);

    const numSlide = () => {
      numText += maxnum / numtime / 100;
      if (numText >= maxnum) {
        numText = maxnum;
        cancelAnimationFrame(golb);
      } else {
        golb = requestAnimationFrame(numSlide);
      }
      let a = numText * 1;
      let n = sum(a.toFixed(0));
      setNumDecimal('.' + n);
    };
    numSlide();
  };

  useEffect(() => {
    const ifdecimal = num.toString().indexOf('.') + 1;
    if (ifdecimal > 0) {
      const numlist = num.toString().split('.');
      numRun(numlist[0], time);
      numDecRun(numlist[1], time);
    } else {
      setNumDecimal('');
      numRun(num, time);
    }
  }, [box]);
  return (
    <div ref={box} className={`oxy-digital ${styles.digital}`}>
      {number}
      {numdecimal}
    </div>
  );
};

export default Digital;
