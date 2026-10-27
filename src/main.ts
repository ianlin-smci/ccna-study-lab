import {bootstrapApplication} from '@angular/platform-browser';
import {provideZonelessChangeDetection} from '@angular/core';
import {provideRouter,withHashLocation,withInMemoryScrolling,Routes} from '@angular/router';
import {AppComponent} from './app/app.component';
import {OverviewComponent} from './app/overview.component';
import {PathComponent} from './app/path.component';
import {LessonComponent} from './app/lesson.component';
import {CommandLibraryComponent} from './app/commands.component';
import {QuizComponent} from './app/quiz.component';
import {FlashcardsComponent} from './app/flashcards.component';
import {LabsComponent} from './app/labs.component';
import {ProgressComponent} from './app/progress.component';
import {GlossaryComponent} from './app/glossary.component';
import {ResourcesComponent} from './app/resources.component';
const routes:Routes=[{path:'overview',component:OverviewComponent},{path:'path',component:PathComponent},{path:'path/:domain',component:PathComponent},{path:'lesson/:id',component:LessonComponent},{path:'lesson/:id/:section',component:LessonComponent},{path:'commands',component:CommandLibraryComponent},{path:'glossary',component:GlossaryComponent},{path:'practice',component:QuizComponent,data:{mode:'practice'}},{path:'exam',component:QuizComponent,data:{mode:'exam'}},{path:'flashcards',component:FlashcardsComponent},{path:'labs',component:LabsComponent},{path:'labs/:tool',component:LabsComponent},{path:'progress',component:ProgressComponent},{path:'resources',component:ResourcesComponent},{path:'',redirectTo:'overview',pathMatch:'full'},{path:'**',redirectTo:'overview'}];
// Preserve links from the earlier website while using GitHub Pages-safe hash routes.
if(location.hash.length>1&&!location.hash.startsWith('#/'))history.replaceState(null,'',location.pathname+location.search+'#/'+location.hash.slice(1));
bootstrapApplication(AppComponent,{providers:[provideZonelessChangeDetection(),provideRouter(routes,withHashLocation(),withInMemoryScrolling({scrollPositionRestoration:'top'}))]}).catch(err=>console.error(err));
