## 仿轩辕剑龙舞云山手游官网  


> [在线](https://xuanyuanjian.vercel.app/#/)

[水墨效果](https://xuanyuanjian.vercel.app/#/demo)  
实现：CSS属性`mask`设置图片，图片为连续的帧，再用动画滚动图片位置，重点是连续帧图的制作
``` css
/* 核心代码 */
animation: masky 1.2s steps(39) forwards
@keyframes masky
    0%
        -webkit-mask-position: 0 0;
    100%
        -webkit-mask-position: 100% 0;
```


