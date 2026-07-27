#!/usr/bin/env python3
"""
記事の修正スクリプト（第2版）：
本文中のポケモン用語を一般的な表現に置き換える
"""

import os
import re
from pathlib import Path

def fix_pokemon_references(content):
    """ポケモン関連の表現を一般的な表現に置き換える"""
    
    # パターン1: 定義文の調整
    # 「6匹の最強パーティ」などの表現を削除または簡素化
    content = re.sub(r'「6匹の最強パーティを組む技術」', '「最適なチーム構成を実現する技術」', content)
    content = re.sub(r'6匹の最強パーティ', '最適なチーム構成', content)
    
    # パターン2: ポケモンのタイプや技に関する表現
    content = re.sub(r'「物理アタッカー・特殊アタッカー・壁貼り・起点作り・ストッパー・エース」', '「異なる役割と専門性を持つメンバー」', content)
    content = re.sub(r'物理アタッカー・特殊アタッカー[^」]+」', '異なる役割を持つメンバー」', content)
    
    # パターン3: ポケモン特有の用語を一般化
    replacements = {
        '「ブリーダー」': '「育成者」',
        '「トレーナー」': '「運用担当者」',
        '「サポーター」': '「支援役」',
        '「ジムリーダー」': '「意思決定者」',
        'ポケモンを育成・厳選': '人材を育成',
        '育成個体を実戦投入': '成果物を実運用',
        'ポケモンに経験値を与える': 'データを提供する',
        'どのジムに挑むか': 'どの課題に取り組むか',
        '「最小パーティ」': '「最小構成」',
        '「バランスパーティ」': '「バランス型構成」',
        '「個体値厳選」': '「人材選定」',
        'ほのおタイプ6匹': '同じスキルセットの人材だけ',
        'みずジムで詰む': '特定の課題で行き詰まる',
        '同じタイプのポケモンだけでは勝てない': '同じスキルセットだけでは成功できない',
        'バランスの取れたパーティ': 'バランスの取れたチーム',
        '最強パーティを組み': '最適なチームを構築し',
        '最強パーティ': '最適なチーム',
        'パーティ': 'チーム',
        'ポケモン': '要素',
        'タイプ': '種類',
    }
    
    for old, new in replacements.items():
        content = content.replace(old, new)
    
    # パターン4: descriptionフィールド内のポケモン表現
    # description: "～。ポケモンの～。" -> description: "～。"
    content = re.sub(
        r'(description:\s*"[^"]*?)。ポケモンの[^"]*?"',
        r'\1。"',
        content
    )
    
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
