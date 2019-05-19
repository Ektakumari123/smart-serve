import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatInputModule
} from '@angular/material';
@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatTableModule,
        MatInputModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatTableModule,
        MatInputModule
    ]
})
export class MaterialModule { }
