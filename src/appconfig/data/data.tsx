import type { RealEstateData } from "models/app-interface";

function getRandomIndex(exclude: number[] = []) {
  let num;
  do {
    num = Math.floor(Math.random() * 15) + 1;
  } while (exclude.includes(num));
  return num;
}
const generateTower = (towerId: string, towerName: string, floorCount: number, unitPrefix: string) => {
  return {
    id: towerId,
    name: towerName,
    floors: Array.from({ length: floorCount }, (_, floorIndex) => {
      const floorNumber = floorIndex + 1;

      return {
        floorNumber,
        apartments: Array.from({ length: 3 }, (_, aptIndex) => {
          const index = aptIndex + 1;
          const used: number[] = [];

          const randomImageIndex = getRandomIndex([]);
          const livingIndex = getRandomIndex(used);
          used.push(livingIndex);

          const bedroomIndex = getRandomIndex(used);
          used.push(bedroomIndex);

          const kitchenIndex = getRandomIndex(used);
          const area = `${getRandomIndex([]) + index * 5} sqm`;
          const unitType = `${unitPrefix}${getRandomIndex([]) * 3}`;
          const roomCount = index % 2 === 0 ? 2 : 1;

          return {
            id: `${towerId.toUpperCase().charAt(towerId.length - 1)}-Floor-${floorNumber}-${String(index).padStart(2, '0')}`,
            thumbnail: `/images/apartments/ap-${randomImageIndex}.jpg`,
            largeImage: `/images/apartments/ap-${randomImageIndex}.jpg`,
            metadata: {
              area,
              unitType,
              roomCount,
              description: `
                Apartment ${towerId.toUpperCase().charAt(towerId.length - 1)}-Floor-${floorNumber}-${String(index).padStart(2, '0')} located at ${towerName}, on floor ${floorNumber} 
                with area ${area}, unit type ${unitType} and ${roomCount} rooms`
            },
            sections: [
              { name: "Living Room", image: `/images/living-room/lr-${livingIndex}.jpg` },
              { name: "Bedrooms", image: `/images/bedrooms/bd-${bedroomIndex}.jpg` },
              { name: "Kitchen", image: `/images/kitchens/kt-${kitchenIndex}.jpg` },
            ]
          };
        })
      };
    })
  };
};

export const appData : RealEstateData = {
  towers: [
    generateTower("tower-a", "Tower A", 15, "2BK"),
    generateTower("tower-b", "Tower B", 12, "L9K"),
    generateTower("tower-c", "Tower C", 13, "4SK")
  ]
};
  