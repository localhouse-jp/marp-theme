---
marp: true
theme: localhouse-blue
themeSet: ./src/localhouse-blue.css
class: lead
paginate: true
html: true
---

<script type="module">
  import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
  mermaid.initialize({
  startOnLoad: true,
  flowchart: {
    useMaxWidth: true,
    htmlLabels: true,
    nodeSpacing: 80,
    rankSpacing: 80,
    padding: 10,
    curve: 'basis'
  },
  sequence: {
    useMaxWidth: true,
    width: 150
  },
  gantt: {
    useMaxWidth: true,
    fontSize: 14
  },
  fontFamily: 'LINE Seed JP, Helvetica Neue, Arial, sans-serif',
  fontSize: 16
});
</script>

# 技術プレゼンタイトル
### 副題 / サブタイトル

- 発表者: あなたの名前
- 日付: 2025/07/29

---

## Agenda

1. 背景
2. 技術概要
3. 実装
4. 結果と今後

---

## システム構成図

<div class="mermaid">
flowchart TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
</div>

---

## 背景

- なぜこの技術を採用するのか
- 既存の課題や問題点
- 解決したいこと

---

## 技術概要

- 技術スタック  
  - **言語**: Python, Go, Rust
  - **フレームワーク**: React, Next.js
- アーキテクチャ  
  - マイクロサービス構成
  - コンテナ活用 (Docker / Kubernetes)

---

## 実装例

```python
# デモ用のPythonコード
def hello(name: str) -> str:
    return f"Hello, {name}!"

print(hello("Marp"))
````

---

## 結果

* パフォーマンス: **2倍向上**
* コスト: **30%削減**
* ユーザー満足度: **95%**

---

## 今後の展望

* 継続的改善
* 新機能の追加
* コミュニティ連携

---

## まとめ

* 課題と解決策を明確化
* 技術導入により改善達成
* 今後の展望も見えている

---

# 質問？

---

## Contact

* **Email**: [example@example.com](mailto:example@example.com)
* **GitHub**: [yourname](https://github.com/yourname)
