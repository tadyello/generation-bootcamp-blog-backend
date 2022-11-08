import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Postagem } from "../../postagem/entities/postagem.entity";


@Entity({ name: "tb_usuarios" })
export class Usuario {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @IsNotEmpty()
    @MaxLength(100)
    @Column({ length: 100, nullable: false })
    @ApiProperty()
    nome: string;

    @IsEmail()
    @IsNotEmpty()
    @MaxLength(255)
    @Column({ length: 255, nullable: false })
    @ApiProperty({ example: "email@email.com" })
    usuario: string; //E-mail

    @IsNotEmpty()
    @MinLength(8)
    @Column({ length: 255, nullable: false })
    @ApiProperty()
    senha: string;

    @IsNotEmpty()
    @MaxLength(2000)
    @Column({ length: 2000, nullable: false })
    @ApiProperty()
    foto_url: string;
<<<<<<< HEAD
   
=======

    @IsNotEmpty()
    @MaxLength(50)
    @Column({ length: 50, nullable: false })
    @ApiProperty()
    tipo_usuario: string;

>>>>>>> 2eec01ce2873faec7efc5ef06c4e14adb0819220
    @ApiProperty({ type: () => Postagem })
    @OneToMany(() => Postagem, (postagem) => postagem.usuario)
    postagem: Postagem[];

}