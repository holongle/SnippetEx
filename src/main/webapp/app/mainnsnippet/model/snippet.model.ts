export interface ISnippet {
  id?: number;
  title?: string;
  description?: string;
  content?: string;
  userId?: number;
}

export class Snippet implements ISnippet {
  constructor(
    public id?: number,
    public title?: string,
    public description?: string,
    public content?: string,
    public userId?: number,
  ) {
  }
}


