// import { Ingrediente } from '../../compatido/model/ingrediente.model';
export class Tweet {
  public descripcion: string;
  public like: boolean;
  public user: string;
  constructor(
    descripcion: string,
    like: boolean,
    user: string
    ) {
      this.descripcion = descripcion;
      this.like = like;
      this.user = user;
    }
}
