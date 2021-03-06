# [17] 电话号码的字母组合

> [电话号码的字母组合](https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/description/)

给定一个仅包含数字`2-9`的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

![](https://assets.leetcode-cn.com/aliyun-lc-upload/original_images/17_telephone_keypad.png)

**示例:**

```
输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
```

**说明:**  
尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。

## 思考

本题就是典型的扩展结果题，利用递归就可以很简单的解答。

## 代码

```java
import java.util.LinkedList;
import java.util.List;

/*
 * @lc app=leetcode.cn id=17 lang=java
 *
 * [17] 电话号码的字母组合
 *
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (50.20%)
 * Likes:    493
 * Dislikes: 0
 * Total Accepted:    58.1K
 * Total Submissions: 112.8K
 * Testcase Example:  '"23"'
 *
 * 给定一个仅包含数字2-9的字符串，返回所有它能表示的字母组合。
 *
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 *
 *
 *
 * 示例:
 *
 * 输入："23"
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 *
 *
 * 说明:
 * 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
 *
 */

// @lc code=start
class Solution {

  int[][] map = {
    {},
    { 'a', 'b', 'c' },
    { 'd', 'e', 'f' },
    { 'g', 'h', 'i' },
    { 'j', 'k', 'l' },
    { 'm', 'n', 'o' },
    { 'p', 'q', 'r', 's' },
    { 't', 'u', 'v' },
    { 'w', 'x', 'y', 'z' },
  };

  public List<String> letterCombinations(String digits) {
    List<String> list = new LinkedList<String>();
    if (digits == null || digits.length() <= 0) {
      return list;
    }
    this.combination(list, digits, "");
    return list;
  }

  public void combination(List<String> list, String digits, String str) {
    if (digits.length() <= str.length()) {
      list.add(str);
      return;
    }
    int index = digits.charAt(str.length()) - '1';
    for (int i = 0; i < map[index].length; i++) {
      this.combination(list, digits, str + (char) map[index][i]);
    }
  }
}
// @lc code=end

```
