export interface ApartmentSection {
    name: string;
    image: string; // URL to section image (e.g., kitchen, living room)
  }
  
export interface Apartment {
    id: string | undefined;
    
    metadata?: {
      unitType: string;
      area: number | string; // in square meters
      roomCount: number;
      description?: string;
    };
    thumbnail: string; // URL to thumbnail image
    largeImage: string; // URL to larger image
    sections: ApartmentSection[];
  }
  
export interface Floor {
    // id: string | number;
    floorNumber: number | undefined;
    apartments: Apartment[];
  }
  
export interface Tower {
    id: string;
    name: string; // e.g., "Tower A"
    floors: Floor[];
  }
  
export interface RealEstateData {
    towers: Tower[];
  }
  