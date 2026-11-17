import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorktrackerData, Application } from '../worktracker-data';


@Component({
  selector: 'app-application-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './application-list.html',
  styleUrl: './application-list.css'
})
export class ApplicationList implements OnInit {
  private dataService = inject(WorktrackerData);
  private cdr = inject(ChangeDetectorRef);
  applications: Application[] = [];

  private async getApplications(): Promise<void> {
    try {
      this.applications = await this.dataService.getApplications();
      console.log('Fetched applications:', this.applications);
      this.cdr.detectChanges();
    } catch (error) {
      console.error('Error fetching applications:', error);
    }
  }

  ngOnInit(): void {
    this.getApplications();
  }
}


