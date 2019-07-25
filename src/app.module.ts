import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';

//The forRoot() method accepts the same configuration object as mongoose.connect() from the Mongoose package.


@Module({
  imports: [ItemsModule,MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService],
})
export class AppModule {}
