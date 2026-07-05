<p align="center">
  <a href="https://kumatype-shindan.xyz">
    <img src="assets/logo/favicon.ico" alt="Kuma Type Shindan 标志" width="72" height="72">
  </a>
</p>

<h1>
  Kuma Type Shindan 数据
  <a href="README.zh-CN.md"><img align="right" alt="简体中文" src="https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-current-f48fb1?style=flat-square"></a>
  <a href="README.en.md"><img align="right" alt="English" src="https://img.shields.io/badge/English-README-ff8fab?style=flat-square"></a>
  <a href="README.md"><img align="right" alt="日本語" src="https://img.shields.io/badge/%E6%97%A5%E6%9C%AC%E8%AA%9E-README-ff8fab?style=flat-square"></a>
</h1>

这是简体中文翻译。如果内容和日文 README 不一致，以日文版本为准。Kuma Type Shindan 目前没有中文官网页面，所以本 README 的官网入口会链接到日文主页面。

Kuma Type Shindan 数据仓库收录了独立诊断与参考站点 [恋するへびべあ診断（日文主站）](https://kumatype-shindan.xyz) 的公开数据、图片素材和计分规则。开发者、测试作者、翻译审校者和用户可以在这里检查 20 题 Kuma 恋爱类型诊断、16 个熊类型记录、结果列表、相性分数和公开参考素材。

这不是完整的 Next.js 网站源码。仓库不包含部署配置、环境变量、统计分析、支付代码、内部 UI 组件或私有运营资料。

## 为什么存在这个仓库

Kuma Type Shindan 是一个浏览器诊断和公开参考站点，但诊断数据和计分行为应该可以被检查，而不需要公开私有生产应用。这个公开包提供：

- 透明的问题、类型、相性和计分数据。
- 用于文档审查的公开图片和截图。
- 一个可以复现已发布结果行为的小型计分 helper。
- 用来稳定公开包结构和 public/private 边界的测试。
- 用于数据修正、文档修正和公开素材反馈的安全 issue 路径。

## 数据和工具目录

| 资源 | 用途 | 关键内容 | 链接 |
| --- | --- | --- | --- |
| 问题数据 | 诊断模型检查 | 20 个公开问题、轴和 positive pole 元数据 | [questions.json](data/questions.json) |
| Kuma 类型 | 结果内容检查 | 16 个类型的名称、slug、描述、特征、分组和相性链接 | [kuma-types.json](data/kuma-types.json) |
| 素材 manifest | 公开素材审查 | 从站点项目带出的图片和字体来源元数据 | [asset-manifest.json](data/asset-manifest.json) |
| 计分 helper | 结果复现 | 用于结果和相性计算的公开 JavaScript helper | [scoring.mjs](src/scoring.mjs) |
| 计分文档 | 人类可读规则 | 轴计分、平局行为、相性计分和标签 | [docs/scoring.md](docs/scoring.md) |
| 公开边界文档 | public/private 分离 | 本仓库有意包含和排除的内容 | [docs/public-boundary.md](docs/public-boundary.md) |
| 公开检查 | 回归保护 | 针对计分和仓库边界的 Node 测试 | [tests](tests) |

## 使用场景

- 检查每道题映射到 `EI`、`SN`、`TF`、`JP` 中的哪个轴。
- 在 live 网站之外复现结果代码计算。
- 审查全部 16 个 Kuma 类型记录和公开相性关系。
- 理解为什么全中立回答会得到 `INFP`。
- 在不发布私有账号或安全信息的情况下，报告公开数据、文档或素材引用修正。

## 三步开始

1. 查看 [data](data) 目录中的数据文件，尤其是 [questions.json](data/questions.json) 和 [kuma-types.json](data/kuma-types.json)。
2. 阅读 [docs/scoring.md](docs/scoring.md)，或 import [src/scoring.mjs](src/scoring.mjs) 来复现结果行为。
3. 在提出数据或计分变更前运行公开检查：

```bash
npm test
```

## 视觉预览

![Kuma Type Shindan 桌面诊断首页](assets/screenshots/home-desktop.png)

还可以查看 [16 类型列表](assets/screenshots/types-mobile.png)、[相性工具](assets/screenshots/compatibility-mobile.png) 和 [结果页](assets/screenshots/result-mobile.png) 的公开截图。

## 官方链接

| 目的 | 链接 |
| --- | --- |
| 官网首页（日文主语言） | [恋するへびべあ診断（日文主站）](https://kumatype-shindan.xyz) |
| 英文首页 | [KUMA Love Type Quiz](https://kumatype-shindan.xyz/en) |
| 16 类型列表（日文主语言） | [くまタイプ診断 MBTI 16タイプ一覧](https://kumatype-shindan.xyz/types) |
| 相性诊断（日文主语言） | [くまタイプ相性一覧](https://kumatype-shindan.xyz/compatibility) |
| 主 GitHub 仓库 | [Kuma Type Shindan Data on GitHub](https://github.com/kumatype-shindan/kuma-type-data) |
| 支持说明 | [SUPPORT.md](SUPPORT.md) |
| 安全报告说明 | [SECURITY.md](SECURITY.md) |

## 官方镜像

GitHub 是 canonical 公开仓库。其他镜像用于不同平台的发现和公开安全反馈。

| 平台 | 链接 | 用途 |
| --- | --- | --- |
| GitHub | [kumatype-shindan/kuma-type-data](https://github.com/kumatype-shindan/kuma-type-data) | canonical 公开数据包 |
| GitLab | [GitLab 上的 kuma-type-data](https://gitlab.com/nano-products/kuma-type-data) | GitLab 镜像和 issue 场景 |
| Codeberg | [Codeberg 上的 kuma-type-data](https://codeberg.org/nano-products/kuma-type-data) | Forgejo/Codeberg 发现镜像 |
| Gitee | [Gitee 上的 kuma-type-data](https://gitee.com/nano-products/kuma-type-data) | 中文平台镜像 |
| GitCode | [GitCode 上的 kuma-type-data](https://gitcode.com/weixin_52314137/kuma-type-data) | 中文开发者发现镜像 |
| Bitbucket | [Bitbucket 上的 kuma-type-data](https://bitbucket.org/nano-products/kuma-type-data) | Bitbucket 镜像 |
| SourceHut | [SourceHut 上的 kuma-type-data](https://git.sr.ht/~chrisv/kuma-type-data) | clone-first 镜像 |
| Launchpad | [Launchpad 上的 kuma-type-data](https://code.launchpad.net/~nano-products/+git/kuma-type-data) | 分支导向镜像 |
| Disroot Git | [Disroot Git 上的 kuma-type-data](https://git.disroot.org/nano-products/kuma-type-data) | 低噪音镜像 |

## 计分能力

答案应为 `-2` 到 `2` 之间的数字。每个问题属于 `EI`、`SN`、`TF` 或 `JP` 中的一个轴。正向答案给问题的 positive pole 加分，负向答案给相反 pole 加分。最终结果代码由每个轴获胜的 pole 组成。

当某个轴平局时，已发布实现会选择第二个 pole，因为比较逻辑使用 `>` 而不是 `>=`。因此全中立回答会得到 `INFP`。

```js
import questions from "./data/questions.json" with { type: "json" };
import { calculateKumaResultCode } from "./src/scoring.mjs";

const resultCode = calculateKumaResultCode([2, 1, 0, -1, -2], questions);
```

## 仓库边界

包含：

- 20 个问题和轴元数据。
- 16 个 Kuma 类型记录。
- 相性组合计分规则。
- 公开图片素材和部分预览截图。
- 证明数据形状和公开边界的测试。

不包含：

- `.env` 文件和部署 secrets。
- Next.js routes、UI components 等网站应用源码。
- Google Analytics、支付、checkout、数据库或供应商配置。
- 调试捕获和本地运行产物。

## 支持和安全

关于问题数据、类型记录、相性行为、公开素材引用或文档的公开安全修正，可以使用 GitHub Issues。

请不要在公开 issue 中发布私有账号数据、支付详情、分析导出、安全漏洞、私有日志或私有网站源码。私有支持或安全敏感报告请发送给 [Kuma Type Shindan support](mailto:support@kumatype-shindan.xyz)。

## 独立性说明

Kuma Type Shindan 是面向搜索 KUMA x 16 LOVE TYPES、Kuma love type quiz questions、16 Kuma type records、result lists 和 compatibility score explanations 的用户提供的独立诊断与参考站点。它并非由官方 KUMA 网站、NOIZU 或权利方运营。
