import { parse } from 'querystring';

const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
export const isUrl = (path) => reg.test(path);
export const isAntDesignPro = () => {
  if (ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
    return true;
  }

  return window.location.hostname === 'preview.pro.ant.design';
}; // 给官方演示站点用，用于关闭真实开发环境不需要使用的特性

export const isAntDesignProOrDev = () => {
  const { NODE_ENV } = process.env;

  if (NODE_ENV === 'development') {
    return true;
  }

  return isAntDesignPro();
};

export const getPageQuery = () => parse(window.location.href.split('?')[1]);

// 正则表达式 千分位展示toLocaleString() 会自动四舍五入
export const numFormat = (num) => {
  let res = num.toString().replace(/\d+/, function (n) {
    return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
      return $1 + ",";
    });
  })
  return res;
}

// copy
export const copyText = (text) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
  } else {
    const textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.style.position = "fixed";
    textarea.style.clip = "rect(0 0 0 0)";
    textarea.style.top = "10px";
    textarea.value = text;
    textarea.select();
    document.execCommand("copy", true);
    // 移除输入框
    document.body.removeChild(textarea);
  }
};

//获取url参数
export const getUrlParameter = (paras) => {
  let url = window.location.href;
  let paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
  let paraObj = {}
  let i, j
  for (i = 0; j = paraString[i]; i++) {
    paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
  }
  let returnValue = paraObj[paras.toLowerCase()];
  if (typeof (returnValue) == "undefined") {
    return "";
  } else {
    return returnValue;
  }
}

//获取cookie
export const getCookie = (cname) => {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
}


