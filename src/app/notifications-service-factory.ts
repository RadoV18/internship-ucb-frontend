import { NotificationsService } from './services/notifications.service';
import { NotificationsConfig } from './configs/notifications.config';

export function NotificationsServiceFactory() {
    const notificationsService = new NotificationsService();
    notificationsService.configure(NotificationsConfig);
    notificationsService.activate();
    
    return notificationsService;
}