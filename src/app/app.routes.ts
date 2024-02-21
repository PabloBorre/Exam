import { Routes } from '@angular/router';
import {Component} from "@angular/core";
import {Ex01Component} from "./ex01/ex01.component";
import {Ex02Component} from "./ex02/ex02.component";
import {Ex10Component} from "./ex10/ex10.component";
import {Ex03Component} from "./ex03/ex03.component";
import {Ex04Component} from "./ex04/ex04.component";
import {Ex05Component} from "./ex05/ex05.component";
import {Ex06Component} from "./ex06/ex06.component";
import {Ex07Component} from "./ex07/ex07.component";
import {Ex08Component} from "./ex08/ex08.component";
import {Ex09Component} from "./ex09/ex09.component";
import {Ex11Component} from "./ex11/ex11.component";

export const routes: Routes = [
  {
    path: '',
    component: Component,
    title: 'Home page'
  },
  {
    path: 'ex01',
    component: Ex01Component,
    title: 'Ex01'
  },
  {
    path: 'ex02',
    component: Ex02Component,
    title: 'Ex02'
  },
  {
    path: 'ex03',
    component: Ex03Component,
    title: 'Ex03'
  },
  {
    path: 'ex04',
    component: Ex04Component,
    title: 'Ex04'
  },
  {
    path: 'ex05',
    component: Ex05Component,
    title: 'Ex05'
  },
  {
    path: 'ex06',
    component: Ex06Component,
    title: 'Ex06'
  },
  {
    path: 'ex07',
    component: Ex07Component,
    title: 'Ex07'
  },
  {
    path: 'ex08',
    component: Ex08Component,
    title: 'Ex08'
  },
  {
    path: 'ex09',
    component: Ex09Component,
    title: 'Ex09'
  },
  {
    path: 'ex10',
    component: Ex10Component,
    title: 'Ex10'
  },
  {
    path: 'ex11',
    component: Ex11Component,
    title: 'Ex11'
  },
];
