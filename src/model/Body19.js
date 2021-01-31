/**
 * Learn APIs
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 3900.6.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The Body19 model module.
* @module model/Body19
* @version 3900.6.0
*/
export default class Body19 {
    /**
    * Constructs a new <code>Body19</code>.
    * @alias module:model/Body19
    * @class
    * @param categoryId {String} The human-readable id of the category
    * @param title {String} The title of category
    * @param available {Boolean} Boolean indicating whether or not the category is available
    */

    constructor(categoryId, title, available) {
        
        
        this['categoryId'] = categoryId;
        this['title'] = title;
        this['available'] = available;
        
    }

    /**
    * Constructs a <code>Body19</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Body19} obj Optional instance to populate.
    * @return {module:model/Body19} The populated <code>Body19</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Body19();
                        
            
            if (data.hasOwnProperty('parentId')) {
                obj['parentId'] = ApiClient.convertToType(data['parentId'], 'String');
            }
            if (data.hasOwnProperty('categoryId')) {
                obj['categoryId'] = ApiClient.convertToType(data['categoryId'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('frontPage')) {
                obj['frontPage'] = ApiClient.convertToType(data['frontPage'], 'Boolean');
            }
            if (data.hasOwnProperty('available')) {
                obj['available'] = ApiClient.convertToType(data['available'], 'Boolean');
            }
            if (data.hasOwnProperty('restricted')) {
                obj['restricted'] = ApiClient.convertToType(data['restricted'], 'Boolean');
            }
            if (data.hasOwnProperty('institutionRoleIds')) {
                obj['institutionRoleIds'] = ApiClient.convertToType(data['institutionRoleIds'], ['String']);
            }
        }
        return obj;
    }

    /**
    * The ID of this category's parent category
    * @member {String} parentId
    */
    'parentId' = undefined;
    /**
    * The human-readable id of the category
    * @member {String} categoryId
    */
    'categoryId' = undefined;
    /**
    * The title of category
    * @member {String} title
    */
    'title' = undefined;
    /**
    * The description of the category
    * @member {String} description
    */
    'description' = undefined;
    /**
    * Boolean indicating whether or not the category should appear on the catalog front page
    * @member {Boolean} frontPage
    */
    'frontPage' = undefined;
    /**
    * Boolean indicating whether or not the category is available
    * @member {Boolean} available
    */
    'available' = undefined;
    /**
    * Boolean indicating whether or not category is available to all roles, or restricted to a specific set of roles.
    * @member {Boolean} restricted
    */
    'restricted' = undefined;
    /**
    * The roles for which this category is available, if category is set to restricted. Not populated for lists of categories, only for individual category
    * @member {Array.<String>} institutionRoleIds
    */
    'institutionRoleIds' = undefined;




}