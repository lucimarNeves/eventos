import { Global, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Global()
@Injectable()
export class Prisma  extends PrismaClient
implements OnModuleInit, OnModuleDestroy {
    
    onModuleInit() {
       this.$disconnect();
    }
    onModuleDestroy() {
      this.$disconnect();
    }

}
