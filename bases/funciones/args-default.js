"use strict";
(() => {
    const fullName = (firstName, lastName, uppercase = false) => {
        if (uppercase) {
            return `${firstName} ${lastName || 'no last name'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || 'no last name'}`;
        }
    };
    const name = fullName('Tony', 'true');
    console.log({ name });
})();
