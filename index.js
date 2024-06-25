var urlParams = new URLSearchParams(window.location.search);

        
        let winner = Math.random() < 0.5 ? true : false

        
        let name = `${urlParams.get('firstname')} ${urlParams.get('lastname')}`
        let choice = urlParams.get('location') 
        let color = urlParams.get('color') 
        let extras = urlParams.getAll('extras')
        let email = urlParams.get('email') 
        let address = urlParams.get('address') 
        let cityStateZip = `${urlParams.get('city')}, ${urlParams.get('state')} ${urlParams.get('zip')}`
        let emailMessage = document.createElement('p')
        
        
        document.getElementById('disclaimer').textContent = `Thank you, ${name}, for entering our once in a lifetime vacation contest!`
        emailMessage.append(`${winner ? 'As our chosen winner' : 'Whenever we\'d like to send marketing materials to you'}, we will contact you via email at ${email}, and send written correspondence to the following mailbox:`)
        document.getElementById('disclaimer').append(emailMessage)
        document.getElementById('address1').textContent = address
        document.getElementById('address2').textContent = cityStateZip

        
        if (choice == 'Japan') {
            document.querySelector('.image').src = 'assets/japan.jpg'
        }
        else if (choice == 'New Zealand') {
            document.querySelector('.image').src = 'assets/new-zealand.jpg'
        }
        else if (choice == 'Reykjavik') {
            document.querySelector('.image').src = 'assets/iceland.jpg'
        }

       
        if (winner) {
            document.getElementById('status-message').textContent = `Congrats, ${name}, YOU WON!`
            document.getElementById('sub-message').textContent = `PACK YOUR BAGS, YOU'RE GOING TO ${choice.toUpperCase()}!`
            document.getElementById('status-message').style.color = color || 'crimson'
            document.getElementById('small-print').textContent = `Extras (${extras.join(', ')}) must be requested upon arrival at your destination`
        }
        else {
            document.getElementById('status-message').textContent = `Sorry, ${name}, You Didn't Win This Time!`
            document.getElementById('sub-message').textContent = `Maybe you'll get to ${choice} next time!`
            document.getElementById('small-print').textContent = 'Better luck next time!'
        }