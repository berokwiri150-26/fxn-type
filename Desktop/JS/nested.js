const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});



function makeReservation () {
    console.log('Welcome to Bernd\'s portable auto. How can we help today?');

    const clientData = {};
        clientData.firstName = prompt('Please enter your first name.');
        clientData.lastName = prompt('Please enter your last name?');
        clientData.visitPurpose = prompt('What brings you to the garage today?');
        clientData.vehicleType = prompt('What type of vehicle do you have?');
        clientData.vehicleProblem = prompt('What is the problem with your vehicle?');
        clientData.vehicleSymptoms = prompt('What signs or symptoms have you noticed?');
        clientData.appointmentDate = prompt('When are you flexible to brin gin you car?');
        clientData.appointmentTime = prompt('What time would you like your vehicle to be seen?');


        function displayReservationDetails(){
            console.log (`${clientData.firstName} ${clientData.lastName}, you have set a vehicle diagnosis appointment for ${clientData.appointmentDate} for your ${clientData.vehicleType} at ${clientData.appointmentTime}. Thank you for choosing Bernd\'s portable auto.`);
        }

        displayReservationDetails();
        readline.close();

    }


makeReservation();