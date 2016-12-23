/**
 * Created by yali on 16/12/23.
 */
var much = (function(){
     function getProduct(inputEl,infoEl,product){

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
             '咸鱼'
         ];

         var rand = Math.round(Math.random()*150);

         for(var i = 0;i<list.length;i++){
             if(list[i] === val){
                rand = Math.round(Math.random()*999);
             }
         }

         var left = Math.round(Math.random()* rand);
         var mid = Math.round(Math.random()* rand);
         var right =  Math.round(Math.random()* rand);
         var totalCost = left + '' + mid + '' + right;

         btn.style.background = '#ccc';
         btn.innerText = '计算中...';

         setTimeout(function(){
             btn.style.background = '#70be6a';
             btn.innerText = '开始计算';
             inputEl.value = '';
             much.innerText = '￥ ' + totalCost;
            product.innerText = val;
            muchInfo.style.display = "block";
        },1500);

     }

    return{
        getProduct:getProduct
    }
})();

var btn = document.getElementById('btn');
btn.onclick = function(){
    much.getProduct('input','muchInfo','product');
}


