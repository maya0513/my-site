export interface Work {
	title: string;
	url: string;
	/** 一覧で表示する短い説明 */
	description: string;
	/** featured のものは works ページ上部で厚めに紹介する（ポートフォリオ扱い） */
	featured?: boolean;
	/** featured の場合に表示する長い説明 */
	longDescription?: string;
}

// 公開している制作物をここに追加する
export const works: Work[] = [];
