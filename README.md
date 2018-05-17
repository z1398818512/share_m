这是基于sosh（http://www.calledt.com/soshm/），根据我们项目需求改造来的插件。

- 仅需调用`soshm-master/dist/soshm.js||soshm.min`，无其他库依赖

- 使用：

- ```
  <button id="shareBtn">点击分享</button>
  ```

  ```
  <script src="./soshm-master/dist/soshm.min.js"></script>
  <script>
      soshm.TZshare('shareBtn', {
          //  分享的链接，默认使用location.href
          url: location.href,
          // 分享的标题，默认使用document.title
          title: '标题',
          // 分享的摘要，默认使用<meta name="description" content="">content的值
          digest: '描述',
          // 分享的图片，默认获取本页面第一个img元素的src
          pic:
              "图片的url"
          // 默认显示的网站为以下六个个,支持设置的网站有
          // weixin,weixintimeline,qq,qzone,yixin,weibo,tqq,renren,douban,tieba
          sites: ['weixin', 'weixintimeline', 'weibo', 'qq', 'qzone']

      })
  </script>
  ```





**支持（带!的表示是在原插件上有变更的功能）**

​	qq内置浏览器：

​		！分享微信/微信朋友圈 ：友好提示（原插件是调起QQ浏览器进行分享，没有qq浏览器则没反应）

​	qq内置浏览器原生分享:

​		! 插件动态改变页面‘title‘标签的内容，新添加了两个‘mate’标签，达到跟插件分享同样的效果 

​	微信：

​		！分享微信/微信朋友圈/QQ/QQ空间：友好提示  （原插件只有微信/微信朋友圈有友好提示，其他点击没反应）

​	UI浏览器：

​		！图片取页面截图  （原插件取页面截图会被插件的遮罩层挡住，已处理）

**不足点：**

​	微信原生分享 ： 没有实现，需要js-sdk

​	uc浏览器： 图片是截取页面掘图

​	所有第三方浏览器的原生分享：标题取’title‘标签，描述取’title‘标签，图片取页面截图

​	所有除qq内置，微信内置，qq，uc外的浏览器，分享会调起qq浏览器进行分享，没有qq浏览器则点击图标没反应。



​		







