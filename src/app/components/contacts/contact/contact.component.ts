import { Component, ViewChild, ElementRef, AfterViewInit, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,

  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @ViewChild('modaleContatti') modaleContatti: ElementRef;
  private modalService = inject(NgbModal);
  datiModale = {}

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    object: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])
  });

  onSubmit() {
    this.datiModale = {nome: this.form.controls.name.value,
                      email: this.form.controls.email.value,
                      object: this.form.controls.object.value,
                      message: this.form.controls.message.value }

    if(this.form.valid) {
      this.openModal(this.modaleContatti);
    }
    else {
      this.datiModale = {message: "Dati mancanti nella richiesta, si prega di riprovare."};
      this.openModal(this.modaleContatti);
    }
  }

  openModal(content: any, email?: string, messaggio?: string) {
    this.modalService.open(content, {centered: true,
                                    ariaLabelledBy: "Modale di conferma",
                                    size: "lg" }).result
      .then((res) => {
        console.log("Azione");
      })
      .catch((error) => {
        console.log("Errore");
      });
  }
}
