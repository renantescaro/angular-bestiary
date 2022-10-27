import { Component, OnInit } from '@angular/core';
import { Beast } from '../beast.models';
import { Injectable } from "@angular/core";
import { BeastService } from "../beast.service";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  beasts: Beast[] = []

  constructor(
    private beastService: BeastService
  ) { }

  ngOnInit(): void {
    this.beastService.read().subscribe(beasts => {
      this.beasts = beasts
    })
  }
}
