import { DestroyRef, inject, Injectable } from '@angular/core';
import { Hero } from '../../types/hero';
import { Http } from './http';
import { MatDialog, } from '@angular/material/dialog';
import { DeletionDialog } from '../features/deletion-dialog/deletion-dialog';
import { filter, Observable, Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AddEditDialog } from '../features/add-edit-dialog/add-edit-dialog';
import { HeroOptions } from '../../types/heroOptions';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private readonly destroy = inject(DestroyRef);
  private readonly dialog = inject(MatDialog);
  private readonly infoBar = inject(MatSnackBar);
  private readonly http = inject(Http);
  private heroes = new Subject<Hero[]>();

  constructor() {
    this.updateHeroes();
  }

  public heroesObservable(): Observable<Hero[]> {
    return this.heroes.asObservable();
  }

  public filter(filter: HeroOptions): void {
    this.updateHeroes(filter);
  }

  public updateHeroes(filter?: HeroOptions): void {
    this.http.getHeroes(filter)
      .pipe(takeUntilDestroyed(this.destroy))
      .subscribe((heroes) => {
        this.heroes.next(heroes);
      });
  }

  private updateHerosAndShowMessage(message: string): void {
    this.http.getHeroes()
      .pipe(takeUntilDestroyed(this.destroy))
      .subscribe((heroes) => {
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
      maxWidth: '500px',
    });

    dialogReference.afterClosed()
      .pipe(takeUntilDestroyed(this.destroy))
      .subscribe((accepted) => {
        if (accepted) {
          this.deleteHero(heroId);
        }
      });
  }

  public handleAddEdit(hero: Hero | void): void {
    const dialogReference = this.dialog.open(AddEditDialog, {
      width: 'calc(100% - 2rem)',
      maxWidth: '750px',
      data: hero ?? null
    });

    dialogReference.afterClosed()
      .pipe(filter(hero1 => !!hero1))
      .pipe(takeUntilDestroyed(this.destroy))
      .subscribe((hero1) => {
        hero ? this.editHero(hero1) : this.addHero(hero1);
      });
  }

  private deleteHero(heroId: number): void {
    this.http.deleteHero(heroId)
      .pipe(takeUntilDestroyed(this.destroy))
      .subscribe(() => {
        this.updateHerosAndShowMessage("Este héroe se ha eliminado");
      });
  }

  private editHero(hero: Hero): void {
    this.http.updateHero(hero)
      .pipe(takeUntilDestroyed(this.destroy))
      .subscribe(() => {
        this.updateHerosAndShowMessage('Héroe modificado con éxito');
      })
  }

  private addHero(hero: Hero): void {
    this.http.addHero(hero)
      .pipe(takeUntilDestroyed(this.destroy))
      .subscribe(() => {
        this.updateHerosAndShowMessage('Héroe creado con éxito');
      })
  }

}
