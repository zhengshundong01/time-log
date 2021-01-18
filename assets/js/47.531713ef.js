(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{537:function(t,r,a){"use strict";a.r(r);var e=a(6),s=Object(e.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"cas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cas"}},[t._v("#")]),t._v(" CAS")]),t._v(" "),a("p",[a("strong",[t._v("CAS 即比较并交换")]),t._v("，是原子操作的一种，可用于在多线程编程中实现不被打断的数据交换操作，从而避免多线程同时改写某一数据时由于执行顺序不确定性以及中断的不可预知性产生的数据不一致问题。 该操作通过将内存中的值与指定数据进行比较，当数值一样时将内存中的数据替换为新的值。")]),t._v(" "),a("h3",{attrs:{id:"操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作"}},[t._v("#")]),t._v(" 操作")]),t._v(" "),a("p",[a("strong",[t._v("参数")]),t._v("：内存位置 V（它的值是我们想要去更新的）、预期原值 A（上一次从内存中读取的值）、新值 B（应该写入的新值）。")]),t._v(" "),a("p",[a("strong",[t._v("过程")]),t._v("：先从 V 中取值，与 A 比较，若相等则将 V 中的值更新成 B，若不相等则不更新，进入失败的操作流程（重试等）。")]),t._v(" "),a("h3",{attrs:{id:"缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),a("p",[a("strong",[t._v("ABA 问题")]),t._v("：由于 CAS 是通过比较来判断是否进行更新操作，如果一个值从 A 变成 B，然后又被改成 A，在 CAS 检查时会认为值是没变的，实际上是变化了。"),a("strong",[t._v("解决方案")]),t._v("：为每次操作都加上版本号，如果版本号有变，即使值没变也说明是有变化的。")]),t._v(" "),a("p",[a("strong",[t._v("循环时间长开销大")]),t._v("：如果自旋长时间不成功，则会给 CPU 带来很大的执行开销。"),a("strong",[t._v("解决方案")]),t._v("：应按场景进行调整，如升级为重量锁，或者直接失败。")]),t._v(" "),a("p",[a("strong",[t._v("只能保证一个值的原子操作")]),t._v("：如果有多个值需要同时操作，那么用 CAS 就无法简单解决了。"),a("strong",[t._v("解决方案")]),t._v("：可以对值进行合并，比如封装成一个对象等等。")]),t._v(" "),a("h2",{attrs:{id:"aqs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aqs"}},[t._v("#")]),t._v(" AQS")]),t._v(" "),a("p",[a("strong",[t._v("AQS 即 AbstractQueuedSynchronizer，同步器")]),t._v("，提供了原子式管理同步状态、阻塞和唤醒线程功能以及队列模型的简单框架。AQS 解决了子类实现同步器时涉及的大量细节问题，例如获取同步状态、FIFO 同步队列。采用模板方法模式，AQS 实现大量通用方法，子类通过继承方式实现其抽象方法来管理同步状态")]),t._v(" "),a("h3",{attrs:{id:"clh-同步队列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clh-同步队列"}},[t._v("#")]),t._v(" CLH 同步队列")]),t._v(" "),a("p",[t._v("AQS 内部维护着一个 FIFO 的队列，即 CLH 队列。AQS 的同步机制就是依靠 CLH 队列实现的。CLH 队列是 FIFO 的双端双向队列，实现公平锁。头节点是一个获取同步状态成功的节点。线程通过 AQS 获取锁失败，就会将线程封装成一个 Node 节点，插入队列尾。当有线程释放锁时，后唤醒头节点的 next 节点（第二个节点）尝试占用锁。")]),t._v(" "),a("h3",{attrs:{id:"同步状态获取与释放"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步状态获取与释放"}},[t._v("#")]),t._v(" 同步状态获取与释放")]),t._v(" "),a("p",[a("strong",[t._v("独占式")]),t._v("：获取同步状态 acquire、响应中断 acquireInterruptibly、超时获取 tryAcquireNanos、释放锁 release。")]),t._v(" "),a("p",[a("strong",[t._v("共享式")]),t._v("：获取锁 acquireShared、释放锁 releaseShared。")]),t._v(" "),a("h3",{attrs:{id:"线程阻塞和唤醒"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线程阻塞和唤醒"}},[t._v("#")]),t._v(" 线程阻塞和唤醒")]),t._v(" "),a("p",[t._v("当有线程获取锁了，其他再次获取时需要阻塞，当线程释放锁后，AQS 负责唤醒线程。")]),t._v(" "),a("p",[a("strong",[t._v("LockSupport")]),t._v("：LockSupport 是用来创建锁和其他同步类的基本线程阻塞原语。每个使用 LockSupport 的线程都会与一个许可关联，如果该许可可用，并且可在进程中使用，则调用 park()将会立即返回，否则可能阻塞。如果许可尚不可用，则可以调用 unpark 使其可用。")]),t._v(" "),a("h2",{attrs:{id:"扩展阅读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展阅读"}},[t._v("#")]),t._v(" 扩展阅读")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000023839912",target:"_blank",rel:"noopener noreferrer"}},[t._v("面试：为了进阿里，又把并发 CAS（Compare and Swap）实现重新精读一遍"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://tech.meituan.com/2019/12/05/aqs-theory-and-apply.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("从 ReentrantLock 的实现看 AQS 的原理及应用"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://tech.meituan.com/2019/02/14/talk-about-java-magic-class-unsafe.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 魔法类：Unsafe 应用解析"),a("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=s.exports}}]);