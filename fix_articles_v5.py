#!/usr/bin/env python3
"""
記事の修正スクリプト（第5版）：
不自然な表現を修正
"""

import os
import re
from pathlib import Path

def fix_unnatural_expressions(content):
    """不自然な表現を修正"""
    
    # パターン1: descriptionフィールドの修正
    # "要素の「適切なツール」" -> より自然な表現
    content = re.sub(
        r'要素の「適切なツール」を使いこなす',
        '適切なツールを使いこなす',
        content
    )
    
    # パターン2: 「要素を捕まえる」などの不自然な表現
    content = re.sub(
        r'要素を捕まえようとする',
        '開発を行おうとする',
        content
    )
    content = re.sub(
        r'適切なツールなしで要素を',
        '適切なツールなしで',
        content
    )
    
    # パターン3: 残っているポケモン特有の表現
    replacements = {
        '全種類をカバー': '全領域をカバー',
        'どの種類': 'どの領域',
    }
    
    for old, new in replacements.items():
        content = content.replace(old, new)
    
    return content

def fix_article(filepath):
    """ファイルを修正"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # 不自然な表現を修正
        content = fix_unnatural_expressions(content)
        
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
