import{NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { DetailsComponent } from '../components/details/details.component';
import { DetailsMoviesComponent } from '../components/details-movies/details-movies.component';
import { DetailsActorsComponent } from '../components/details-actors/details-actors.component';
import { DetailsReviewsComponent } from '../components/details-reviews/details-reviews.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'details', component: DetailsComponent},
  {path:'details/movies', component: DetailsMoviesComponent},
  {path:'details/actors', component: DetailsActorsComponent},
  {path:'details/reviews', component: DetailsReviewsComponent},
]
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutesModule{}
