/**
* Crud basic operations
* @since 01.04.2022
* @author jcanales
**/ 
const { containerClient }  = require('../database/config');

/**
 * It creates a new item in the container.
 * @param object - The object to insert.
 * @returns The newly created item.
 */
const BasicInsertOperation = async( object ) => {

    const { resource: createdItem } = await containerClient.items.create( object );
    return createdItem;
}

/**
 * It retrieves all items from the container.
 * @param query - The query string to execute.
 * @returns An array of items.
 */
const BasicRetrieveOperation = async( query ) => {

    const { resources: items } = await containerClient.items.query({
        query
    }).fetchAll();

    return items;
}


/**
 * Replace an item in the container
 * @param idItemToReplace - The ID of the item to replace.
 * @param newItem - The new item to replace the old item.
 * @returns The updated item.
 */
const BasicUpdateOperation = async( idItemToReplace, newItem ) => {

    const { resource: updatedItem } = await containerClient.item( idItemToReplace )
        .replace(newItem);

    return updatedItem;    

}

/**
 * Delete an item from the container
 * @param id - The id of the item to delete.
 * @returns The result of the delete operation.
 */
const BasicDeleteOperation = async( id ) => {

    const { resource: result } = await containerClient.item( id ).delete();
    return result;

}

module.exports = {
    BasicInsertOperation,
    BasicRetrieveOperation,
    BasicUpdateOperation,
    BasicDeleteOperation
}