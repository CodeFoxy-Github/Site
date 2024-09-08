import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { MatCommonModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <mat-toolbar color="primary">
      <span>Community Spotlight</span>
    </mat-toolbar>

    <div class="container">
      <h1 class="mat-headline-4">Welcome to the Community Spotlight Project</h1>
      
      <mat-expansion-panel expanded>
        <mat-expansion-panel-header>
          <mat-panel-title>Description</mat-panel-title>
        </mat-expansion-panel-header>
        <p>This project is aimed at Promoting Creators for <strong>Free</strong> using Promotional Imagery and Videos. Developers may freely use this Repository and Scripts to Fetch Promotions.</p>
        <p>Creators may freely use this to promote their Games/Videos/Songs/etc. They may also freely display these Promotions in their Projects/Sites/etc</p>
        <a mat-raised-button href="https://discord.gg/JqSuhvWkFM">Join Our Discord</a>
      </mat-expansion-panel>

      <h2 class="mat-headline-5">Licence</h2>
      <p>This Project, and all Promotions within it, are Licenced under <strong>MIT</strong></p>

      <h2 class="mat-headline-5">Q&A</h2>
      <mat-accordion>
        <mat-expansion-panel>
          <mat-expansion-panel-header>
            <mat-panel-title>How can I submit My Promotions?</mat-panel-title>
          </mat-expansion-panel-header>
          <p>Please Fill in <a href="https://forms.gle/9d5GHEukZva5zeZj8" class="accent-color">this form</a>, soon a <strong>Team Member</strong> will look over and possibly add your Promotion.</p>
          <mat-card>
            <mat-card-header>
              <mat-card-title>Important Notes Before Submitting</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <p>Promotion Files <strong>MUST</strong> be under <strong>10MB and is either an Image or Video</strong></p>
              <p><strong>Rules for Images:</strong></p>
              <pre class="accent-color">
Acceptable Aspect Ratios: 250x250, 300x250, 480x270, 300x50, 50x300, 360x120, 120x360
Acceptable Formats: SVG, PNG, JPEG
              </pre>
              <p><strong>Rules for Video:</strong></p>
              <pre class="accent-color">
Acceptable Aspect Ratios: 1:1, 4:3, 4:5, 16:9, 9:16
Acceptable Video Lengths: 5s, 10s, 15s, 30s
Acceptable Formats: MP4
              </pre>
            </mat-card-content>
          </mat-card>
        </mat-expansion-panel>
        <mat-expansion-panel>
          <mat-expansion-panel-header>
            <mat-panel-title>My Promotion Stopped Showing Up, What Happened?</mat-panel-title>
          </mat-expansion-panel-header>
          <p>Once your Promotion is added to our Repository, it will <strong>Automatically be Deleted in 2 Weeks.</strong> This is to help manage Storage...</p>
          <p>You are more than welcome to re-submit the <a href="https://forms.gle/9d5GHEukZva5zeZj8" class="accent-color">form</a> to add your Promotion</p>
        </mat-expansion-panel>
      </mat-accordion>

      <h2 class="mat-headline-5">Meet the Team</h2>
      <div class="team-members">
        <mat-card *ngFor="let member of teamMembers">
          <mat-card-header>
              <img mat-card-avatar [src]="member.avatarUrl" [alt]="member.displayName">
            <mat-card-title>{{ member.displayName }}</mat-card-title>
            <mat-card-subtitle>{{ member.role }}</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Github Profile: <a href="https://github.com/{{ member.username }}">Here</a></p>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [
    `
    .team-members {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
    mat-card {
      width: 200px;
    }
    mat-card-avatar img {
      border-radius: 50%;
      width: 100%;
      height: auto;
    }
  `,
  ],
  imports: [
    MatCommonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    CommonModule,
  ],
})
export class App {
  name = 'Angular';

  teamMembers = [
    {
      username: 'baqirbeard',
      displayName: 'baqirbeard',
      avatarUrl: 'https://avatars.githubusercontent.com/u/142028540?s=96&v=4',
      visibility: 'Private',
      role: 'Member',
      teams: 0,
    },
    {
      username: 'BludIsAnLemon',
      displayName: 'Lemon',
      avatarUrl: 'https://avatars.githubusercontent.com/u/165233560?s=96&v=4',
      visibility: 'Private',
      role: 'Member',
      teams: 0,
    },
    {
      username: 'cicerorph',
      displayName: 'Cicero',
      avatarUrl: 'https://avatars.githubusercontent.com/u/150862765?s=96&v=4',
      visibility: 'Private',
      role: 'Member',
      teams: 0,
    },
    {
      username: 'CodeFoxy-Github',
      displayName: 'CodeFoxy',
      avatarUrl: 'https://avatars.githubusercontent.com/u/96522178?s=96&v=4',
      visibility: 'Public',
      role: 'Member',
      teams: 0,
    },
    {
      username: 'fath11',
      displayName: 'Fath11',
      avatarUrl: 'https://avatars.githubusercontent.com/u/124476952?s=96&v=4',
      visibility: 'Private',
      role: 'Member',
      teams: 0,
    },
    {
      username: 'Gen1x-ALT',
      displayName: 'Gen1x-ALT',
      avatarUrl: 'https://avatars.githubusercontent.com/u/153012779?s=96&v=4',
      visibility: 'Private',
      role: 'Member',
      teams: 0,
    },
    {
      username: 'PuzzlingGGG',
      displayName: 'PuzzlingGGG',
      avatarUrl: 'https://avatars.githubusercontent.com/u/138084889?s=96&v=4',
      visibility: 'Public',
      role: 'Member',
      teams: 0,
    },
    {
      username: 'SharkPool-SP',
      displayName: 'SharkPool',
      avatarUrl: 'https://avatars.githubusercontent.com/u/139097378?s=96&v=4',
      visibility: 'Private',
      role: 'Owner',
      teams: 0,
    },
    {
      username: 'theplayer3',
      displayName: 'theplayer3',
      avatarUrl: 'https://avatars.githubusercontent.com/u/162931496?s=96&v=4',
      visibility: 'Private',
      role: 'Member',
      teams: 0,
    },
    {
      username: 'vernacular7',
      displayName: 'vernacular7',
      avatarUrl: 'https://avatars.githubusercontent.com/u/132183833?s=96&v=4',
      visibility: 'Private',
      role: 'Member',
      teams: 0,
    },
    {
      username: 'yuri-kiss',
      displayName: 'みよ',
      avatarUrl: 'https://avatars.githubusercontent.com/u/135030944?s=96&v=4',
      visibility: 'Private',
      role: 'Owner',
      teams: 0,
    },
  ];
}

bootstrapApplication(App, {
  providers: [provideAnimationsAsync()],
});
