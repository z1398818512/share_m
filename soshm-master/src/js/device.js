var ua = navigator.userAgent.toLowerCase();

/**
 * 设备检测函数
 * @param  {String} needle [特定UA标识]
 * @return {Boolean}
 */
function deviceDetect(needle) {
  needle = needle.toLowerCase();
  return ua.indexOf(needle) !== -1;
}

/**
 * 获取浏览器版本
 * @param  {String} nece [UA中带有版本信息的部分字符串]
 * @return {Number}      [版本号]
 */
function getVersion(nece) {
  var arr = nece.split('.');
  return parseFloat(arr[0] + '.' + arr[1]);
}

var device = {
  isIOS: deviceDetect('iPhone') || deviceDetect('iPad') || deviceDetect('iPod'),
  isAndroid: deviceDetect('Android'),
  isUCBrowser: deviceDetect('UCBrowser'), //uc浏览器
  isQQBrowser: deviceDetect('MQQBrowser'), //qq浏览器
  isWeixin: deviceDetect('MicroMessenger'), //微信内置浏览器
  isQQ: deviceDetect('qq/') //qq内置浏览器
};

device.qqBrowserVersion = device.isQQBrowser
  ? getVersion(ua.split('mqqbrowser/')[1])
  : 0;
device.ucBrowserVersion = device.isUCBrowser
  ? getVersion(ua.split('ucbrowser/')[1])
  : 0;

module.exports = device;
