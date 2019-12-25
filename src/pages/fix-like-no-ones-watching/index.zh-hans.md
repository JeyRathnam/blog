---
title: 无人监督的修理
date: '2019-02-15'
spoiler: 另一种形式的技术债。
---

某些技术债是非常显而易见的。

设计不佳的资料结构可能会导致复杂难懂的程式码。每当需求持续变动的时候，程式码可能会包含着为了完成先前需求所遗留下来的痕迹。某些程式码可能是在紧急或是单纯只是马虎的状况下完成的。

这种类型的技术债因为显而易见，所以是很容易被提出来讨论的。它会以某些形式呈现出来：例如程式错误、效能问题、或是难以在其中增加新的功能。

然而还有另一种阴险类型的技术债。

可能某组测试*有点*慢。它并没有慢到像爬行一般，但刚好足以让你觉得需要找出可能的问题并将它放进了待办事项(backlog)。也许你并不信任部署的脚本所以你跳过了额外的版本发布。或许抽象层让程式码难以找出实际的效能瓶颈所以你标注了 TODO 在程式码里。有时候单元测试太严格了，所以让你在上线了预计的功能之后才愿意尝试新的想法。

以上没有任何一个情况是严重到足以停止你的开发。它们仅会被视作一些令人分心的事物。抱怨这些事情令人感到徒劳无功。毕竟，如果它们*真的*很重要，尽管让你感到有阻力，你仍早就会完成那些事情，不是吗？

这些东西永远不会被完成。它们看起来不够重要。 **阻力会让它们消失。** 对于它们，某些尝试可能毫无结果，某些则会让你的项目因此改头换面。

你永远不知道结果会怎样。因此你必须主动减少阻力。你项目的命运往往由此决定。且这经常被验证。

无人监督的修理。