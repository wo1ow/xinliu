---
layout: page
title: 课程时间表
nav_order: 3
permalink: /schedule/
description: 芯流课程每周的上课、小组讨论与答疑安排
---

# 上课与答疑

本页用于查看每周固定的上课、讨论与答疑时间。
各周的学习内容、讲义和作业请查看[首页课程安排]({{ '/' | relative_url }}#课程安排)。

**以下保留模板示例时间，尚未替换为芯流实际安排；具体时间和地点请以上课通知为准。**

{% for schedule in site.schedules %}
{{ schedule }}
{% endfor %}
