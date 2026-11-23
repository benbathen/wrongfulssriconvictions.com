import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fda-detailed-reports',
  templateUrl: './fda-detailed-reports.component.html',
  styleUrls: ['./fda-detailed-reports.component.sass']
})
export class FdaDetailedReportsComponent implements OnInit {

  public imageArray = ['8500148_page_02.png', '4194052_page_01.png', '4194052_page_02.png', '4213177_page_01.png', '5678040_page_01.png', '5678040_page_02.png', '5850018_page_01.png', '5850018_page_02.png', '6044971_page_01.png', '6044971_page_02.png', '6145009_page_01.png', '6145009_page_02.png', '6150282_page_01.png', '6150282_page_02.png', '6167713_page_01.png', '6167713_page_02.png', '6167713_page_03.png', '6167713_page_04.png', '6167713_page_05.png', '6167713_page_06.png', '6167713_page_07.png', '6167713_page_08.png', '6314660_page_01.png', '6314660_page_02.png', '6314660_page_03.png', '6459496_page_01.png', '6459496_page_02.png', '6459496_page_03.png', '6459496_page_04.png', '6459496_page_05.png', '6572403_page_01.png', '6589751_page_01.png', '6589751_page_02.png', '6648929_page_01.png', '6648929_page_02.png', '6687881_page_01.png', '6687881_Page_02.png', '6687881_page_03.png', '6687881_page_04.png', '6687881_page_05.png', '6687881_page_06.png', '6687881_page_07.png', '6687881_page_08.png', '6687881_page_09.png', '6687881_page_10.png', '6691894_page_01.png', '6691894_page_02.png', '6691894_page_03.png', '6691894_page_04.png', '6691894_page_05.png', '6691894_page_06.png', '6691894_page_07.png', '6691894_page_08.png', '6691894_page_09.png', '6803782_page_01.png', '6803782_page_02.png', '6803782_page_03.png', '6899800_page_01.png', '6899800_page_02.png', '6899800_page_03.png', '6899800_page_04.png', '6899800_page_05.png', '6985357_page_01.png', '7099538_page_01.png', '7099538_page_02.png', '7099538_page_03.png', '7099538_page_04.png', '7153653_page_01.png', '7153653_page_02.png', '7153653_page_03.png', '7153653_page_03.zip', '7170403_page_01.png', '7170403_page_02.png', '7274376page_01.png', '7274376page_02.png', '7274376_page_01.png', '7274376_page_02.png', '7361385page_01.png', '7361385page_02.png', '7361385_page_01.png', '7361385_page_02.png', '7391982page_01.png', '7391982page_02.png', '7391982_page_01.png', '7391982_page_02.png', '7530644page_01.png', '7530644page_02.png', '7530644_page_01.png', '7530644_page_02.png', '7535431_page_01.png', '7535431_page_02.png', '7691864_page_01.png', '7691864_page_02.png', '7691864_page_03.png', '7748639_page_01.png', '7748639_page_02.png', '7794328_page5.png', '7794328_page_01.png', '7794328_page_02.png', '7794328_page_03.png', '7794328_page_04.png', '7794328_page_06.png', '7794328_page_07.png', '7794328_page_08.png', '7794328_page_09.png', '8052948page_01.png', '8052948page_02.png', '8052948page_03.png', '8052948_page_01.png', '8052948_page_02.png', '8052948_page_03.png', '8058099_page_01.png', '8058099_page_02.png', '8058099_page_03.png', '8058099_page_04.png', '8058099_page_05.png', '8088605page_01.png', '8088605page_02.png', '8088605page_03.png', '8088605_page_01.png', '8088605_page_02.png', '8088605_page_03.png', '8112142_page_01.png', '8112142_page_02.png', '8112142_page_03.png', '8112142_page_04.png', '8112142_page_05.png', '8112142_page_06.png', '8118144page_01.png', '8118144page_02.png', '8118144page_03.png', '8118144page_04.png', '8118144_page_01.png', '8118144_page_02.png', '8118144_page_03.png', '8118144_page_04.png', '8177129_page_01.png', '8177129_page_02.png', '8177129_page_03.png', '8177129_page_04.png', '8177129_page_05.png', '8468683_page_01.png', '8468683_page_02.png', '8468683_page_03.png', '8957565_page_01.png', '8957565_page_02.png', '8957565_page_03.png', '9690854_page_01.png', '9690854_page_02.png', '9690854_page_03.png'];
  public showDetail = false;
  public detailSource = "/assets/images/FDA_detailed_reports/Lexapro/6150282_page_01.png";
  public lawsuit = "/assets/pdf/Andrew_Thibault_searchable.pdf";

  constructor() { }

  ngOnInit(): void {
  }

  public displayRecord(event: Event){
    this.showDetail = !this.showDetail;
    this.detailSource = (event?.srcElement as HTMLImageElement).src;
    console.log(event);
  }

}
