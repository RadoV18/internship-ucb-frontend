import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})

export class NotificationsComponent implements OnInit {
  newNotifications: boolean = false;
  notifications: string[] = [];

  constructor(private notificationsService: NotificationsService) { }

  ngOnInit(): void {
    this.notificationsService.watch('/all/messages').subscribe({
      next: (message) => {
        this.notifications.push(message.body);
        this.newNotifications = true;
      }
    });
  }

  public markRead() {
    this.newNotifications = false;
  }

  public clearNotifications() {
    this.notifications = [];
    this.markRead();
  }
}
