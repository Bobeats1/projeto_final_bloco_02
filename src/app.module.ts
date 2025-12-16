import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CategoriaModule } from './categoria/categoria.module';
import { Categoria } from './categoria/entities/categoria.entity';
import { Produto } from './produto/entities/produto.entity';
import { ProdutoModule } from './produto/produto.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number (process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Categoria, Produto, Usuario],
      synchronize: true,
      logging: true,
    }),
    CategoriaModule,
    ProdutoModule,
    UsuarioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
