import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import { NotificationsService } from 'src/app/services/notifications.service';
import {NotificationDto} from "../../dto/notification.dto";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})

export class NotificationsComponent implements OnInit {
  showNotifications: boolean = false;
  @ViewChild('toggleButton') toggleButton: ElementRef;
  @ViewChild('notificationBox') notificationBox: ElementRef;

  newNotifications: boolean = false;
  notifications: NotificationDto[] = [];

  constructor(private notificationsService: NotificationsService, private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (this.toggleButton.nativeElement.contains(e.target)) {
        this.showNotifications = !this.showNotifications;
      } else if (!this.notificationBox.nativeElement.contains(e.target)) {
        this.showNotifications = false;
      }
    });
  }

  ngOnInit(): void {
    this.notificationsService.watch('/all/messages').subscribe({
      next: (message) => {
        console.log(message.body)
        const notificationDto: NotificationDto = JSON.parse(message.body);
        this.notifications = [notificationDto, ...this.notifications];
        this.newNotifications = true;
      }
    });
  }

  timeAgo(date: Date): string {
    const now = new Date();
    const notificationDate = new Date(date);
    const seconds = Math.floor((now.getTime() - notificationDate.getTime()) / 1000);
    const intervals: Map<string, number> = new Map([
      ['día', 86400],
      ['hora', 3600],
      ['minuto', 60],
      ['segundo', 1]
    ]);

    let counter;
    for(const unit of intervals.keys()) {
      counter = Math.floor(seconds / intervals.get(unit)!);
      if (counter > 0) {
        if (counter === 1) {
          return 'Hace 1 ' + unit;
        } else {
          return 'Hace ' + counter + ' ' + unit + 's';
        }
      }
    }

    return 'Hace unos segundos';
  }

  public markRead() {
    this.newNotifications = false;
  }

  public clearNotifications() {
    this.notifications = [];
    this.markRead();
  }
}
