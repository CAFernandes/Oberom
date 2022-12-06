import { HydratedDocument, Model, model, QueryWithHelpers, Schema } from "mongoose";

type iGame = {
  name: String,
  price: String,
  category: String
}
interface ProjectQueryHelpers {
  findAll(name: string): QueryWithHelpers<
    HydratedDocument<iGame>[],
    HydratedDocument<iGame>,
    ProjectQueryHelpers
  >
}

const GameSchema = new Schema<
  iGame,
  Model<iGame, ProjectQueryHelpers>,
  {},
  ProjectQueryHelpers
>({
  name: { type: String, required: true },
  price: { type: String, required: true },
  category: { type: String, required: true },
});

/* Creating a new schema for the Game model. */
GameSchema.query.findAll = function byName(
  this: QueryWithHelpers<any, HydratedDocument<iGame>, ProjectQueryHelpers>,
  name: string
) {
return this.find({ });
};

export const GameModel = model<iGame>('Game', GameSchema);
