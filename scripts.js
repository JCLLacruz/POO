const civilAircrafts = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg'
];

const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg'
];

const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militaryHelicopter = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];

class Gallery {
    constructor(civilImages, militaryImages) {
        this.civilImages = civilImages;
        this.militaryImages = militaryImages;
    }
    
    getRandomCivil() {
        const imgRandomCivilImg = this.civilImages[Math.floor(Math.random() * (5 - 1 + 1) + 1)];
        return imgRandomCivilImg;
    }
    
    getRandomMilitary() {
        const imgRandomMilitaryImg = this.militaryImages[Math.floor(Math.random() * (5 - 1 + 1) + 1)];
        return imgRandomMilitaryImg;
    }
    
    getAll() {
        const allImages = [...this.militaryImages,...this.civilImages];
        return allImages;
    }
}

class Painter {
    constructor(createGallery,gallery) {
        this.createGallery = createGallery();
        this.gallery = gallery;
    }

    createGallery() {
        const body = document.querySelector('body');
        this.gallery = document.createElement('section');
        body.appendChild(this.gallery);
    }

    createImageTag(imageUrl) {
        return `<picture>
                    <img src="${imageUrl}" />
                </picture>`
    }

    paintSingleImage(imageUrl) {
        return this.createImageTag(imageUrl);
    }

    paintMultipleImages(arrayOfImages) {
        arrayOfImages.forEach(element => this.createImageTag(element));
    }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();