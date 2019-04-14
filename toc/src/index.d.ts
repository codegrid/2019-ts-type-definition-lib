interface TocItem {
  id: string;
  title: string;
  level: number;
}
export type TocList = TocItem[];

export interface Toc {
  getTocList: (context: HTMLElement) => TocList,
  getTocHtml: (context: HTMLElement) => string,
}

declare const toc: Toc;
export default toc;
