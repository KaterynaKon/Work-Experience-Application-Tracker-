import { Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export class Application {
  _id!: string;
  company!: string;
  position!: string;
  type!: string;
  status!: string;
  dateApplied!: string;
  cvUsed!: string;
}


@Service()
export class WorktrackerData {
    private http = inject(HttpClient);
    private apiBaseUrl = 'http://localhost:3000/api';
    public async getApplications(): Promise<Application[]> {
    const url = `${this.apiBaseUrl}/applications`;
    return firstValueFrom(this.http.get<Application[]>(url));
  }
}
