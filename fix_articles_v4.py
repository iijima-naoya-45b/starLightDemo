#!/usr/bin/env python3
"""
記事の修正スクリプト（第4版）：
「最強」などの過度な表現を調整
"""

import os
import re
from pathlib import Path

def fix_strong_expressions(content):
    """過度な表現を調整"""
    
    replacements = {
        '最強の道具': '適切なツール',
        '最強の': '最適な',
        '最強': '最適',
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
        
        # 過度な表現を調整
        content = fix_strong_expressions(content)
        
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
