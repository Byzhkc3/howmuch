/**
 * Created by yali on 16/12/23.
 */
var much = (function(){
     function getProduct(inputEl,infoEl,product){
         // 初始化变量
         var inputEl = document.getElementById(inputEl);
         var muchInfo = document.getElementById(infoEl);
         var product = document.getElementById(product);
         var much = document.getElementById('much');
         var btn = document.getElementById('btn');
         // 获取value
         var val = inputEl.value;

         if(val === null || val ===''){
             alert('请输入产品名称');
             return false;
         }
         var list = [
             'qq',
             'QQ',
             'JD',
             '腾讯',
             '阿里巴巴',
             '京东',
             '淘宝',
             '天猫',
             '支付宝',
             '网易',
             '美图',
             '谷歌',
             '百度',
             '大搜车',
             '知乎',
             '咸鱼',
             '360',
             '奇虎',
             '新浪',
             '小米',
             'lol',
             '英雄联盟'
         ];
         // 初始化数值范围
         var rand = Math.round(Math.random()*150);

         // 遍历并比对输入的公司 再设定随机生成的数值范围
         for(var i = 0;i<list.length;i++){
             if(list[i] === val){
                rand = Math.round(Math.random()*999);
             }
         }

         // 随机数拼接
         var left = Math.round(Math.random()* rand);
         var mid = Math.round(Math.random()* rand);
         var right =  Math.round(Math.random()* rand);
         var Cost = left + '' + mid + '' + right;

         // 提交按钮 样式及值的修改
         btn.style.background = '#ccc';
         btn.innerText = '计算中...';

         // 设置响应时间
         setTimeout(function(){
             btn.style.background = '#70be6a';
             btn.innerText = '开始计算';
             inputEl.value = ''; //清空输入框
             much.innerText = '￥ ' + Cost; //输出数值
            product.innerText = val; //产品值
            muchInfo.style.display = "block"; //显示详细信息
        },1500);

     }

    return{
        getProduct:getProduct
    }
})();

// 点击按钮后触发的操作
var btn = document.getElementById('btn');
btn.onclick = function(){
    much.getProduct('input','muchInfo','product');
}


