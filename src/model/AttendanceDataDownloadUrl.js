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
* The AttendanceDataDownloadUrl model module.
* @module model/AttendanceDataDownloadUrl
* @version 3900.6.0
*/
export default class AttendanceDataDownloadUrl {
    /**
    * Constructs a new <code>AttendanceDataDownloadUrl</code>.
    * @alias module:model/AttendanceDataDownloadUrl
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>AttendanceDataDownloadUrl</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AttendanceDataDownloadUrl} obj Optional instance to populate.
    * @return {module:model/AttendanceDataDownloadUrl} The populated <code>AttendanceDataDownloadUrl</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttendanceDataDownloadUrl();
                        
            
            if (data.hasOwnProperty('downloadUrl')) {
                obj['downloadUrl'] = ApiClient.convertToType(data['downloadUrl'], 'String');
            }
        }
        return obj;
    }

    /**
    * The download url of attendance data file.
    * @member {String} downloadUrl
    */
    'downloadUrl' = undefined;




}