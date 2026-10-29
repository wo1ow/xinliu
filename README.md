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

<div id="xinliu-announcements">
<div class="announcement-controls" role="group" aria-label="公告切换">
<button type="button" id="announcement-prev" disabled>← 上一则</button>
<strong>最新公告</strong>
<button type="button" id="announcement-next" disabled>下一则 →</button>
</div>

<div aria-live="polite" aria-atomic="true">
{% assign announcements = site.announcements | sort: "date" | reverse %}
{% for announcement in announcements %}
<div class="announcement-slide">
{{ announcement }}
</div>
{% endfor %}
{% if site.announcements.size == 0 %}
<p>暂无公告。</p>
{% endif %}
</div>
</div>

<style>
#xinliu-announcements .announcement-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: 24px 0;
}

#xinliu-announcements .announcement-controls button {
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  padding: 8px 0;
}

#xinliu-announcements .announcement-controls button:disabled {
  opacity: 0.3;
  cursor: default;
}

#xinliu-announcements .announcement-controls button:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 4px;
}

#xinliu-announcements .announcement-slide[hidden] {
  display: none !important;
}
</style>

<script>
(() => {
  const root = document.getElementById("xinliu-announcements");
  const slides = root.querySelectorAll(".announcement-slide");
  const prev = root.querySelector("#announcement-prev");
  const next = root.querySelector("#announcement-next");
  let index = 0;

  if (slides.length === 0) return;

  function showAnnouncement() {
    slides.forEach((slide, position) => {
      slide.hidden = position !== index;
    });

    prev.disabled = index === slides.length - 1;
    next.disabled = index === 0;
  }

  prev.addEventListener("click", () => {
    if (index < slides.length - 1) {
      index++;
      showAnnouncement();
    }
  });

  next.addEventListener("click", () => {
    if (index > 0) {
      index--;
      showAnnouncement();
    }
  });

  showAnnouncement();
})();
</script>

## 课程安排

{% assign modules = site.modules | sort: "path" %}
{% for module in modules %}
{{ module }}
{% endfor %}
