import { Injectable } from '@angular/core'
import { ContentService } from './content.service'
@Injectable({
  providedIn: 'root'
})

@Injectable()
export class DataService {
    baseURL: string
    constructor(private contentService: ContentService) {
        this.baseURL = this.contentService.baseURL
    }
    getPrediction(data) {
        return this.contentService.postData(this.baseURL+'getprediction', data);
    }
}