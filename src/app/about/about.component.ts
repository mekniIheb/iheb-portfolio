import {Component, OnInit} from '@angular/core';
import {SkillService} from "../service/skill.service";
import {Skill} from "../model/Skill";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private translate: TranslateService) {
  }

}
