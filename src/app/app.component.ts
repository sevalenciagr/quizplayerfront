import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quizplayer';
  public form: FormGroup;

  constructor(
    private fb: FormBuilder    
  ) {
    this.initForm();
  }

  
  initForm() {
    this.form = this.fb.group({
      playerCode: [{value:'', disabled:true}],
      playerName: [{value:'', disabled:true}],
      playerPoint: [{value:'', disabled:true}],
      playerLevel: [{value:'', disabled:true}],
      playerCounter: [{value:'', disabled:true}],
      gameId: [{value:'', disabled:true}],
      question: [{value:'', disabled:true}],
      option1: [''],
      option2: [''],
      option3: [''],
      option4: ['']
    });
  }
}
