export function getDistanceCoordinatesInKm(lat1,lon1,lat2,lon2){
  const p = Math.PI/180;
  const radius = 6.371;
  const latitudeOne = lat1 * p; 
  const latitudeTwo = lat2 * p;
  const deltaLatitude = (lat2-lat1) * p;
  const deltaLongitude = (lon2-lon1) * p;
  
  const a = Math.sin(deltaLatitude/2) * Math.sin(deltaLatitude/2) +
            Math.cos(latitudeOne) * Math.cos(latitudeTwo) *
            Math.sin(deltaLongitude/2) * Math.sin(deltaLongitude/2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  
  return radius * c;
}

export function checkValidLatitude(value) {
    return typeof (value) == "number" && value <= 90 && value >= -90;
}

export function checkValidLongitude(value) {
    return typeof (value) == "number" && value <= 180 && value >= -180;
}
