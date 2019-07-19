import { Controller,Get } from '@nestjs/common';

@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string{
        return 'This action returns the all items'
    }
            
}
