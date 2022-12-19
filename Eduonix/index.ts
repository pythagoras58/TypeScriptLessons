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


// interfaces
interface InventoryItems {
    displayName:string;
    inventoryType:string;
    trackingNumber : string;
    createdDate:Date;
    orginalCost:number;
}


function saveInventoryItem(item : InventoryItems) {
    item.createdDate = new Date();
    item.inventoryType = 'Furniture';
    item.orginalCost = 2231;
    item.trackingNumber = 'A31dd22';
}