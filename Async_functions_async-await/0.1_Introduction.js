// Link tham khảo
// - https://viblo.asia/p/giai-thich-ve-asyncawait-javascript-trong-10-phut-1VgZvBn7ZAw
// - ebooks: jsnotesforprofessionals

// Async/Await là gì ?
// Async / Await là một tính năng của Javascript giúp chúng ta làm việc với các hàm bất đồng bộ theo cách thú vị hơn và dễ hiểu hơn. Nó được xây dựng trên Promises và tương thích với tất cả các Promise dựa trên API

// Async - Khai báo một hàm bất đồng bộ ( async function someName() ....)
// - Tự động biến đổi một hàm thông thường thành một Promise.
// - Khi gọi tới hàm async nó sẽ xử lý mọi thứ và được trả về kết quả trong hàm của nó.
// - Asyn cho phép sử dụng Await.
// Await  - Tạm dừng việc thực hiên các hàm async. ( var result = await someAsynCall() )
// - Khi được đặt trước một Promise, nó sẽ đợi cho đến khi Promise kết thúc và trả kết quả.
// - Await chỉ làm việc với Promise, nó không hoạt động với callbacks.
// - Await chỉ có thể được sử dụng bên trong các function async.

// Dưới đây là một ví dụ đơn giản mà hy vọng sẽ rõ ràng những điều trên:

// Giả sử chúng ta muốn lấy một số tệp JSON từ máy chủ của mình. Chúng ta sẽ viết một hàm sử dụng thư viện axios và gửi yêu cầu HTTP GET đến Https://tutorialzine.com/misc/files/example.json . Chúng ta phải chờ đợi phản hồi từ máy chủ, đây là một yêu cầu HTTP không đồng bộ.

// Dưới đây chúng ta sẽ viết cùng một chức năng với 2 cách khác nhau: cách thứ 1 với Promises, và cách thứ 2 với Async / Await


// cách 1:
