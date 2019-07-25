import { createItemDto } from './dto/create-item.dto';
import { Controller,Get,Post,Body } from '@nestjs/common';

@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string{
        return 'This action returns the all items'
    }

    @Post()
    create(@Body() createItemDto: createItemDto): string{
        return `Name ${createItemDto.name} Description ${createItemDto.description}`;
    }
            
}
