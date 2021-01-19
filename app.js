new Vue({
    el: "#vue-app",  //选择的容器  实例element
    data() {
        return {
            name: "曹硕",
            qq: "1376186779",
            website: "https://baidu.com",
            websiteTag: '<a href="https://www.taobao.com">taobao</a>',
            age: "20",
            X: 0,
            Y:0,
        };

    } ,
    methods: {
        // greet: function () {
        //     return 'Good night  ' + this.name;  是加号拼接  最好不用
        // }
        greet(time) {
            return `Good ${time} ${this.name}`;//ES6语法推荐
        },
        havelunch(time) {
            return `${time}吃过了`;
        },
        add(inc) {
            this.age += inc;
        },
        subtract(dec) {
            this.age -= dec;
        },
        updateXY(event) {
            // console.log(event)  控制台打印出实际的位置
            this.X = event.offsetX;
            this.Y = event.offsetY;
        },
        handleclick() {
            alert("hello")
        },
        logname() {
            console.log('正在输入姓名。。。。')
        },
        logage() {
            console.log('正在输入年龄。。。。')
        }
        

    }
    
});