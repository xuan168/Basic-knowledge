let arr = [12,111,12,14,15,8,5,4,6,9,3,4,6,8];

// 解法1
// splice()从数组中添加/删除项目，然后返回被删除的项目
for(let i=0;i<arr.length;i++) {
    for(let j=i+1;j<arr.length;j++) {
        if(arr[i] === arr[j]) {
            arr.splice(j,1);
            j--;
        }
    }
}

// 解法2  indexOf 和 新数组
// indexOf() 方法返回在数组中可以找到一个给定元素的第一个索引，如果存在，则返回-1.
let newArr = [];
for(let i=0;i<arr.length;i++) {
    if(newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i])
    }
}
// includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回true,否则返回false.
for(let i=0;i<arr.length;i++) {
    if(!newArr.includes(arr[i])) {
        newArr.push(arr[i])
    }
}

// 解法3 sort()方法返回一个新数组
// let obj = arr.sort((a,b) => a-b);
// let obj1 = [];
// for(let i=0;i<obj.length;i++) {
//     if(obj[i] !== obj[i-1]) {
//         obj1.push(obj[i])
//     }
// }

// 解法4 new Set()
// Set对象是值的集合，可以按照插入的顺序迭代它的元素。Set中的元素只会出现一次，即Set中的元素是惟一的。
let b = new Set(arr);
let b1 = [...b]

// 解法5 Map
// Map对象保存键值对，并且能够记住键的原始插入顺序
// Map.prototype.has(key) 返回一个布尔值，表示Map实例是否包含键对应的值
// Map.prototype.set(key) 设置Map对象中键的值。返回该Map对象
let map = new Map();
let array = new Array();
for(let i=0;i<arr.length;i++) {
    if(map.has(arr[i])) {  
       
        map.set(arr[i], true); // 如果有该key值
    }else { 
        map.set(arr[i],false); // 如果没有该key值
        array.push(arr[i])
    }
}


// 解法6 filter
arr.filter(function(item,index) {
    return arr.indexOf(item) === index;
})

// 解法7 reduce
// reduce的第一个参数是回调函数，第二个参数是回调函数的第一个参数累加器的初始值
let newObj = arr.reduce((a,b) => {
    if(!a.includes(b)) {
        a.push(b);
    }
    return a;
},[])

console.log(newObj, '456')
