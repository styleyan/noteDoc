# 核心概念

`mapGetters 可以对应 computed`<br>
`methods    可以对应 mapActions`

## state
```javascript
<div id="app">
  <p>{{count}}
    <button @click="inc">+</button>
    <button @click="dec">-</button>
  </p>
</div>

<script>
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
      inc: function(state,payload){
        //得到的是state值
        console.log(state);
        state.count++;
      },
      dec: function(state){
        state.count--;
      }
  },
  actions: {
      inc: function(context){
        //context 是一个新的 store;
        console.log(context);
      }
  }
});


const app = new Vue({
  el: '#app',
  store:store,
  computed: {
    count () {
        return store.state.count
    }
  },
  methods: {
    inc :function() {
        this.$store.commit('inc',{'name':8888})
        this.$store.dispatch('inc',{'name':8888})
    },
    dec:function (){
        this.$store.commit('dec')
    }
  }
})
```

## Modules

使用Modules合并后,调用不同 mutations 对应所在Modules里的state值
```javascript
const moduleA = {
  state: {
    count: 4
  },
  mutations: {
    aaa(state){
      console.log(state.count);
    }
  }
};

const moduleB = {
  state: {
    count: 88
  },
  mutations: {
    bbb(state){
      console.log(state.count);
    }
  }
}

const store2 = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store2.commit('aaa');  //得到==> 4
store2.commit('bbb');  //得到==> 88
```

如果2个modules中的mutations相同,那么同时出发
```javascript
const moduleA = {
  state: {
    count: 4
  },
  mutations: {
    //moduleA与moduleB相同
    aaa(state){
      console.log(state.count);
    }
  }
};

const moduleB = {
  state: {
    count: 88
  },
  mutations: {
    //moduleA与moduleB相同
    aaa(state){
      console.log(state.count);
    }
  }
}

const store2 = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store2.commit('aaa');  // 得到==> 4 , 888
```


## Getters
作用：`从store中派生出一些状态`，Getters 接受 state 作为其第一个参数，第二个参数为获取到数据。

```javascript
const ystore = new Vuex.Store({
  state: {
    todos: [
      {id:1,text:'...',done:true},
      {id:2,text:'...',done:false},
      {id:555,text:'...',done:true}
    ]
  },
  getters: {
    //返回逻辑处理后的数据
    doneTodos:function(state,getters){
      console.log(getters);
      return state.todos.filter(todo => todo.done)
    }
  },
  mutations: {
    //定义commit('setText') 方法;
    setText(state,{text}){
      state.todos.filter(todo=> todo.text = text)
    }
  }
});

// 设置text值
ystore.commit('setText',{text:'fffff'})

ystore.getters.doneTodos // ==> [{id:1,text:'...',done:true},{id:555,text:'...',done:true}]


```

## dispatch/commit区别
1)、对应分发不一样: commit ==> mutations、dispatch ==> actions<br>
2)、分发得到参数不一样
```javascript
var store = new Vuex.Store({
  state: {
    count: 0,
    name:'yxf'
  },
  mutations: {
    /*
    * @param state    store.state  store 中的状态
    * @param payload  store.commit('say',{"name":"yxf"}) 传入额外的参数
    */
    say(state,payload){
      console.log(state.name);
    },
    wait(state,payload){
      state.count++；
    }
  },
  actions: {
    /*
    * @param context  一个与 store 实例具有相同方法和属性的 context 对象
    * @param payload  store.dispatch('say',{"name":"yxf"}) 传入额外的参数
    */
    say(context,payload){
      //先触发 say mutations,在触发 wait mutations
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('say');
          context.commit('wait');
          resolve()
        }, 1000)
      })
    }
  }
})


store.commit('say');
store.dispatch('say');
```
`actions 可以触发多重 mutations、异步`<br>


3)、返回值不一样
```javascript
// 返回undefined 
store.commit('say');     // 得到 ==> undefined 

// 返回 Promise对象，可在进行下一步操作
store.dispatch('say').then(()=>{
  console.log('调用完成');
});   
```

## mapMutations/mapActions/mapGetters辅助函数
获取方式
```javascript
import { mapGetters,mapActions,mapMutations} from 'vuex';
```


