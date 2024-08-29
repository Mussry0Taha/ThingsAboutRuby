document.addEventListener("DOMContentLoaded", function () {
    const likes = [
        "Your smile ههههه أول حاجة فكرت فيها بتذكرها ل هسي مميزة شديد.",
        "You inspire me to embrace life more fully and to not be afraid to be different.",
        "The little quirks and habits that makes u unique .",
        "u love cats Same as me.",
        "Honstly since i've started knowing u have chanlleged me to be much better ",
        "Your sense of style ",
        "i guess your passion for hobbies Aslo should be inculded",
        "obviously your intelligence",
        "Not to forget the outstanding sense of humor u got ",
        "The way she loves me unconditionally."
    ];

    const listContainer = document.getElementById("likes-list");

    likes.forEach(like => {
        const listItem = document.createElement("li");
        listItem.textContent = like;
        listContainer.appendChild(listItem);
    });
    
    const summaryText = document.getElementById("summary-text");
    summaryText.textContent = 'I guess if i go on And on to praise you, the list will not be enough.';
    })