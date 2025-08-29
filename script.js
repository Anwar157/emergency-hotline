// heart increases.
let heartCount = 0;
document.querySelectorAll('.heart-icon').forEach(function(icon){
    icon.addEventListener('click', function(e){
        e.preventDefault();
        console.log("Hello World");
        heartCount++;
        document.getElementById('nav-heart-icon').innerText = heartCount;
    });
});

// Call functionality.
let coins = 100;
let coinsDisplay = document.getElementById('coin-balance');
coinsDisplay.innerText = coins;
const callHistory = document.getElementById('call-history');

document.querySelectorAll('.call-btn').forEach(function(callbutton){
    callbutton.addEventListener('click', function(e){
        e.preventDefault();
        const card = callbutton.closest('.card-info');
        const h2Elements = card.querySelectorAll('h2')
        const serviceName = h2Elements[0].innerText;
        const callNumber = h2Elements[1].innerText;

        if(coins>=20){
            const confirmCall = confirm (`Call to ${serviceName} and number is(${callNumber})\n আপনার খরচ হবে ২০ কয়েন।`);

        if(confirmCall){
            coins -= 20;
            coinsDisplay.innerText = coins;

            // call history
            const time = new Date().toLocaleTimeString();
            const newDiv = document.createElement('div'); 
            newDiv.classList.add(
                "p-4", "text-sm", "text-gray-700",
                "flex", "justify-between", "items-center", "shadow-lg", "rounded-lg",
                "mt-3", "ml-2", "mr-2", "bg-gray-200"
            );
            newDiv.innerHTML = `
            <div class="flex justify-between items-center w-full">
                <div class="flex flex-col">
                  <span> ${serviceName} </span>
                  <span> ${callNumber} </span>
                </div>
                <div><span> ${time} </span></div> 
            </div> `;

            callHistory.prepend(newDiv);
        }        
        } else {
            alert('Please recharge your coins');
        }
    });
});

// Clear History
const clearBtn = document.getElementById('clear-history')
.addEventListener('click', function(){
callHistory.innerHTML = "";
})

// Copy count

let copyCount = 0;
const copyButtons = document.querySelectorAll('.copy-btn');
copyButtons.forEach(function(button){
    button.addEventListener('click', function(){
        copyCount++;
        document.getElementById('copy-counter').innerText = copyCount;
    })
})

// Copy number

const copyButton = document.querySelectorAll('.copy-btn');
copyButton.forEach(function(button){
    button.addEventListener('click', function(){
        const card = button.closest('.card-info');
        const helpNumber = card.querySelectorAll('h2')[1].innerText;

        navigator.clipboard.writeText(helpNumber)
        .then(() => {
            alert(`copied: ${helpNumber}`);
        })
        .catch(err=> {
            console.error('Failed to copy', err);
        });
    
    });
});
