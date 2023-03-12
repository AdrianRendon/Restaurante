import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reserva-mesa',
  templateUrl: './reserva-mesa.component.html',
  styleUrls: ['./reserva-mesa.component.css']
})
export class ReservaMesaComponent implements OnInit {

  reservaForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.reservaForm = this.formBuilder.group({
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      personas: ['', Validators.required],
      nombre: ['', Validators.required],
      telefono: ['', Validators.required]
    });
  }

  submitReservaForm() {
    // Aquí se puede agregar la lógica para guardar la reserva en la base de datos
    console.log(this.reservaForm.value);
    this.reservaForm.reset();}}