import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from "typeorm"
import { v7 as uuid } from "uuid"

@Entity("settings") //referência a /src/database/CreateSetthings.ts ao table name: "settings"
class Setting {

    @PrimaryColumn() //atribui a primary key ao atributo
    id: string;

    @Column() //atribui um atributo comum a coluna
    username: string;

    @Column() //atribui um atributo comum a coluna
    chat: boolean;

    @UpdateDateColumn() //decorador voltado a atualizar timestamp de mudanças em objeto
    updated_at: Date;

    @CreateDateColumn() //decorador voltado a atualizar timestamp de criação de objeto
    created_at: Date;

    //o construtor servirá para verificar se o ID está preenchido: caso esteja: não faça nada. Caso não esteja: preencha com o uuid
    //o objetivo é: caso estivermos trabalhando com atualização de dados o ID já virá preenchido. 
    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { Setting } //exporta essa classe a todo o projeto