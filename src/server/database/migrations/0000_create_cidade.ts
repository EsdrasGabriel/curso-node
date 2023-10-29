import { Knex } from "knex";
import { ETableNames } from "../ETableNames";

export async function up(knex: Knex) {
    return knex.schema
        .createTable(ETableNames.cidade, (table) => {
            table.bigIncrements("id").primary().index();
            table.string("nome", 150).index().notNullable();

            table.comment("Tabela usada para armazenar cidades no sistema.");
        })
        .then(() => {
            console.log(`# Create Table ${ETableNames.cidade}`);
        });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable(ETableNames.cidade).then(() => {
        console.log(`# Dropped Table ${ETableNames.cidade}`);
    });
}
