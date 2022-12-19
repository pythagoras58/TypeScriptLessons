// Type inference
const trackingNumber = 'f121A321';
function getInventoryItem(trackingNumber : string) : {
    displayName:string; inventoryType:string;
    trackingNumber : string; createdDate:Date; orginalCost:number;
}{
    return null;
}

let inventoryItem = getInventoryItem(trackingNumber);
inventoryItem.displayName = 'Pytha-Shop';
inventoryItem.inventoryType = 'Commerce';
inventoryItem.createdDate = new Date;
inventoryItem.orginalCost = 4533;

console.log(inventoryItem);
