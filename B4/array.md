# Khai báo mảng
>cách 1: `const arr =[12, 'a', 0.5, false]`
>cách 2: `const arr = Array.of(12, 'a', 0.5, false)`

# try vấn
- `arr[index]` : lấy giá trị của ptu ở vị trí index
>Lấy phần tử ở vị trí thứ 2: `arr[1]`

# Duyệt ptu
- for i: duyệt bằng độ dài ptu => ** Duyệt cả ptu rỗng (undefined, null)**
```js
for(let i = 0; i < arr.length; i++){
    console.log(ar[i]); // in ra từng ptu trong ds
}
```
- for of: duyệt bằg ptu => ** Duyệt cả ptu rỗng**
```js
const empty_arr = Array(10); // ds gom 10 item undefinedundefined
for ( const item of arr){
    cốnle.log(item)
}
```
- for eacheach: duyệt bằg ptu => ** Duyệt cả ptu rỗng**
```js
const empty_arr = Array(10); // ds gom 10 item undef
empty_arr.forEach(item => console.log(item));
```
- map(ES6ES6): duyệt bằg ptu => ** Duyệt cả ptu rỗng ** +** return ds mới**
```js
const empty_arr = Array(10); // ds gom 10 item undef
empty_arr.forEach(item => console.log(item));
```
# Thêm ptu
-`push(new_item)`: thêm ptu vào cúi ds( giống append bên py)
```js
arr.push(100); 
```
-`splice(start, 00, item1, item2,...itemN)` chènchèn ptu vào vị trí start
```js
arr.splice(2, 0, 100);// [ item1, item2, 100, item3,...]
```
# Cập nhật ptuptu
-`splice(start, 1, item1, item2,...itemN)` thaythay ptu vào vị trí start
```js
arr.splice(2, 1, 100)
```
-`arr[index] = new_item`: thay ptu ở vị trí index
```js
arr[2] = 12; // thay ptu thứ 3 thành 12
```


# Tìm kiếm ptu
-`indexOf(item)`: tìm kím vị trí ptu item
```js
ar.indexOf('item3')//trả về indexx đâu tiên
```
# Xóa ptu
-` splice(start, n)`: xóa n tu ở vị trí start ==> ** return về ds đã bị cắt khỏi ds ban đầu**
```js
arr.splice(0, 2): // xóa 2 ptu bắt đầu từ vị trí 0
```

# Tạo bản sao
> Cách 1: sử dụng `slice` (ES5)
```js
const arr_clone = arr.slice(); 
```
> Cách 2: sử dụng spread operator (ES6)
```js
const arr_clone = [...arr, ...arr1]; // gộp 2 mảng arr, arr1 
```
> Cách 3: sử dụng `Array.from` (ES6)
```js
const arr_clone = Array.from(arr);
```
