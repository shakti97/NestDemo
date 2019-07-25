import { ItemsService } from './items.service';
import { createItemDto } from './dto/create-item.dto';
import { Controller,Get,Post,Body,Param, Delete, Put } from '@nestjs/common';
import {Item} from './interfaces/item.interface';
@Controller('items')
export class ItemsController {
    constructor(private readonly itemService:ItemsService){}
    @Get()
    findAll(): Item[]{
        return this.itemService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id): Item{
        return this.itemService.findOne(id);
    }
    @Post()
    create(@Body() createItemDto: createItemDto): string{
        return `Name ${createItemDto.name} Description ${createItemDto.description}`;
    }

    @Delete(':id')
    delete(@Param('id') id): string{
        return `Delete ${id}`;
    }
    
    @Put(':id')
    update(@Body() updateItemDto: createItemDto, @Param('id') id): string{
        return `Name ${updateItemDto.name} with Id ${id}`;
    }
}
