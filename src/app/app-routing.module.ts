import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewTaskComponent } from "./components/create-new-task/create-new-task.component";
import { ExamplesComponent } from "./components/examples/examples.component";

const routes: Routes = [
  { path: '', component: CreateNewTaskComponent },
  { path: 'examples', component: ExamplesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
