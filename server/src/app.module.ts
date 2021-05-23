import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import * as path from 'path';

import { FileModule } from './file/file.module';
import { TrackModule } from './track/track.module';

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static')
        }),
        MongooseModule.forRoot('mongodb+srv://qwerty:root@freecluster.ymm4f.mongodb.net/music-platform?retryWrites=true&w=majority'),
        TrackModule,
        FileModule
    ]
})
export class AppModule {}