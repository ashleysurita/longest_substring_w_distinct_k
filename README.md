# longest_substring_w_distinct_k

### Problem
https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/
```
Q. Given a string you need to print longest possible substring that has exactly M unique characters. If there are more than one substring of longest possible length, then print any one of them.

Examples:
• Given a string = "aabbcc" & k = 1 // returns "aa"
• Given a string = "aabbcc" & k = 2 // returns "aabb"

// Test Cases
test.startProblem("Longest Substring with at most Ks")
test.test('cc', longestSubstringWithDistinctKs("aabbcc", 1), 1)
test.test("bbcc", longestSubstringWithDistinctKs("aabbcc", 2), 2)
test.test("aabbcc", longestSubstringWithDistinctKs("aabbcc", 3), 3)
test.endProblem()
```
