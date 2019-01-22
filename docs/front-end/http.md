# http

## http1.0 和 http1.1 区别：

- 缓存处理，在 HTTP1.0 中主要使用 header 里的 If-Modified-Since，Expires 来做为缓存判断的标准，HTTP1.1 则引入更多缓存控制策略，例如 Entity tag,If-Match,If-None-Match 等
- Http1.1 支持长连接和请求的流水线（pipeline）处理，在一个 TCP 连接上可以传送多个 HTTP 请求和响应，减少了建立和关闭连接的消耗和延迟，默认开启 Connection:keep-alive

## http2.0 和 https

与 HTTP/1 相比，主要区别包括

- HTTP/2 采用二进制格式而非文本格式（二进制协议解析起来更高效）
- HTTP/2 是完全多路复用的，即一个 TCP 连接上同时跑多个 HTTP 请求
- 使用报头压缩，HTTP/2 降低了开销
- HTTP/2 让服务器可以将响应主动“推送”到客户端缓存中，支持服务端推送（就是服务器可以对一个客户端请求发送多个响应）

HTTPS 协议是由 SSL+HTTP 协议构建的可进行加密传输、身份认证的网络协议，TLS/SSL 中使用 了非对称加密，对称加密以及 HASH 算法。比 http 协议安全。

HTTPS 的工作原理

HTTPS 在传输数据之前需要客户端（浏览器）与服务端（网站）之间进行一次握手，在握手过程中将确立双方加密传输数据的密码信息

什么是 keep-alive 模式 （持久连接，连接重用）

- keep-alive 使客户端到服务端的连接持久有效，当出现对服务器的后继请求时，keep-alive 功能避免了建立或者重新连接
- 不需要重新建立 tcp 的三次握手，就是说不释放连接
- http1.0 默认关闭，http1.1 默认启用
- 优点：更高效，性能更高。因为避免了建立/释放连接的开销

## TCP 传输的三次握手四次挥手策略

为了准确无误地把数据送达目标处，TCP 协议采用了三次握手策略。用 TCP 协议把数据包送出去后，TCP 不会对传送 后的情况置之不理，它一定会向对方确认是否成功送达。握手过程中使用了 TCP 的标志：SYN 和 ACK。

发送端首先发送一个带 SYN 标志的数据包给对方。接收端收到后，回传一个带有 SYN/ACK 标志的数据包以示传达确认信息。 最后，发送端再回传一个带 ACK 标志的数据包，代表“握手”结束。 若在握手过程中某个阶段莫名中断，TCP 协议会再次以相同的顺序发送相同的数据包。

## GET、POST、PUT、Delete

1. GET 请求会向数据库获取信息，只是用来查询数据，不会修改，增加数据。使用 URL 传递参数，对所发送的数量有限制，一般在 2000 字符
2. POST 向服务器发送数据，会改变数据的种类等资源，就像 insert 操作一样，会创建新的内容，大小一般没有限制，POST 安全性高，POST 不会被缓存
3. PUT 请求就像数据库的 update 操作一样，用来修改数据内容，不会增加数据种类
4. Delete 用来删除操作

## GET 和 POST 的区别

1. GET 使用 URL 或 Cookie 传参，而 POST 将数据放在 BODY 中，这个是因为 HTTP 协议用法的约定。并非它们的本身区别。
2. GET 方式提交的数据有长度限制，则 POST 的数据则可以非常大，这个是因为它们使用的操作系统和浏览器设置的不同引起的区别。也不是 GET 和 POST 本身的区别。
3. POST 比 GET 安全，因为数据在地址栏上不可见，这个说法没毛病，但依然不是 GET 和 POST 本身的区别。

GET 和 POST 最大的区别主要是 GET 请求是幂等性的，POST 请求不是。（幂等性：对同一 URL 的多个请求应该返回同样的结果。）因为 get 请求是幂等的，在网络不好的隧道中会尝试重试。如果用 get 请求增数据，会有重复操作的风险，而这种重复操作可能会导致副作用

## http 报头有哪些

请求头：

1. Accept
2. Cache-control
3. Host
4. User-agent
5. Accenp-Language

响应头：

1. Cache-Control:max-age 避免了服务端和客户端时间不一致的问题。
2. content-type
3. Date
4. Expires
5. Last-Modified 标记此文件在服务期端最后被修改的时间

httpOnly 设置 cookie 是否能通过 js 去访问。在客户端是不能通过 js 代码去设置一个`httpOnly`类型的 cookie 的，这种类型的 cookie 只能通过服务端来设置。在发生跨域时，cookie 作为一种 credential 信息是不会被传送到服务端的。必须要进行额外设置才可以。

## 代理和反向代理

正向代理： 用浏览器访问时，被残忍的 block，于是你可以在国外搭建一台代理服务器，让代理帮我去请求 google.com，代理把请求返回的相应结构再返回给我。

反向代理：反向代理服务器会帮我们把请求转发到真实的服务器那里去。Nginx 就是性能非常好的反向代理服务器，用来做负载均衡。
正向代理的对象是客户端，反向代理的对象是服务端

## Restful

REST（Representational State Transfer）

REST 的意思是表征状态转移，是一种基于 HTTP 协议的网络应用接口风格，充分利用 HTTP 的方法实现统一风格接口的服务，HTTP 定义了以下 8 种标准的方法：

- GET：请求获取指定资源
- HEAD：请求指定资源的响应头
- PUT ：请求服务器存储一个资源
- 根据 REST 设计模式，这四种方法通常分别用于实现以下功能：
- GET（获取），POST（新增），PUT（更新），DELETE（删除）

## HTTP 协议的主要特点

- 简单快速
- 灵活
- 无连接
- 无状态

## HTTP 报文的组成部分

请求报文
请求行：http 方法、页面地址、http 协议以及版本
请求头：一些 key、value 值，告诉浏览器请求什么内容
空行：
请求体：

响应报文
状态行
响应头
空行
响应体

## HTTP 方法

- get -- 获取资源
- post -- 传输资源
- put -- 更新资源
- delete -- 删除资源
- head -- 获得报文首部

## POST 和 GET 的区别

- get 在浏览器回退时无害的，而 post 会再次提交请求
- get 产生的 url 地址可以被收藏，而 post 不可以
- get 请求会被浏览器主动缓存，而 post 不会，除非手动设置
- get 请求只能进行 URL 编码，而 post 支持多种编码方式
- get 请求参数会被完整保留在浏览器历史记录里，而 post 中的参数不会被保留
- get 请求在 URL 传送的参数是有限制的，而 post 没有限制
- 对参数的数据类型，get 接受 ascii 字符，而 post 没有限制
- get 比 post 更不安全，因为参数直接暴露在 URL 上，所以不能用来传递敏感信息
- get 参数通过 URL 传递，post 放在 Request body 中

## HTTP 状态码

- 200 OK：客户端请求成功
- 206 Partial Content：客户发送了一个带有 Range 头的 get 请求，服务器完成了它
- 301 Moved Permanently：所有的页面已经转移至新的 URL
- 302 Found： 所请求的页面已经临时转移至新的 URL
- 303 See Other 临时重定向，期望使用 GET 定向获取
- 304 Not Modified：客户端有缓冲的文档并发出了一个条件性的请求，服务器告诉客服，原来缓冲的文档还可以继续使用
- 400 Bad Request：客户端请求有语法错误，不能够被服务器所理解
- 401 Unauthorized：请求未经授权，这个状态码必须和 WWW-Authenticate 报头域一起使用
- 403 Forbidden： 对被请求页面的访问被禁用
- 404 Not Found：请求的资源不存在
- 405 (方法禁用) 禁用请求中指定的方法。
- 500 Internal Server Error：服务器发生不可预期的错误原来缓冲的文档还可以继续使用
- Server Unavailable：请求未完成，服务器临时过载或宕机，一段时间后可能恢复正常
- 501 (尚未实施) 服务器不具备完成请求的功能。 例如，服务器无法识别请求方法时可能会返回此代码。
- 502 (错误网关) 服务器作为网关或代理，从上游服务器收到无效响应。
- 503 (服务不可用) 服务器目前无法使用(由于超载或停机维护)。 通常，这只是暂时状态。
- 504 (网关超时) 服务器作为网关或代理，但是没有及时从上游服务器收到请求。

## 什么是持久连接

- HTTP 协议采用请求-应答模式，当使用普通模式，即非 Keep-Alive 模式时，每一个请求/应答客户端和服务器都要新建一个连接，完成之后立即断开连接（HTTP 协议为无连接协议）
- 当使用 Keep-Alive 模式（又称持久连接、连接重用）时，Keep-Alive 功能是客户端到服务器端的连接持续有效，当出现对服务器的后继请求时，Keep-Alive 功能避免了建立或者重新建立连接

## 什么是管线化

- 在使用持久连接的情况下，某个连接消息的传递类似于
- 请求 1 --> 响应 1 --> 请求 2 --> 响应 2 --> 请求 3 --> 响应 3
- 某个连接上的消息变成了类似这样的
- 请求 1 --> 请求 2 --> 请求 3 --> 响应 1 --> 响应 2 --> 响应 3
- 管线化机制通过持久连接完成，仅 HTTP/1.1 支持此技术
- 只有 get 和 head 请求何以进行管线化，而 post 则有所限制
- 车次创建连接时不应启动管线化机制，以为对方（服务器）不一定支持 HTTP/1.1 版本的协议
- 管线化不会影响响应到来的顺序如上面的例子所示，响应返回的舒徐未发生改变
- HTTP/1.1 要求服务器端支持管线化，但并不要求服务器端也对应响应进行管线化处理，只是要求对管线化的请求不失败即可
- 由于上面提到服务器端问题，开启管线化很可能会带来大幅度的性能升，而且很多服务器端和代理程序对管线化的支持并不好，一次现代浏览器如 Chrome 和 Firefox 默认并为开启管线化支持