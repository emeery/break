

// import { Ingrediente } from '../../compatido/model/ingrediente.model';
export class Tweet {
  public id: string;
  public description: string;

  constructor(
    id: string,
    description: string,
    ) {
      this.id = id;
      this.description = description;
    }
}
