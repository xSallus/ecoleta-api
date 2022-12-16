import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TypeormService } from './typeorm/typeorm.service';
import { CollectorPoint } from './typeorm/entity/point';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'better-sqlite3',
			database: __dirname + '/typeorm/db.sqlite',
			synchronize: process.env['NODE_ENV']==='development',
			logging: false,
			migrationsRun: false,
			entities: [CollectorPoint],
			migrations: [__dirname + '/typeorm/migration/*'],
			subscribers: []
		}),
		TypeOrmModule.forFeature([CollectorPoint])
	],
	providers: [TypeormService],
	exports: [TypeormService]
})
export class DatabaseModule {}
