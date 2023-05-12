import { RxStompConfig } from '@stomp/rx-stomp';
import * as SockJS from 'sockjs-client';
import { environment } from 'src/environments/environment';

function socketFactory() {
    return SockJS(`${environment.API_URL}/ws`);
}

export const NotificationsConfig: RxStompConfig = {
    
    webSocketFactory: socketFactory,
    debug: (msg: string): void => {
        console.log(new Date(), msg);
    }
}