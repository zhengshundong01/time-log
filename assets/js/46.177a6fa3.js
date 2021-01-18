(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{536:function(e,n,r){"use strict";r.r(n);var t=r(6),a=Object(t.a)({},(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"arrayblockingqueue"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#arrayblockingqueue"}},[e._v("#")]),e._v(" ArrayBlockingQueue")]),e._v(" "),r("p",[e._v("ArrayBlockingQueue 是一个由数组实现的 FIFO 有界阻塞队列，ArrayBlockingQueue 有界且固定，在构造函数时确认大小，确认后不支持改变，在多线程环境下不保证“公平性”。")]),e._v(" "),r("p",[r("strong",[e._v("实现方式")]),e._v("：ReentrantLock + Condition + 对象数组。")]),e._v(" "),r("h2",{attrs:{id:"linkedblockingqueue"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#linkedblockingqueue"}},[e._v("#")]),e._v(" LinkedBlockingQueue")]),e._v(" "),r("p",[e._v("LinkedBlockingQueue 是一个由双向链表实现的 FIFO 有界阻塞队列，是 ArrayBlockingQueue 的链表版本。")]),e._v(" "),r("p",[r("strong",[e._v("实现方式")]),e._v("：ReentrantLock + Condition + 双向链表。")]),e._v(" "),r("h2",{attrs:{id:"priorityblockingqueue"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#priorityblockingqueue"}},[e._v("#")]),e._v(" PriorityBlockingQueue")]),e._v(" "),r("p",[e._v("PriorityBlockingQueue 是支持优先级的无界阻塞队列，默认情况下元素采用自然顺序升序排序，可以通过指定 Comparator 来对元素进行排序。")]),e._v(" "),r("p",[e._v("采用二叉堆作为数据结构，添加操作则是不断“上冒”，而删除操作则是不断“下掉”。")]),e._v(" "),r("p",[r("strong",[e._v("实现方式")]),e._v("：ReentrantLock + Condition + 二叉堆。")]),e._v(" "),r("h2",{attrs:{id:"delayqueue"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#delayqueue"}},[e._v("#")]),e._v(" DelayQueue")]),e._v(" "),r("p",[e._v("DelayQueue 是支持延时获取元素的无界阻塞队列，使用优先队列进行存储。常用于清除超时的缓存数据或超时处理。")]),e._v(" "),r("p",[r("strong",[e._v("Delayed 接口")]),e._v("：该接口用来标记那些应该在给定延迟时间之后执行的对象，该接口要求实现它的实现类必须定义一个 compareTo 方法，该方法提供与此接口的 getDelay 方法一致的排序。")]),e._v(" "),r("p",[r("strong",[e._v("实现方式")]),e._v("：ReentrantLock + Condition + 根据 Delay 时间排序的优先级队列。")]),e._v(" "),r("h2",{attrs:{id:"synchronousqueue"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#synchronousqueue"}},[e._v("#")]),e._v(" SynchronousQueue")]),e._v(" "),r("p",[e._v("SynchronousQueue 是一个没有容量的阻塞队列，常用于交换工作，生产者的线程和消费者的线程同步以传递某些信息、事件或者任务。")]),e._v(" "),r("h2",{attrs:{id:"linkedtransferqueue"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#linkedtransferqueue"}},[e._v("#")]),e._v(" LinkedTransferQueue")]),e._v(" "),r("p",[e._v("LinkedTransferQueue 是链表组成的的无界阻塞队列。相当于 ConcurrentLinkedQueue、SynchronousQueue (公平模式下)、无界的 LinkedBlockingQueues 等的超集。")]),e._v(" "),r("p",[r("strong",[e._v("预占模式")]),e._v("：有就直接拿走，没有就占着这个位置直到拿到或者超时或者中断。")]),e._v(" "),r("h2",{attrs:{id:"linkedblockingdeque"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#linkedblockingdeque"}},[e._v("#")]),e._v(" LinkedBlockingDeque")]),e._v(" "),r("p",[e._v("LinkedBlockingDeque 是 LinkedBlockingQueue 的双向队列版本，由于双向的特性，可以实现任务窃取的工作模式。")])])}),[],!1,null,null,null);n.default=a.exports}}]);