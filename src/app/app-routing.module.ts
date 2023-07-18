import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DarkModeComponent } from './dark-mode/dark-mode.component';
import { CategoryNavbarComponent } from './layouts/category-navbar/category-navbar.component';
import { PostCardComponent } from './layouts/post-card/post-card.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { SinglPostsComponent } from './pages/singl-posts/singl-posts.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { PremiumPdfComponent } from './premium-pdf/premium-pdf.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AuthGuard } from './services/auth.guard';
import { UserDashbaordComponent } from './user-dashbaord/user-dashbaord.component';
import { LiveNewsComponent } from './live-news/live-news.component';
import { MusicIntegrationComponent } from './music-integration/music-integration.component';
import { ScrollComponentComponent } from './scroll-component/scroll-component.component';
const routes: Routes = [
  {path:'live/news',component:LiveNewsComponent},
  {path:'userDashboard',component:UserDashbaordComponent, canActivate: [AuthGuard] },
  {path:'search/blogs',component:SearchBarComponent},
  {path:'coding/notes',component:PremiumPdfComponent,canActivate: [AuthGuard]},  
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'dark',component:DarkModeComponent},
  {path:'category/:category/:id',component:SingleCategoryComponent},
  {path:'post/:id',component:SinglPostsComponent},
  {path:'terms',component:TermsAndConditionsComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'about',component:AboutUsComponent},
  {path:'posts/:id',component:PostCardComponent},
  {path:'category',component:CategoryNavbarComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path:'music',component:MusicIntegrationComponent},
  {path:'scroll',component:ScrollComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
