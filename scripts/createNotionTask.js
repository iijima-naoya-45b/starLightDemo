import { Client } from '@notionhq/client';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Notion APIクライアントを初期化する関数
 * @returns {Client} Notion APIクライアント
 * @throws {Error} 環境変数が設定されていない場合にエラーをスロー
 */
function initializeNotionClient() {
  const notionApiToken = process.env.NOTION_API_TOKEN;
  
  if (!notionApiToken) {
    throw new Error(
      'エラー: NOTION_API_TOKEN環境変数が設定されていません。\n' +
      '設定方法:\n' +
      '1. .envファイルを作成\n' +
      '2. NOTION_API_TOKEN=your_token をファイルに追加\n' +
      '3. Notion Integration Tokenは https://www.notion.so/my-integrations から取得できます'
    );
  }
  
  return new Client({ auth: notionApiToken });
}

/**
 * データベースIDを取得する関数
 * @returns {string} データベースID
 * @throws {Error} 環境変数が設定されていない場合にエラーをスロー
 */
function getDatabaseId() {
  const databaseId = process.env.NOTION_DATABASE_ID;
  
  if (!databaseId) {
    throw new Error(
      'エラー: NOTION_DATABASE_ID環境変数が設定されていません。\n' +
      '設定方法:\n' +
      '1. .envファイルにNOTION_DATABASE_ID=your_database_id を追加\n' +
      '2. Database IDはデータベースページのURLから取得できます\n' +
      '   例: https://www.notion.so/workspace/{database_id}?v=...'
    );
  }
  
  return databaseId;
}

/**
 * サンプルタスクをNotion DBに作成する関数
 * @param {Client} notionClient - Notion APIクライアント
 * @param {string} databaseId - データベースID
 * @returns {Promise<object>} 作成されたページオブジェクト
 */
async function createSampleTask(notionClient, databaseId) {
  try {
    console.log('サンプルタスクを作成中...');
    console.log(`データベースID: ${databaseId}`);
    
    const currentDate = new Date();
    const taskTitle = `サンプルタスク - ${currentDate.toLocaleString('ja-JP')}`;
    
    const response = await notionClient.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: taskTitle,
              },
            },
          ],
        },
        Status: {
          status: {
            name: '未着手',
          },
        },
        Priority: {
          select: {
            name: '中',
          },
        },
        Description: {
          rich_text: [
            {
              text: {
                content: 'これはNotion APIを使用して自動作成されたサンプルタスクです。',
              },
            },
          ],
        },
      },
    });
    
    console.log('✅ サンプルタスクが正常に作成されました！');
    console.log(`タスクID: ${response.id}`);
    console.log(`タスクURL: ${response.url}`);
    
    return response;
  } catch (error) {
    console.error('❌ サンプルタスクの作成中にエラーが発生しました');
    console.error(`エラー名: ${error.name}`);
    console.error(`エラーメッセージ: ${error.message}`);
    
    if (error.code === 'object_not_found') {
      console.error(
        '\n詳細:\n' +
        '指定されたデータベースが見つかりませんでした。\n' +
        '以下を確認してください:\n' +
        '1. NOTION_DATABASE_IDが正しいか\n' +
        '2. Integrationがデータベースにアクセス権限を持っているか\n' +
        '   (データベースページの右上の「...」→「接続を追加」から設定)'
      );
    } else if (error.code === 'unauthorized') {
      console.error(
        '\n詳細:\n' +
        '認証に失敗しました。\n' +
        '以下を確認してください:\n' +
        '1. NOTION_API_TOKENが正しいか\n' +
        '2. Tokenが有効期限内か'
      );
    } else if (error.code === 'validation_error') {
      console.error(
        '\n詳細:\n' +
        'プロパティの検証に失敗しました。\n' +
        'データベースのプロパティ構成を確認してください:\n' +
        '- Name (タイトル)\n' +
        '- Status (ステータス)\n' +
        '- Priority (セレクト)\n' +
        '- Description (テキスト)'
      );
    }
    
    throw error;
  }
}

/**
 * メイン処理を実行する関数
 */
async function main() {
  try {
    console.log('=== Notion API サンプルタスク作成スクリプト ===\n');
    
    const notionClient = initializeNotionClient();
    const databaseId = getDatabaseId();
    
    await createSampleTask(notionClient, databaseId);
    
    console.log('\n=== 処理が正常に完了しました ===');
  } catch (error) {
    console.error('\n=== 処理が失敗しました ===');
    console.error(error.message);
    process.exit(1);
  }
}

main();
