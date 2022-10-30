import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Posts } from './database/entities/post.entity';

@Controller('posts')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get-all')
  async getPosts(): Promise<Posts[]> {
    return this.appService.getPosts();
  }

  @Get('get-one')
  async getPost(@Query() query: { id: number }): Promise<Posts | undefined> {
    return this.appService.getPost(query.id);
  }

  @Post('create')
  async createPost(@Body() data: Posts): Promise<Posts> {
    return this.appService.createPost(data);
  }

  @Delete('delete')
  async deletePost(@Body() body: { id: number }): Promise<Posts> {
    return this.appService.deletePost(body.id);
  }

  @Put('update')
  async updatePost(@Body() data: Posts): Promise<Posts> {
    return this.appService.updatePost(data);
  }
}
