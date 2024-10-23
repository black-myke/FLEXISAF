import Tacos from '../Images/Mahi_Tacos.jpeg';
import Thai from '../Images/Pad_Tai.jpeg';
import Chips from '../Images/Fish_Chips.jpeg';
import Crabs from '../Images/Mixed_Crab.jpg';
import Salmon from '../Images/Salmon_Patties.jpeg';
import StirFry from '../Images/Shrimp_Stir_Fry.jpeg';
import CrabCake from '../Images/Crab_Cake.jpeg';
import Prawns from '../Images/Prawn_and_Crab.jpg';
import Corn from '../Images/Corn_and_Crab.jpg';

let dishes = [
    {
        id: 1,
        name: "Mahi Tacos",
        image: Tacos,
        price: "50",
        dishStatus: "Unavailable"
    },

    {
        id: 2,
        name: "Pad Thai",
        image: Thai,
        price: "100",
        dishStatus: "Available"
    },

    {
        id: 3,
        name: "Mixed Crabs",
        image: Crabs,
        price: "89",
        dishStatus: "Available"
    },

    {
        id: 4,
        name: "Fish & Chips",
        image: Chips,
        price: "75",
        dishStatus: "Unavailable"
    },

    {
        id: 5,
        name: "Salmon Patties",
        image: Salmon,
        price: "55",
        dishStatus: "Unavailable"
    },

    {
        id: 6,
        name: "Shrimp Stir Fry",
        image: StirFry,
        price: "95",
        dishStatus: "Available"
    },

    {
        id: 7,
        name: "Crab Cake",
        image: CrabCake,
        price: "60",
        dishStatus: "Unavailable"
    },

    {
        id: 8,
        name: "Prawn & Crab",
        image: Prawns,
        price: "40",
        dishStatus: "Unavailable"
    },

    {
        id: 9,
        name: "Corn & Crab",
        image: Corn,
        price: "77",
        dishStatus: "Unavailable"
    }
];



export default dishes;