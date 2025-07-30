---
theme: ./
highlighter: shiki
title: Localhouse Blue Theme Demo
author: Localhouse
keywords: slidev,presentation,theme
canvasWidth: 980
export:
  format: pdf
  timeout: 30000
  dark: false
  withClicks: false
fonts:
  sans: 'LINE Seed JP'
  serif: 'LINE Seed JP'
  mono: 'JetBrains Mono'
themeConfig:
  primary: '#003366'
  accent: '#0055A4'
  secondary: '#004488'
---

# Localhouse Blue Theme

プロフェッショナルなプレゼンテーション用テーマ

**Slidev版サンプル**

---
layout: section
---

# セクション タイトル

メインセクションの紹介

---

## コンテンツ サンプル

### 見出し3のサンプル

通常のテキストです。**太字テキスト**や*斜体テキスト*も表示できます。

- リスト項目 1
- リスト項目 2
  - サブ項目 A
  - サブ項目 B
- リスト項目 3

---

## コード表示サンプル

インラインコード: `console.log('Hello World')`

### 標準サイズのコード

```javascript
// JavaScriptコードサンプル
function greetUser(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
  return message;
}

greetUser('Slidev User');
```

---

## テーブル表示サンプル

| 項目 | 説明 | 値 |
|------|------|-----|
| テーマ | Localhouse Blue | プロフェッショナル |
| カラー | 企業ブルー | #003366 |
| フォント | LINE Seed JP | 日本語対応 |

---

## 引用文のサンプル

> これは引用文のサンプルです。
> 
> 複数行の引用も可能です。

リンクのサンプル: [Slidev公式サイト](https://sli.dev)

---

## Mermaidダイアグラム サンプル

```mermaid
graph TB
    subgraph "🏢 Development Environment"
        direction TB
        WebVM[🌐 Web Server<br/>dev-web-01<br/>VM: 2CPU/2GB RAM/20GB]
        DatabaseLXC[🗃️ Database<br/>dev-db-01<br/>LXC: 1CPU/1GB RAM/10GB]
        WebVM -.->|network| DatabaseLXC
    end
    
    subgraph "🔧 Staging Environment"  
        direction TB
        StagWeb[🌐 Web Server<br/>stag-web-01<br/>VM: Configurable]
        StagDB[🗃️ Database<br/>stag-db-01<br/>LXC: Configurable]
        StagWeb -.->|network| StagDB
    end
    
    subgraph "🚀 Production Environment"
        direction TB  
        ProdWeb[🌐 Web Server<br/>prod-web-01<br/>VM: Configurable]
        ProdDB[🗃️ Database<br/>prod-db-01<br/>LXC: Configurable]
        ProdWeb -.->|network| ProdDB
    end
    
    subgraph "🌐 Proxmox Infrastructure"
        Bridge[🔗 Network Bridge<br/>vmbr0]
        Storage[💾 Storage Pool]
        
        WebVM --- Bridge
        DatabaseLXC --- Bridge
        StagWeb --- Bridge  
        StagDB --- Bridge
        ProdWeb --- Bridge
        ProdDB --- Bridge
        
        WebVM --- Storage
        DatabaseLXC --- Storage
        StagWeb --- Storage
        StagDB --- Storage  
        ProdWeb --- Storage
        ProdDB --- Storage
    end
```



---
layout: center
---

# 中央レイアウト

このスライドは中央配置レイアウトを使用しています。

---
layout: two-cols
---

# 2カラム レイアウト

左側のコンテンツ：

- ポイント1
- ポイント2
- ポイント3

::right::

右側のコンテンツ：

- 詳細情報A
- 詳細情報B
- 詳細情報C

---
layout: quote
---

# "素晴らしいプレゼンテーションは、優れたテーマから始まる"

Localhouse Blue Theme

---
layout: end
---

# ありがとうございました

Localhouse Blue Theme for Slidev

**お疲れさまでした！**
