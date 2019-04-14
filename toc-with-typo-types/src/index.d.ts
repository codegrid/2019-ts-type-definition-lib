interface TocItem {
  id: string;
  title: string;
  level: number;
}
export type TocList = TocItem[];

export interface Toc {
  // got is typo!
  gotTocList: (context: HTMLElement) => TocList,
  gotTocHtml: (context: HTMLElement) => string,
}

declare const toc: Toc;
export default toc;
