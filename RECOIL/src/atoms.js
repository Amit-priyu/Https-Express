import { atom, selector } from "recoil";

import axios from "axios";


// async data queries..
// default can use selector and selector get function can be  asynchronous as well.
// give an async value to an...data
export const notifications=atom({
    key:"networkAtom",
    default:selector({
        key:"networkAtomSelector",
        get:async () => {
            await new Promise(r=>setTimeout(r,5000)) // this make cycle sleep for the 5 second.
            const res=await axios.get("https://sum-server.100xdevs.com/notifications");
            return res.data;
        }
    })
});

export const totalNotificationSelector=selector({
    key:"totalNotificationSelector",
    get:({get}) =>{
        const allnotifications=get(notifications);
        return allnotifications.network+
        allnotifications.jobs+
        allnotifications.notifications+
        allnotifications.messaging
    }
})

//part-1  for  understanding the recoil basic...


// import { atom, selector } from "recoil";

// export const networkAtom=atom({
//     // it take 2 things as a input;
//     key:"networkAtom",
//     default:102
// });

// export const jobAtom=atom({
//     key:"jobAtom",
//     default:0
// });

// export const notificationAtom=atom({
//     key:"notificationAtom",
//     default:12
// });

// export const messagingAtom=atom({
//     key:"messagingAtom",
//     default:0
// });

// export const totalNotificationSelector=selector({
//     key:"totalNotificationSelector",
//     get:({get})=>{
//         // it  will give the current values..
//         const networkAtomCount=get(networkAtom);
//         const notificationAtomCount=get(notificationAtom);
//         const messagingAtomCount=get(messagingAtom);
//         const jobAtomCount=get(jobAtom);
//         return networkAtomCount+notificationAtomCount+messagingAtomCount+jobAtomCount
//     }
// })