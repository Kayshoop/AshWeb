// building gala for services
document.addEventListener('DOMContentLoaded', function() {
    const service = [
        {title: 'EYEBROW', description: 'Waxing the brow.', price: '$15', time: '20 min'},
        {title: 'CHIN', description: 'beard area', price: '$15', time: '20 MIN'},
        {title: 'CHEEKS', description: 'face cheeks', price: '$15', time: '20 MIN'},
        {title: 'EARS', description: 'getting those stubborn hairs', price: '$15', time: '20 MIN'},
        {title: 'NOSE', description: 'one strip at a time', price: '$15', time: '20 MIN'},
        {title: 'UPPER LIP', description: 'mustache piece', price: '$15', time: '20 MIN'},
        {title: 'BARZILIAN (FEMALE)', description: 'a full bikini area including the butt', price: '$65', time: '20 MIN'},
        {title: 'FULL BUTT', description: 'butt wax', price: '$20', time: '10 MIN'},
        {title: 'FULL ARM', description: 'shoulder to wrist', price: '$70', time: '40 MIN'},
        {title: 'HALF ARM', description: 'bellow the elbow', price: '$40', time: '25 MIN'},

        {title: 'FULL LEG', description: 'hip to ankle wax', price: '$95', time: '60 MIN'},
        {title: 'UPPER LEG', description: 'above the knee wax', price: '$55', time: '35 MIN'},
        {title: 'LOWER LEG', description: 'bellow the knee wax', price: '$60', time: '40 MIN'},

    ]; // there are 73 services

    const gallery = document.getElementsByClassName('serviceGala');

    service.forEach(service => {
        const serviceBox = document.createElement('div');
        serviceBox.classList.add('service-box');

        serviceBox.innerHTML = `
        <h3>${service.title}</h3>
        <p>${service.description}</p>
        <p><strong>Price:</strong>${service.price}</p>
        <p><strong>Time:</strong>${service.time}</p>
        `;

    gallery.appendChild(serviceBox);
    });
});