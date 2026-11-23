import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { FaersServiceService } from '../faers-service.service';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.sass']
})
export class NavigationPanelComponent implements OnInit {

  public routes = new Set<string>();
  public displayRoutes = new Array<string>();
  public subtitle = "Every year thousand of people commit suicide, homicide and other acts of violence after being prescribed antidepressants. This site is dedicated to those that are still alive, and the courts mishandling of their cases.";
  public subtitleArray: string[];
  public cell = false;

  constructor(private router: Router, public service: FaersServiceService) {
    this.subtitleArray = [
      'Getting Patients Addicted To An Amphetimine Like Stimulant That Causes Mania, Acute Psychosis, Homicidal Ideation, Aggression And Hostility, And Imprisonment Or Death Wont Cheer Anybody Up',
      'Second Operator:  Police department.  Crespi:  Yeah.  I just killed my two daughters.  Operator:  You just what? Crespi:  I just killed my two daughters. -David Crespi 911 Phone Call Transcript',
      "These Are Real People. You Know, These Murders And Things Are Senseless. It's Time To Put A Stop To It.   -Tucker Moneymaker 1991 Fda Hearing On The Safety And Efficacy Of Ssri Antidepressants",
      "After Being On Prozac For 21 Days, My Wife Shot And Killed Both Of These Two Boys Right Here. She Turned The Gun To Herself And Shot Herself Twice. Now She's In Jail For Murder. -Tucker Moneymaker Fda Hearing 1991",
      'Please Remove These Dangerous Drugs From The Market',
      'Acts Of Violence Towards Others Are A Genuine And Serious Adverse Drug Event Associated With A Relatively Small Group Of Drugs. Varenicline, Which Increases The Availability Of Dopamine, And Antidepressants With Serotonergic Effects Were The Most Strongly And Consistently Implicated Drugs.',
      'Dopaminergic Agonists, Benzodiazepines And Serotoninergic Antidepressants Are The Main Pharmacological Classes Able To Induce Aggressive Behaviour. This Study Also Emphasises The Putative Role Of Other Drugs Less Known To Be Involved In Such Adr.',
      'Aggression Collectively Refers To, Unless Otherwise Specified, Suicide, Homicide, And Other Forms Of Violence.  -Fda Pediatric Postmarketing Pharmacovigilance And Drug Utilization Review, Date: November 22, 2017',
      'I Will Neither Give A Deadly Drug To Anybody Who Asked For It, Nor Will I Make A Suggestion To This Effect. -The Hippocratic Oath: Classical Version',
      'California Attorney Generals Office, Please Tell The Truth In Federal Court And Make Every Possible Attempt To Protect Residents Of California From Dangerous Drugs Regardless Of Whether They Are Legal Or Illegal.',
      'Please Share This Link On Facebook.'
    ];

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      this.cell = true;
    }
  }

  ngOnInit() {
    this.storePath('', this.router.config);

    for (let str of this.routes) {
      this.displayRoutes.push( str.replaceAll("/", "").replaceAll("_", " ").replaceAll("-", " ") );
    }
    

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart || NavigationEnd || NavigationError) {
        let index = Math.floor(Math.random() * (this.subtitleArray.length + 1));
        this.subtitle = this.subtitleArray[index];
      }
    });

    this.displayRoutes = this.displayRoutes.map((sentence) => {return this.capitalization(sentence);});
  }

  capitalization(sentence: string) {
    const words = sentence.split(" ");
    return words.map((word) => { 
        return word[0].toUpperCase() + word.substring(1); 
    }).join(" ");
  }

  storePath(parent: String, config: Route[]) {
    for (let i = 0; i < config.length; i++) {
      const route = config[i];
      if (!route.path?.includes("**")) {
        this.routes.add(parent + '/' + route.path);
        if (route.children) {
          const currentPath = route.path ? parent + '/' + route.path : parent;
          this.storePath(currentPath, route.children);
        }
      }
    }
  }

}
