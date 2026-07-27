#!/usr/bin/env python3
"""
記事の修正スクリプト（第3版）：
残りのポケモン関連表現を調整
"""

import os
import re
from pathlib import Path

def fix_pokemon_references(content):
    """残りのポケモン関連表現を調整"""
    
    # トレーナー関連の表現
    replacements = {
        '最強のトレーナー': '最高のエンジニア',
        'トレーナー': '開発者',
        
        # 戦闘・ジム関連
        '戦う': '取り組む',
        'ジム': '課題',
        
        # その他のポケモン特有表現
        'モンスターボール': '適切なツール',
        'マスターボール': '最適なツール',
        '学習装置': '自動化ツール',
        'そらをとぶ': '効率化機能',
        'メガシンカ級': '非常に高度な',
        'わざマシン': '開発ツール',
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
        
        # ポケモン表現を一般化
        content = fix_pokemon_references(content)
        
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
