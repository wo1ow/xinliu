---
layout: home
title: 首页
nav_order: 1
permalink: /
---

# 芯流 · 计算机程序的构造与解释

2026 年秋季 · 芯流科创实验室

探索计算之美，体验创造之乐。

通过 Python 编程，学习函数、递归与数据抽象，
在项目中理解计算机程序如何工作。

## 最新公告

{% include announcements.html %}
<script src="{{ '/assets/js/announcements.js' | relative_url }}" defer></script>

## 课程安排

{% assign modules = site.modules | sort: "path" %}
{% for module in modules %}
{{ module }}
{% endfor %}
