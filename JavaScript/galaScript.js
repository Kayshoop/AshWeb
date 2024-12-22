// building gala for services
document.addEventListener('DOMContentLoaded', function() {
    const service = [
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},

        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},

        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},

        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},

        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},

        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},

        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},
        { photo: '', title: '', description: '', price: '', time: ''},

    ]; // there are 73 services

    const gallery = document.getElementsByClassName('serviceGala');

    service.forEach(service => {
        const serviceBox = document.createElement('div');
        serviceBox.classList.add('service-box');

        serviceBox.innerHTML = `
        <img src="${service.photo}" alt="${service.title}">
        <h3>${service.title}</h3>
        <p>${service.description}</p>
        <p><strong>Price:</strong>${service.price}</p>
        <p><strong>Time:</strong>${service.time}</p>
        `;

    gallery.appendChild(serviceBox);
    });
});