#!/usr/bin/env python3
"""
記事の修正スクリプト：
1. 「リーダーへの最終助言」を「総括」に置換
2. ポケモンの比喩を適度に調整
"""

import os
import re
from pathlib import Path

def fix_article(filepath):
    """ファイルを修正"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # 1. 「リーダーへの最終助言」を「総括」に置換
        content = content.replace('リーダーへの最終助言', '総括')
        
        # 2. ポケモン関連の調整
        
        # タイトルの「：ポケモン～」部分を削除または軽減
        # 例: "## AIチーム組成：ポケモン「最強パーティ」を組む技術" -> "## AIチーム組成"
        content = re.sub(r'(##[^:\n]+)：ポケモン[^\n]+', r'\1', content)
        
        # 「ポケモン世界における～の定義」を「～の定義」に変更
        content = re.sub(r'### 📝 ポケモン世界における([^\n]+)', r'### 📝 \1', content)
        
        # 表の「ポケモン的解釈」を「比喩」に変更
        content = content.replace('| ポケモン的解釈 |', '| 比喩 |')
        content = content.replace('|ポケモン的解釈|', '|比喩|')
        content = content.replace('ポケモン的解釈', '比喩')
        
        # 「**ポケモンでいえば**」パターンを削除または軽減
        # 例: "～です。**ポケモンでいえば**、～" -> "～です。例えば、～"
        content = re.sub(r'\*\*ポケモンでいえば\*\*、', '例えば、', content)
        content = re.sub(r'ポケモンでいえば、', '例えば、', content)
        
        # 「**『～』**」のような強調されたポケモン用語を通常の表現に
        # ただし、これは慎重に行う必要がある
        
        # 「ポケモン」という単語を含む文を一部調整
        # 「ポケモンマスターの知恵」を「まとめの知恵」に変更
        content = content.replace('**ポケモンマスターの知恵**', '**重要な知見**')
        content = content.replace('ポケモンマスター', 'エキスパート')
        
        # 変更があった場合のみ書き込み
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
        
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False

def main():
    """メイン処理"""
    docs_dir = Path('/workspace/src/content/docs')
    
    if not docs_dir.exists():
        print(f"Directory not found: {docs_dir}")
        return
    
    mdx_files = list(docs_dir.rglob('*.mdx'))
    print(f"Found {len(mdx_files)} .mdx files")
    
    modified_count = 0
    for filepath in mdx_files:
        if fix_article(filepath):
            modified_count += 1
            print(f"Modified: {filepath}")
    
    print(f"\nTotal modified: {modified_count} files")

if __name__ == '__main__':
    main()
