import { strictEqual } from 'assert';

// import { Ingrediente } from '../../compatido/model/ingrediente.model';
export class Tweet {
  public id: string;
  public descripcion: string;
  public like: boolean;
  constructor(
    id: string,
    descripcion: string,
    like: boolean,
    ) {
      this.id = id;
      this.descripcion = descripcion;
      this.like = like;
    }
}
