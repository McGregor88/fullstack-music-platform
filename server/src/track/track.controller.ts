import { Controller, Get } from '@nestjs/common';
import { TrackService } from './track.service';

@Controller('tracks')
export class TrackController {

    constructor(private trackService: TrackService) {}

    create() {

    }

    @Get()
    getAll() {
        return 'TRACKS';
    }

    getOne() {
        
    }

    delete() {
        
    }
}