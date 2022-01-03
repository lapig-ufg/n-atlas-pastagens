import { Component, OnInit } from '@angular/core';
import {LocalizationService} from "../../../@core/internationalization/localization.service";

@Component({
  selector: 'app-artigos',
  templateUrl: './artigos.component.html',
  styleUrls: ['./artigos.component.css']
})
export class ArtigosComponent implements OnInit {

  articles: Article[];

  constructor(private localizationService: LocalizationService) {
    this.articles = [
      {
        id: 1,
        title: this.localizationService.translate('hotsite.articles.1.title'),
        image: "",
        doi:  "",
        authors: "",
        abstract: "'hotsite.articles.1.abstract'",
      }
    ];
  }

  ngOnInit() {
  }

}

export interface Article {
  id: number;
  title: string;
  image: string;
  doi: string;
  authors: string;
  abstract: string;
}
