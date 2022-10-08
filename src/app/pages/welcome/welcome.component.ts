import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeService } from 'src/app/services/welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private route:Router, private welcomeService:WelcomeService) { }

  ngOnInit(): void {
    this.welcomeService.getHelloContent().subscribe((data)=>console.log(data));
  }
  param: string = 'name';
  value= 'bharath';

  handleClick():void{
    this.route.navigate(['home'])
  }
}
