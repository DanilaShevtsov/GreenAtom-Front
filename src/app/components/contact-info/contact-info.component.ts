import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IQuestion } from 'src/app/models/question';
import { ContactInfoService } from 'src/app/services/contact-info.service';
import { QuizService } from 'src/app/services/quiz.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {
  contactInput = true;
  thankYou = false;
  userId:string;
  vacancyId:string;

  contactInfo = new FormGroup({
    fio: new FormControl<string>(''),
    email: new FormControl<string>(''),
    phoneNumber: new FormControl<string>('')
  });

  quizQuestions: IQuestion[] = []

  constructor(
    private readonly productService: ContactInfoService,
    private readonly quizService: QuizService,
    private readonly route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.vacancyId = this.route.snapshot.params['id'];

    this.quizService.setStatistic(this.vacancyId, 'url').subscribe();
  }
  
  sendContactInfo() {
    const fio = this.contactInfo.value.fio;
    const email = this.contactInfo.value.email;
    const phone = this.contactInfo.value.phoneNumber;
    
    this.productService.setContactInfo({
      fio: fio as string,
      email: email as string,
      phone: phone as string
    }).subscribe((res) => {
      this.userId = res;
    }
    );
    
    this.swapToQuiz();
  }

  swapToQuiz() {
    this.contactInput = false;

    this.quizService.getAll(this.vacancyId).subscribe(questions => {
      this.quizQuestions = questions;
    });

    this.quizService.setStatistic(this.vacancyId, 'readDescription').subscribe();
  }

  confirmQuiz(quizForm: any) {
    const questionIds = Object.keys(quizForm.form.value);
    const body = {
      "userId": this.userId,
      "vacancyId":  this.vacancyId,
      "data": [
          {
              "questionId": questionIds[0],
              "answer": quizForm.form.value[questionIds[0]]
          },
          {
              "questionId": questionIds[1],
              "answer": quizForm.form.value[questionIds[1]]
          },

          {
              "questionId": questionIds[2],
              "answer": quizForm.form.value[questionIds[2]]
          },

          {
            "questionId": questionIds[3],
            "answer": quizForm.form.value[questionIds[3]]
          },

          {
            "questionId": questionIds[4],
            "answer": quizForm.form.value[questionIds[4]]
          },
      ]
    }
    this.quizService.sendAnswer(body).subscribe();
    this.thankYou = true;
    
    this.quizService.setStatistic(this.vacancyId, 'quiz').subscribe();
  }

}
