import { Beast } from "./beast.models";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { EMPTY, Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";


@Injectable({providedIn: "root"})
export class BeastService {
  baseUrl = "https://raw.githubusercontent.com/renantescaro/scraping-bestiary-final-fantasy-xii/master/items.json";

  constructor(
		private snackBar: MatSnackBar,
		private http: HttpClient
	) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  errorHandle(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }

  read(): Observable<Beast[]> {
    return this.http.get<Beast[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandle(e))
    );
  }

  readById(id: number): Observable<Beast> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Beast>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandle(e))
    );
  }
}
