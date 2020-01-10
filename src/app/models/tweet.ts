

// import { Ingrediente } from '../../compatido/model/ingrediente.model';
export class Tweet {
  public id: string;
  public descripcion: string;

  constructor(
    id: string,
    descripcion: string,
    ) {
      this.id = id;
      this.descripcion = descripcion;
    }
}
