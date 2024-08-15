window.addEventListener("load", () => {
    clock();

    function clock() {
        const today = new Date();
        const hours = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();

        const hour = hours < 10 ? "0" + hours : hours;
        const minute = minutes < 10 ? "0" + minutes : minutes;
        const second = seconds < 10 ? "0" + seconds : seconds;

        const hourTime = hour > 12 ? hour - 12 : hour;
        const ampm = hour < 12 ? "AM" : "PM";

        const monthList = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const month = today.getMonth();
        const year = today.getFullYear();
        const day = today.getDate();
        const dayOfWeek = today.toLocaleDateString("en-US", { weekday: "long" });

        const date = `${dayOfWeek}, ${monthList[month]} ${day}, ${year}`;
        const time = `${hourTime}:${minute}:${second} ${ampm}`;
        const date2 = `${date}`
        const time2 = `Time ${time}`;

         document.getElementById("date").innerHTML =date2;       document.getElementById("time").innerHTML = time2;

        setTimeout(clock, 1000);
    }
});
