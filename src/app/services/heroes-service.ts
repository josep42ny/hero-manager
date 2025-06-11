import { DestroyRef, inject, Injectable, OnInit } from '@angular/core';
import { Hero } from '../../types/hero';
import { HttpService } from './http-service';
import { MatDialog, } from '@angular/material/dialog';
import { DeletionDialog } from '../components/deletion-dialog/deletion-dialog';
import { filter, Observable, Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AddEditDialog } from '../components/add-edit-dialog/add-edit-dialog';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private readonly destroy = inject(DestroyRef);
  private readonly dialog = inject(MatDialog);
  private readonly infoBar = inject(MatSnackBar);
  private readonly http = inject(HttpService);
  private heroes = new Subject<Hero[]>();

  constructor() {
    this.updateHeroes();
  }

  public heroesObservable(): Observable<Hero[]> {
    return this.heroes.asObservable();
  }

  public updateHeroes(name?: string): void {
    const params = new HttpParams().set('name_like', name ?? '');

    this.http.getHeroes(params)
      .subscribe((heroes) => {
        this.heroes.next(heroes);
      });
  }

  private updateHerosAndShowMessage(message: string): void {
    this.http.getHeroes()
      .subscribe((heroes: Hero[]) => {
        this.heroes.next(heroes);
        this.infoBar.open(message, "", {
          duration: 2000,
          verticalPosition: 'top',
          panelClass: ['success']
        });
      });
  }

  public handleDelete(heroId: number): void {
    const dialogReference = this.dialog.open(DeletionDialog, {
      width: 'calc(100% - 2rem)',
      maxWidth: '32rem',
    });

    dialogReference.afterClosed()
      .pipe(takeUntilDestroyed(this.destroy))
      .subscribe((accepted: boolean) => {
        if (accepted) {
          this.deleteHero(heroId);
        }
      });
  }

  public handleAddEdit(hero?: Hero): void {
    const dialogReference = this.dialog.open(AddEditDialog, {
      width: 'calc(100% - 2rem)',
      maxWidth: '58rem',
      data: hero
    });

    dialogReference.afterClosed()
      .pipe(filter(newHero => !!newHero))
      .pipe(takeUntilDestroyed(this.destroy))
      .subscribe((newHero: Hero) => {
        hero ? this.editHero(newHero) : this.addHero(newHero);
      });
  }

  private deleteHero(heroId: number): void {
    this.http.deleteHero(heroId)
      .subscribe(() => {
        this.updateHerosAndShowMessage("Este héroe se ha eliminado");
      });
  }

  private editHero(hero: Hero): void {
    this.http.updateHero(hero)
      .subscribe(() => {
        this.updateHerosAndShowMessage('Héroe modificado con éxito');
      })
  }

  private addHero(hero: Hero): void {
    this.http.addHero(hero)
      .subscribe(() => {
        this.updateHerosAndShowMessage('Héroe creado con éxito');
      })
  }

}
