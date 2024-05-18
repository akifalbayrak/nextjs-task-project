import { createContext } from "react";

const NotificationContext = createContext({
    notification: null,
    showNotification: function (notificationData) {},
    hideNotification: function () {},
});

function NotificationContextProvider(props) {
    return (
        <NotificationContext.Provider>
            {props.children}
        </NotificationContext.Provider>
    );
}

export default NotificationContext;
