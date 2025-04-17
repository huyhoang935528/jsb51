# Khai báo 
> Cách 1" `const obj = { 'full-name': 'abc', age: 1010 :}`

> Cách 2: Khai báo = object construtor `const obj = new Object()` 
 > Cách 3: khai báo bằng Object create `const obj = Object.create({name: 'abc'})`
# Try xuất thuộc tính
> cách1: dùng dấu call(.) `obj.full-name`
- **LƯu Ý**: chỉ use cho thuộc tính có tên đúng quy tắt, gọi trong trường hợp biết trc tên thuộc tính
> Cách 2: dúng dấu bracket ([]) `obj['name]`
- **Lưu Ý**: sử dụng khi tên thuộc tính đặt không đúng quy tắc / không biết trước tên thuộc tính cần gọi

# Duyệt Object
- for in: duyệt qua từng thuộc tính trong obj
```js
for (const.key in obj){
    cốnle.log(key, obj[key])
}
```
# Thêm thuộc tính
> cách 1: dùng dấu call(.)`obj.name = 'abc'`

> cách 2: dùng dấubraket([])`obj['full-name'] = 'Nguyễn Van A' `

# Cập nhật gtri thuộc tínhtính
> cách 1: dùng dấu call(.)`obj.name = 'cdfcdf'`

> cách 2: dùng dấubraket([])`obj['full-name'] = 'Nguyễn Van ss' `

# Tìm kím gti thuộc tính
> cách 1: dfung toán tử `in`
```js
if('age' in obj){
    cốnle.log(true);
}
```
> cách2: dùng phương thức `hasOwnproperty()`
```js
if (obj.hasOwnproperty('age')){
    console.log(true)

}
```

# Xóa thuộc tính
```js
delete obj['full-name']; // sau khi xóa xog thì thì return lại True
delete obj.ageage
```
# Tạo bản sao
- Giải thích: do obj và arr là kỉu dữ liệu tham chíu ( chỉ lưu địa chỉm không lưu gtri) => nếu `const new_obj = ` old_obj` thì **không tạo bản sao mà chỉ lưu địa chỉ** của old_obj vào new_obj => khi **thay đổi old_obj thì new_obj cũng thay đổi**, và ngược lại
> cách 1: dùng phương thức `Object.asign()`
```js
const obj2 = Object.assign({}, obj);
```
> Cách 2: dùng spread operator (toán tử...)
```js
const obj2 = {...obj, ...obj1}; // gộp obj và obj1
```